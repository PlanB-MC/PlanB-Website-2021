import React, { useState } from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import moment from 'moment';

import { ServerPageContainer, NavbarBacking, MapEmbed, ServerTitleContainer, ServerTitleName, ServerTitleLinks, ServerDesc, LinkBtn, LinkIcon, LinkText, ServerPageContent, ServerInfoSection, ServerDataPanel, SeasonIconContainer, SeasonIconText, SeasonIconTray, SeasonIconLabel, PluginItem, DownloadContainer, DownloadCard, DownloadCardImage, DownloadCardDescription, DownloadCardTitle, DownloadMainContent, DownloadCardButton, TagContainer, Tag, VersionTag, DownloadControlBar, DownloadSection } from './server-page.styles'
import ServerPageLayout from '../layouts/server-page/server-page.layouts'
import { FaChartLine, FaCogs, FaDownload, FaHashtag, FaInfo, FaMap, FaPaintBrush, FaRegIdBadge, FaRegListAlt, FaTag, FaTree, FaUserTie } from 'react-icons/fa'
import FloatingBar from '../components/floating-bar/floating-bar.component';

const ServerPageTemplate = props => {
  const server = get(props, 'data.contentfulServer')
  const downloads = get(props, 'data.allContentfulDownloads.nodes')
  const seasonAge = moment(server.seasonLaunchDate, "YYYYMMDD").fromNow().split(" ")

  const tagMapper = (tags, icon) => {
    return tags.map(tag => {

      return (
        <Tag data-tip={tag.tagDescription}>{icon} {tag.name}</Tag>
      )
    })
  }

  const versionTag = (version) => {
    if (version.toLowerCase() === "n/a") return;
    const versionArray = version.split(".")
    let tip = ``;

    if (versionArray[2].toLowerCase().includes("x")) tip = `This is expected to work with all sub versions of ${versionArray[0]}.${versionArray[1]}`
    else tip = `This is expected to work with only version ${version}`

    return <VersionTag data-tip={tip}><FaHashtag /> {version}</VersionTag>
  }

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


  // const playTimeTotal = reduceStats(require("../data/stats/rankings/play.json"))
  // const blocksBrokenTotal = reduceStats(require("../data/stats/rankings/mine_blocks.json"))
  // const deathsTotal = reduceStats(require("../data/stats/rankings/death.json"))
  // const mobsKilled = reduceStats(require("../data/stats/rankings/kill_any.json"))

  const [downloadFilter, setDownloadFilter] = useState("all")

  const serverIntroBarLinks = [
    { href: "#desc", icon: <FaInfo />, text: "Description", }
  ]

  if (server.statsPageUrl) serverIntroBarLinks.push({ href: server.statsPageUrl, icon: <FaChartLine />, text: "Stats", target: "_blank", rel: "noopener noreferrer" })
  if (server.mapUrl) serverIntroBarLinks.push({ href: server.statsPageUrl, icon: <FaMap />, text: "Map", target: "_blank", rel: "noopener noreferrer" })
  serverIntroBarLinks.push({ href: "#files", icon: <FaDownload />, text: "Files", target: "_blank", rel: "noopener noreferrer" })


  return (
    <ServerPageLayout>
      <ServerPageContainer>
        <NavbarBacking />
        <MapEmbed src={server.heroIframeUrl} />

        <FloatingBar
          title={server.serverName}
          links={serverIntroBarLinks}
        />



        <ServerPageContent>
          <ServerDesc id="desc" dangerouslySetInnerHTML={{
            __html: server.serverDescription.childMarkdownRemark.html,
          }} />

          <ServerInfoSection>
            <ServerDataPanel>
              <h2>{server.seasonDescTitle}</h2>
              <div dangerouslySetInnerHTML={{
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
                    <PluginItem key={plugin.pluginName}>
                      <a href={plugin.pluginUrl} target="_blank" rel="noopener noreferrer" data-tip={plugin.shortDescription}>{plugin.pluginName}</a>
                    </PluginItem>
                  )
                })}
              </ul>
            </ServerDataPanel>

          </ServerInfoSection>

        </ServerPageContent>
      </ServerPageContainer>



      <FloatingBar
        id="files"
        title="DOWNLOADS"
        links={[
          { href: "#files", icon: <FaRegListAlt />, text: "All", stateName: "all" },
          { href: "#files", icon: <FaCogs />, text: "Client Tweaks", stateName: "Client Tweaks" },
          { href: "#files", icon: <FaMap />, text: "Maps", stateName: "Map" },
          { href: "#files", icon: <FaRegListAlt />, text: "Seasons", stateName: "Season" },
          { href: "#files", icon: <FaPaintBrush />, text: "Texture Pack", stateName: "Texture Pack" },
          { href: "#files", icon: <FaTree />, text: "Skins", stateName: "Skin" },
        ]}
        setStateFn={setDownloadFilter}
      />


      <DownloadSection>
        <DownloadContainer>
          {
            downloads.map(itm => {
              const tags = itm.downloadTags.map(tag => tag.name)
              tags.push("all")

              if (!tags.includes(downloadFilter)) return;
              return (
                <DownloadCard>
                  {versionTag(itm.minecraftVersion)}
                  <TagContainer>
                    {tagMapper(itm.downloadTags, <FaTag />)}
                  </TagContainer>
                  <DownloadCardImage src={`${itm.thumbnail.file.url}`} />

                  <DownloadCardTitle>{itm.name}</DownloadCardTitle>
                  <DownloadMainContent>
                    <DownloadCardDescription dangerouslySetInnerHTML={{
                      __html: itm.description.childMarkdownRemark.html,
                    }} />
                    <DownloadCardButton href={itm.file.file.url}>Download</DownloadCardButton>
                  </DownloadMainContent>

                </DownloadCard>

              )
            })
          }
        </DownloadContainer>
      </DownloadSection>
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
   allContentfulDownloads(filter: {server: {elemMatch: {slug: {eq: $slug}}}}, sort: {order: ASC, fields: name}) {

      nodes {
        id
        name
        minecraftVersion
        downloadTags {
          name
          tagDescription
        }
        description {
          childMarkdownRemark {
            html
          }
        }
        thumbnail {
          file {
            url
          }
        }
        file {
          file {
            url
          }
        }
      }

  }
  }
`
