import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'

import heroStyles from '../components/hero.module.css'
import { MapEmbed, NavbarBacking, ServerPageContainer, ServerTitleContainer, ServerTitleName, ServerTitleSubtitle } from './serverPage.styles.js'
import { Fragment } from 'react'
import Navigation from '../components/navigation/navigation.component'
import Footer from '../components/footer/footer.component'

class ServerPageTemplate extends React.Component {
    render() {
        const server = get(this.props, 'data.contentfulServer')
        const siteTitle = get(this.props, 'data.site.siteMetadata.title')

        return (
            <Fragment>
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
            </Fragment>



        )
    }
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
