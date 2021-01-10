import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import moment from 'moment';
import ReactTooltip from 'react-tooltip';


import Layout from '../components/layout'
import { ServerPageContainer, NavbarBacking, MapEmbed, ServerTitleContainer, ServerTitleName, ServerTitleLinks, ServerDesc, LinkBtn, LinkIcon, LinkText, ServerPageContent, ServerInfoSection, ServerDataPanel, SeasonIconContainer, SeasonIconText, SeasonIconTray, SeasonIconLabel, PluginItem } from './server-page.styles'
import ServerPageLayout from '../layouts/server-page/server-page.layouts'
import { FaBirthdayCake, FaCalendarDay, FaChartLine, FaDownload, FaFontAwesomeFlag, FaGamepad, FaInfo, FaMap } from 'react-icons/fa'

const ServerPageTemplate = props => {
  const server = get(props, 'data.contentfulServer')
  const seasonAge = moment(server.seasonLaunchDate, "YYYYMMDD").fromNow().split(" ")

  const reduceStats = (statsFile) => {
    return statsFile.reduce((total, current) => {
      return { value: total.value + current.value }
    })
  }

  const formatNumber = (number) => {
    return Math.abs(Number(number)) >= 1.0e+9

      ? (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + "B"
      // Six Zeroes for Millions 
      : Math.abs(Number(number)) >= 1.0e+6

        ? (Math.abs(Number(number)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(number)) >= 1.0e+3

          ? (Math.abs(Number(number)) / 1.0e+3).toFixed(2) + "K"

          : Math.abs(Number(number));
  }


  const playTimeTotal = reduceStats(require("../data/stats/rankings/play.json"))
  const blocksBrokenTotal = reduceStats(require("../data/stats/rankings/mine_blocks.json"))
  const deathsTotal = reduceStats(require("../data/stats/rankings/death.json"))
  const mobsKilled = reduceStats(require("../data/stats/rankings/kill_any.json"))




  return (
    <ServerPageLayout>
      <ServerPageContainer>
        <NavbarBacking />
        <MapEmbed src={server.heroIframeUrl} />

        <ServerTitleContainer>
          <ServerTitleName>{server.serverName}</ServerTitleName>
          <ServerTitleLinks>

            <LinkBtn href="#desc">
              <LinkIcon><FaInfo /></LinkIcon>
              <LinkText>DESC</LinkText>
            </LinkBtn>

            {server.statsPageUrl ?
              <LinkBtn href={server.statsPageUrl} target="_blank" rel="noopener noreferrer">
                <LinkIcon><FaChartLine /></LinkIcon>
                <LinkText>STATS</LinkText>
              </LinkBtn>
              : null}



            <LinkBtn href={server.mapUrl} target="_blank" rel="noopener noreferrer">
              <LinkIcon><FaMap /></LinkIcon>
              <LinkText>MAP</LinkText>
            </LinkBtn>

            <LinkBtn href="#files">
              <LinkIcon><FaDownload /></LinkIcon>
              <LinkText>FILES</LinkText>
            </LinkBtn>

          </ServerTitleLinks>
        </ServerTitleContainer>

        <ServerPageContent>
          <ServerDesc id="desc" dangerouslySetInnerHTML={{
            __html: server.serverDescription.childMarkdownRemark.html,
          }} />

          <ServerInfoSection>
            <ServerDataPanel>
              <h2>{server.seasonDescTitle}</h2>
              <p dangerouslySetInnerHTML={{
                __html: server.seasonDescription.childMarkdownRemark.html,
              }} />

              <SeasonIconTray>


                {Object.keys(server.seasonStats).map(stat => {
                  if (server.seasonStats[stat] === null) return;
                  return (
                    <SeasonIconContainer>
                      <SeasonIconText>{server.seasonStats[stat][1]}</SeasonIconText>
                      <SeasonIconLabel>{server.seasonStats[stat][0]}</SeasonIconLabel>
                    </SeasonIconContainer>
                  )
                })}
                {
                  // <SeasonIconContainer>
                  //  <SeasonIconText>{server.seasonVersion}</SeasonIconText>
                  //   <SeasonIconLabel>VERSION</SeasonIconLabel>
                  // </SeasonIconContainer>

                  // <SeasonIconContainer>
                  //   <SeasonIconText>{seasonAge[0]}</SeasonIconText>
                  //   <SeasonIconLabel>{seasonAge[1].toUpperCase()} OLD</SeasonIconLabel>
                  // </SeasonIconContainer>

                  // <SeasonIconContainer>
                  //   <SeasonIconText>{Math.round((playTimeTotal.value / 20) / 86400)}</SeasonIconText>
                  //   <SeasonIconLabel>DAYS PLAYED</SeasonIconLabel>
                  // </SeasonIconContainer>

                  // <SeasonIconContainer>
                  //   <SeasonIconText>{formatNumber(blocksBrokenTotal.value)}</SeasonIconText>
                  //   <SeasonIconLabel>BLOCKS MINED</SeasonIconLabel>
                  // </SeasonIconContainer>

                  // <SeasonIconContainer>
                  //   <SeasonIconText>{formatNumber(deathsTotal.value)}</SeasonIconText>
                  //   <SeasonIconLabel>DEATHS</SeasonIconLabel>
                  // </SeasonIconContainer>

                  // <SeasonIconContainer>
                  //   <SeasonIconText>{formatNumber(mobsKilled.value)}</SeasonIconText>
                  //   <SeasonIconLabel>MOBS KILLED</SeasonIconLabel>
                  // </SeasonIconContainer>
                }

              </SeasonIconTray>


            </ServerDataPanel>

            <ServerDataPanel>
              <h2>{server.pluginTitle}</h2>
              <p>{server.pluginDesc}</p>
              <ul>
                {server.plugins.map(plugin => {
                  return (
                    <PluginItem key={plugin.pluginName} data-tip={plugin.shortDescription}><ReactTooltip className={"tooltip"} />
                      <a href={plugin.pluginUrl} target="_blank" rel="noopener noreferrer">{plugin.pluginName}</a>
                    </PluginItem>

                  )
                })}
              </ul>
            </ServerDataPanel>

          </ServerInfoSection>
        </ServerPageContent>
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
        heroIframeUrl
        serverDescription {
          childMarkdownRemark {
            html
          }
        }
        mapUrl
        statsPageUrl
        seasonDescTitle
        seasonDescription {
          childMarkdownRemark {
            html
          }
        }
        seasonVersion
        seasonLaunchDate
        pluginTitle
        pluginDesc
        plugins {
          pluginName
          longerDescription
          shortDescription
          pluginUrl
        }
        seasonStats {
          stat1
          stat2
          stat3
          stat4
          stat5
          stat6
        }


    }
   
  }
`
