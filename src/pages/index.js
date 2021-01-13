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
import FloatingBar from '../components/floating-bar/floating-bar.component'
import GameCard from '../components/game-card/game-card.component'

import { FaAddressBook } from 'react-icons/fa'

const RootIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const games = get(props, 'data.allContentfulGames.nodes')

  const membermap = {
    admin: "THE ADMINS",
    member: "THE MEMBERS",
    vanilla: "THE VANILLARIANS",
    modded: "THE MODDERS"
  }

  const [floatingBarState, setFloatingBarState] = useState(null);
  console.log("STATE", floatingBarState)
  return (
    <Layout location={props.location}>
      <Helmet title={siteTitle} />
      <AboveFold />
      <GameBar games={games} />
      <MainContentContainer>
        <Grid columns={"1fr 2fr"}>
          <WhitePanel>
            <h2>THE AIM</h2>
            <p>Here at PlanB, our main focus and priority is to the community. Our humble network of servers boasts game modes and features requested from within the community. Including not only Survival and Creative servers but the occasional Modpack, vanilla Skyblock, game nights on public servers and more. Votes and discussion often take place around key points, to ensure every move is made in the best interest of us all.</p>
          </WhitePanel>
          <WhitePanel id="about-planb">
            <h2>THE HISTORY</h2>
            <q>With strange aeons, even Death may die... <br /><span>- H.P. Lovecraft</span></q>
            <p>...And so may great Minecraft servers, it seems. Several years ago, Lovecraft, a vanilla Minecraft community, disappeared into the void together with its owner. We, a dedicated group of players and friends that played on it, had no clue where it went, but it left us without a home. We decided to not let that setback get to us and to continue its legacy in the form of a new server, where we could continue to express our creativity and unleash our wildest ideas. We decided it was time for a PlanB! Now 3 maps later we are standing at the gateway of the aquatic update and are looking for new players (Aged 18+) to join us in our exploration of these unknown waters on a brand new map for season 5!</p>
          </WhitePanel>


        </Grid>
      </MainContentContainer>

      <FloatingBar
        id={"members"}
        title={floatingBarState ? membermap[floatingBarState] : "THE COMMUNITY"}
        links={[
          { href: "#members", icon: <FaAddressBook />, text: "ADMIN", stateName: "admin" },
          { href: "#members", icon: <FaAddressBook />, text: "MEMBER", stateName: "member" },
          { href: "#members", icon: <FaAddressBook />, text: "VANILLA MC", stateName: "vanilla" },
          { href: "#members", icon: <FaAddressBook />, text: "MODDED MC", stateName: "modded" },
        ]}
        setStateFn={setFloatingBarState}
      />
      {
        <CommunitySection filter={floatingBarState} />
      }

      <FloatingBar
        id={"notices"}
        title={"COMMUNITY NOTICES"}
      />

      <MainContentContainer>
        <Grid columns={"1fr 1fr 1fr"}>

          <WhitePanel id={"rules"}>
            <h2>The Rules</h2>
            <p>Most of the rules are common sense and there to ensure everyone has a great time, whilst on any of our servers. Please read over them carefully!</p>

            <ul>
              <li>No Griefing, stealing or un-invited PVP</li>
              <li>No harassment, bullying, hate speech or verbal abuse</li>
              <li> Be polite and treat others as you'd want to be treated</li>
              <li>Ask before building near someone</li>
              <li>House etiquette: do NOT look through other's chests without asking, please leave if asked to do so</li>
              <li>Keep the environment tidy, no half chopped trees</li>
              <li>Reply to this thread, mentioning how you applied</li>
              <li>No cheating or hacked clients</li>
              <li>No spamming or advertising</li>
            </ul>

          </WhitePanel>

          <WhitePanel>
            <h2>The Tech</h2>
            <p>By carefully maintaining our own dedicated hardware exclusive to PlanB, we do not rely on the poorly maintained or oversold shared servers typically used in small communities. Along side carefully handpicked or custom written plugins, healthy RAM and CPU allocation, regular backups and restarts helps to ensure we provide the smoothest game-play we can.</p>
            <p>We are currently running:</p>
            <ul>
              <li>AMD Ryzen 5 3600 Hexa-Core</li>
              <li>64GB DDR4 RAM</li>
              <li>2x 512 GB NVMe SSD</li>
            </ul>
          </WhitePanel>

          <WhitePanel id={"donations"}>
            <h2>The Funding</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet nec. </p>
            <p>Amet purus gravida quis blandit. Felis bibendum ut tristique et egestas quis ipsum suspendisse. Proin sed libero enim sed. Risus feugiat in ante metus dictum at tempor commodo ullamcorper. Laoreet id donec ultrices tincidunt arcu non. Sapien pellentesque habitant morbi tristique. Neque laoreet suspendisse interdum consectetur libero id faucibus. </p>
            <p>Auctor elit sed vulputate mi sit amet mauris commodo quis. Mauris rhoncus aenean vel elit scelerisque. Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Tellus in metus vulputate eu.</p>
          </WhitePanel>
        </Grid>
      </MainContentContainer>

      <FloatingBar
        content={games.map(game => <GameCard title={game.gameName} img={game.gameIcon.file.url} key={game.gameName} />)}
      />


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
