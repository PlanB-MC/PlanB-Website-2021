import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { FaDiscord, FaPatreon, FaInstagram, FaTwitter, FaYoutube, FaReddit, FaLink } from 'react-icons/fa';

import { Column, ColumnContainer, ColumnLink, ColumnTitle, CopyrightBar, FooterContainer, MainFooterContainer, SocialIconContainer } from './footer.styles'



export default () => (
    <StaticQuery
        query={graphql`
      query HeadingQuery {
          contentfulGeneralSettings {
          socialMedia {
            name
            url
          }
        }
        contentfulFooter {
            columnOneTitle
            columnOneLinks {
                text
                url
            }
            columnTwoTitle
            columnTwoLinks {
                text
                url
            }
            columnThreeTitle
            columnThreeLinks {
                text
                url
            }
            columnFourTitle
            columnFourLinks {
                text
                url
            }
        }
      }
    `}
        render={data => {

            const date = new Date()
            const currentYear = date.getFullYear();

            const whichSocial = (name) => {
                switch (name.toLowerCase()) {
                    case "discord":
                        return <FaDiscord />
                    case "patreon":
                        return <FaPatreon />
                    case "instagram":
                        return <FaInstagram />
                    case "youtube":
                        return <FaYoutube />
                    case "twitter":
                        return <FaTwitter />
                    case "reddit":
                        return <FaReddit />

                    default:
                        return <FaLink />;
                }
            }

            return (
                <FooterContainer>
                    <MainFooterContainer>

                        <ColumnContainer>

                            <Column>
                                <ColumnTitle>{data.contentfulFooter.columnOneTitle}</ColumnTitle>
                                {data.contentfulFooter.columnOneLinks.map((link, i) => (
                                    <ColumnLink key={i}>
                                        ❖  <a href={link.url}>{link.text}</a>
                                    </ColumnLink>
                                ))}
                            </Column>

                            <Column>
                                <ColumnTitle>{data.contentfulFooter.columnTwoTitle}</ColumnTitle>
                                {data.contentfulFooter.columnTwoLinks.map((link, i) => (
                                    <ColumnLink key={i}>
                                        ❖  <a href={link.url}>{link.text}</a>
                                    </ColumnLink>
                                ))}
                            </Column>

                            <Column>
                                <ColumnTitle>{data.contentfulFooter.columnThreeTitle}</ColumnTitle>
                                {data.contentfulFooter.columnThreeLinks.map((link, i) => (
                                    <ColumnLink key={i}>
                                        ❖  <a href={link.url}>{link.text}</a>
                                    </ColumnLink>
                                ))}
                            </Column>

                            <Column>
                                <ColumnTitle>{data.contentfulFooter.columnFourTitle}</ColumnTitle>
                                {data.contentfulFooter.columnFourLinks.map((link, i) => (
                                    <ColumnLink key={i}>
                                        ❖  <a href={link.url}>{link.text}</a>
                                    </ColumnLink>
                                ))}
                            </Column>


                        </ColumnContainer>
                        <SocialIconContainer>
                            {data.contentfulGeneralSettings.socialMedia.map((social, i) => {
                                return <a key={i} href={social.url}>{whichSocial(social.name)}</a>
                            })}
                        </SocialIconContainer>
                    </MainFooterContainer>
                    <CopyrightBar>Copyright © {currentYear} - PlanB MC</CopyrightBar>
                </FooterContainer>
            )
        }}
    />
)
