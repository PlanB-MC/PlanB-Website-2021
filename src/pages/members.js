import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Layout from '../components/layout'
import FloatingBar from '../components/AA-new/floating-bar/floating-bar.components'
import { HeaderImage } from '../components/header-image/header-image.styles'
import { FaAddressBook, FaSearch } from 'react-icons/fa'
import { RiUserSearchFill } from 'react-icons/ri'

import {
  CommunitySectionContainer,
  MembersContainer,
  ViewMoreBtn,
} from '../components/community-section/community-section.styles'
import MemberCardNew from '../components/member-card/member-card.component'
import BarButton from '../components/bar-button/bar-button.component'
import {
  SearchBar,
  SearchBarContainer,
  SearchBarIcon,
} from '../page-style/members.styles'

const Members = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const members = {
    members: get(props, 'data.all_members.nodes'),
    admin: get(props, 'data.admin_members.nodes'),
    vanilla: get(props, 'data.vanilla_members.nodes'),
    modded: get(props, 'data.modded_members.nodes'),
    all: get(props, `data.allContentfulMembers.nodes`),
  }

  const membermap = {
    admin: 'THE ADMINS',
    members: 'THE MEMBERS',
    vanilla: 'THE VANILLARIANS',
    modded: 'THE MODDERS',
    all: 'THE COMMUNITY',
  }

  const [floatingBarState, setFloatingBarState] = useState('all')
  const [searchValue, setSearchValue] = useState(null)

  const member_stats = {
    admin: members.admin.length,
    members: members.members.length,
    vanilla: members.vanilla.length,
    modded: members.modded.length,
  }

  const onSearchUpdate = (search) => {
    setSearchValue(search.target.value)
  }

  const randomised_members = (members) => {
    return members.sort(() => Math.random() - 0.5)
  }

  return (
    <Layout location={props.location}>
      <Helmet title={`Join The Community   |   ${siteTitle}`} />
      <HeaderImage
        imgSrc={
          'https://images.ctfassets.net/pbs1z2kvqppr/4B6o0gdqsFhD2aKJ0ECGom/69b56083a8ca6fee4e90ab21f67d390b/s3.png'
        }
      />
      <FloatingBar
        id={'members'}
        title={floatingBarState ? membermap[floatingBarState] : 'THE COMMUNITY'}
      >
        <BarButton
          links={[
            {
              href: '#members',
              icon: <FaAddressBook />,
              stat: `${member_stats.admin}`,
              text: `ADMIN`,
              stateName: 'admin',
            },
            {
              href: '#members',
              icon: <FaAddressBook />,
              stat: member_stats.members,
              text: `MEMBERS`,
              stateName: 'members',
            },
            {
              href: '#members',
              icon: <FaAddressBook />,
              stat: member_stats.vanilla,
              text: `VANILLA MC`,
              stateName: 'vanilla',
            },
            {
              href: '#members',
              icon: <FaAddressBook />,
              stat: member_stats.modded,
              text: `MODDED MC`,
              stateName: 'modded',
            },
          ]}
          setStateFn={setFloatingBarState}
        />
        <SearchBarContainer>
          <SearchBarIcon>
            <RiUserSearchFill />
          </SearchBarIcon>
          <SearchBar
            onChange={onSearchUpdate}
            placeholder={`Search ${membermap[floatingBarState]}`}
          />
        </SearchBarContainer>
      </FloatingBar>

      <CommunitySectionContainer>
        <MembersContainer>
          {randomised_members(members[floatingBarState]).map(
            (member, index) => {
              if (searchValue) {
                const username = member.currentMinecraftIgn
                if (
                  username &&
                  username.toLowerCase().includes(searchValue.toLowerCase())
                )
                  return <MemberCardNew member={member} />
              } else return <MemberCardNew member={member} />
            }
          )}
        </MembersContainer>
      </CommunitySectionContainer>
    </Layout>
  )
}

export default Members

export const pageQuery = graphql`
  query MembersQuery {
    site {
      siteMetadata {
        title
      }
    }
    admin_members: allContentfulMembers(
      filter: {
        communityRoles: { in: "Admin" }
        currentMinecraftIgn: { ne: null }
      }
    ) {
      nodes {
        discordCurrentName
        minecraftUuid
        currentMinecraftIgn
        communityRoles
        communityRank
      }
    }
    all_members: allContentfulMembers(
      filter: {
        communityRoles: { in: "Member" }
        currentMinecraftIgn: { ne: null }
      }
    ) {
      nodes {
        discordCurrentName
        minecraftUuid
        currentMinecraftIgn
        communityRoles
        communityRank
      }
    }
    vanilla_members: allContentfulMembers(
      filter: {
        communityRoles: { in: "🔔 VanillaMC" }
        currentMinecraftIgn: { ne: null }
      }
    ) {
      nodes {
        discordCurrentName
        minecraftUuid
        currentMinecraftIgn
        communityRoles
        communityRank
      }
    }
    modded_members: allContentfulMembers(
      filter: {
        communityRoles: { in: "🔔 ModdedMC" }
        currentMinecraftIgn: { ne: null }
      }
    ) {
      nodes {
        discordCurrentName
        minecraftUuid
        currentMinecraftIgn
        communityRoles
        communityRank
      }
    }
    allContentfulMembers {
      nodes {
        discordCurrentName
        minecraftUuid
        currentMinecraftIgn
        communityRoles
        communityRank
      }
    }
  }
`
