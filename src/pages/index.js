import React, { useState } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import AboveFold from '../components/above-fold/above-fold.component'
import GameBar from '../components/game-bar/game-bar.component'
import CommunitySection from '../components/community-section/community-section.component'

import { MainContentContainer } from '../page-style/index-styles'
import WhitePanel from '../components/white-panel/white-panel.component'
import Grid from '../components/grid/grid.component'
import FloatingBar from '../components/AA-new/floating-bar/floating-bar.components'
import GameCard from '../components/game-card/game-card.component'

import { FaAddressBook } from 'react-icons/fa'
import BarButton from '../components/bar-button/bar-button.component'

const RootIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const generalSettings = get(
    props,
    'data.allContentfulGeneralSettings.nodes'
  )[0]
  const games = get(props, 'data.allContentfulGames.nodes')
  const members = {
    members: get(props, 'data.all_members.nodes'),
    admin: get(props, 'data.admin_members.nodes'),
    vanilla: get(props, 'data.vanilla_members.nodes'),
    modded: get(props, 'data.modded_members.nodes'),
  }

  const membermap = {
    admin: 'THE ADMINS',
    members: 'THE MEMBERS',
    vanilla: 'THE VANILLARIANS',
    modded: 'THE MODDERS',
  }

  const [floatingBarState, setFloatingBarState] = useState(null)

  const member_stats = {
    admin: members.admin.length,
    members: members.members.length,
    vanilla: members.vanilla.length,
    modded: members.modded.length,
  }

  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <AboveFold />
      <FloatingBar>
        <GameBar>
          {games.map((game) => (
            <GameCard
              title={game.gameName}
              img={game.gameIcon.file.url}
              key={game.gameName}
            />
          ))}
        </GameBar>
      </FloatingBar>
      <MainContentContainer>
        <Grid columns={'1fr 2fr'}>
          <WhitePanel
            title={generalSettings.theAimTitle.toUpperCase()}
            setHtmlContent={
              generalSettings.theAimContent.childMarkdownRemark.html
            }
          />

          <WhitePanel
            id="about-planb"
            title={generalSettings.theHistoryTitle.toUpperCase()}
            setHtmlContent={
              generalSettings.theHistoryContent.childMarkdownRemark.html
            }
          />
        </Grid>
      </MainContentContainer>
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
      </FloatingBar>
      <CommunitySection
        filter={floatingBarState}
        members={floatingBarState ? members[floatingBarState] : members.members}
      />
      <FloatingBar id={'notices'} title={'COMMUNITY NOTICES'} />
      <MainContentContainer>
        <Grid columns={'1fr 1fr 1fr'}>
          <WhitePanel
            id={'rules'}
            title={generalSettings.theRulesTitle}
            setHtmlContent={
              generalSettings.theRulesContent.childMarkdownRemark.html
            }
          />

          <WhitePanel
            title={generalSettings.theTechTitle}
            setHtmlContent={
              generalSettings.theTechContent.childMarkdownRemark.html
            }
          />

          <WhitePanel
            id={'donations'}
            title={generalSettings.theFundingTitle}
            setHtmlContent={
              generalSettings.theFundingContent.childMarkdownRemark.html
            }
          />
        </Grid>
      </MainContentContainer>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulGeneralSettings {
      nodes {
        theAimTitle
        theAimContent {
          childMarkdownRemark {
            html
          }
        }
        theHistoryTitle
        theHistoryContent {
          childMarkdownRemark {
            html
          }
        }
        theRulesTitle
        theRulesContent {
          childMarkdownRemark {
            html
          }
        }
        theTechTitle
        theTechContent {
          childMarkdownRemark {
            html
          }
        }
        theFundingTitle
        theFundingContent {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulGames {
      nodes {
        gameName
        gameIcon {
          file {
            url
          }
        }
      }
    }
  }
`
