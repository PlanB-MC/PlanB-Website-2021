import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { MapEmbed, NavbarBacking, ServerPageContainer, ServerTitleContainer, ServerTitleName, ServerTitleSubtitle } from './server-page.styles.js'
import Navigation from '../components/navigation/navigation.component'
import Footer from '../components/footer/footer.component'

const ServerPageTemplate = props => {
  const server = get(props, 'data.contentfulServer')
  return (
    <div>
      <Navigation noFloat />
      <ServerPageContainer>
        <NavbarBacking />
        <MapEmbed src={server.mapUrl} />

        <ServerTitleContainer>
          <ServerTitleName>{server.serverName}</ServerTitleName>
          <ServerTitleSubtitle>Nether Update</ServerTitleSubtitle>
        </ServerTitleContainer>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </ServerPageContainer>
      <Footer />
    </div>
  )
}

export default ServerPageTemplate

export const pageQuery = graphql`
  query ServerPageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulServer(slug: { eq: $slug }) {
        serverName
        slug
        mapUrl
    }
   
  }
`
