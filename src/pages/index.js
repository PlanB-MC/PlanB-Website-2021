import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import AboveFold from '../components/above-fold/above-fold.component'
import GameBar from '../components/game-bar/game-bar.component'
import MemberSection from '../components/member-section/member-section.component'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const games = get(this, 'props.data.allContentfulGames.nodes')

    return (
      <Layout location={this.props.location}>
        <Helmet title={siteTitle} />
        <AboveFold />
        <GameBar games={games} />
        <MemberSection />

      </Layout>
    )
  }
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
