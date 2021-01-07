import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { ServerPageContainer, NavbarBacking, MapEmbed, ServerTitleContainer, ServerTitleName, ServerTitleSubtitle } from './server-page.styles'
import Layout from '../components/layout'

const ServerPageTemplate = props => {
  const server = get(props, 'data.contentfulServer')
  return (
    <Layout location={props.location}>

      <ServerPageContainer>
        <NavbarBacking />
        <MapEmbed src={server.mapUrl} />

        <ServerTitleContainer>
          <ServerTitleName>{server.serverName}</ServerTitleName>
          <ServerTitleSubtitle>Nether Update</ServerTitleSubtitle>
        </ServerTitleContainer>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
      </ServerPageContainer>

    </Layout>
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
