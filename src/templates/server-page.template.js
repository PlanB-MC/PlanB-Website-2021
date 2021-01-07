import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { MapEmbed, NavbarBacking, ServerPageContainer, ServerTitleContainer, ServerTitleName, ServerTitleSubtitle } from './server-page.styles.js'
import Navigation from '../components/navigation/navigation.component'
import Footer from '../components/footer/footer.component'
import { Fragment } from 'react'

const ServerPageTemplate = props => {
  const server = get(props, 'data.contentfulServer')
  return (

    <Fragment>
      <Navigation noFloat />
      Test 1
      <Footer />
    </Fragment>
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
