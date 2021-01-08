import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'


import Layout from '../components/layout'
import { ServerPageContainer, NavbarBacking, MapEmbed, ServerTitleContainer, ServerTitleName, ServerTitleSubtitle } from './server-page.styles'
import ServerPageLayout from '../layouts/server-page/server-page.layouts'

const ServerPageTemplate = props => {
  const server = get(props, 'data.contentfulServer')
  return (
    <ServerPageLayout>
      <ServerPageContainer>
        <NavbarBacking />
        <MapEmbed src={server.mapUrl} />

        <ServerTitleContainer>
          <ServerTitleName>{server.serverName} - Test 4</ServerTitleName>
          <ServerTitleSubtitle>Nether Update</ServerTitleSubtitle>
        </ServerTitleContainer>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </ServerPageContainer>
    </ServerPageLayout>
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
