import React from 'react'
import { MemberAvatar, MemberCardContainer, MemberCardName, SocialMediaTray } from './member-card.styles'
import { FaDiscord, FaTwitch, FaYoutube, FaReddit } from 'react-icons/fa';

const MemberCardNew = ({ member }) => {
    return (
        <MemberCardContainer>



            <MemberAvatar src={`https://crafatar.com/renders/body/${member.uuid}?size=120&overlay`} /><MemberCardName>{member.name}</MemberCardName>
            <SocialMediaTray>
                <a href={'#'}><FaDiscord /></a>
                <a href={'#'}><FaTwitch /></a>
                <a href={'#'}><FaYoutube /></a>
                <a href={'#'}><FaReddit /></a>
            </SocialMediaTray>
        </MemberCardContainer>
    )
}

export default MemberCardNew