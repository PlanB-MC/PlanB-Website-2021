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
  const members = get(props, 'data.allContentfulMembers.nodes')

  const membermap = {
    admin: 'THE ADMINS',
    member: 'THE MEMBERS',
    vanilla: 'THE VANILLARIANS',
    modded: 'THE MODDERS',
  }

  const [floatingBarState, setFloatingBarState] = useState(null)

  console.log(members)
  const member_stats = {
    admin: members.filter((x) => x.communityRank.includes('Admin')).length,
    members: members.filter((x) => x.communityRoles.includes('Member')).length,
    vanilla: members.filter((x) => x.communityRoles.includes('🔔 VanillaMC'))
      .length,
    modded: members.filter((x) => x.communityRoles.includes('🔔 ModdedMC'))
      .length,
  }
  console.log(member_stats)
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
              stateName: 'member',
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
      <CommunitySection filter={floatingBarState} members={members} />
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
