import React from 'react'
import {
  DisabledSocialIcon,
  MemberAvatar,
  MemberCardContainer,
  MemberCardName,
  SocialIcon,
  SocialMediaTray,
} from './member-card.styles'
import { FaDiscord, FaTwitch, FaYoutube, FaReddit } from 'react-icons/fa'

const MemberCardNew = ({ member }) => {
  const { currentMinecraftIgn, discordCurrentName, minecraftUuid } = member
  const name = currentMinecraftIgn ? currentMinecraftIgn : discordCurrentName
  const uuid = minecraftUuid
    ? `https://crafatar.com/renders/body/${minecraftUuid}?size=120&overlay`
    : 'https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg'
  console.log(member)
  return (
    <MemberCardContainer>
      <MemberAvatar src={uuid} />
      <MemberCardName>{name}</MemberCardName>
      <SocialMediaTray>
        {/* DISCORD SOCIAL ICON */}
        {member.discord ? (
          <SocialIcon href={member.discord}>
            <FaDiscord />
          </SocialIcon>
        ) : (
          <DisabledSocialIcon>
            <FaDiscord />
          </DisabledSocialIcon>
        )}

        {/* TWITCH SOCIAL ICON */}
        {member.twitch ? (
          <SocialIcon href={member.twitch}>
            <FaTwitch />
          </SocialIcon>
        ) : (
          <DisabledSocialIcon>
            <FaTwitch />
          </DisabledSocialIcon>
        )}

        {/* YOUTUBE SOCIAL ICON */}
        {member.youtube ? (
          <SocialIcon href={member.youtube}>
            <FaYoutube />
          </SocialIcon>
        ) : (
          <DisabledSocialIcon>
            <FaYoutube />
          </DisabledSocialIcon>
        )}

        {/* REDDIT SOCIAL ICON */}
        {member.reddit ? (
          <SocialIcon href={`https://reddit.com/u/${member.reddit}`}>
            <FaReddit />
          </SocialIcon>
        ) : (
          <DisabledSocialIcon>
            <FaReddit />
          </DisabledSocialIcon>
        )}
      </SocialMediaTray>
    </MemberCardContainer>
  )
}

export default MemberCardNew
