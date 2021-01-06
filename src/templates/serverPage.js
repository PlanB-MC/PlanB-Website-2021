import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { MapEmbed, NavbarBacking, ServerPageContainer, ServerTitleContainer, ServerTitleName, ServerTitleSubtitle } from './serverPage.styles.js'
import Navigation from '../components/navigation/navigation.component'
import Footer from '../components/footer/footer.component'

class ServerPageTemplate extends React.Component {
    render() {
        const server = get(this.props, 'data.contentfulServer')

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