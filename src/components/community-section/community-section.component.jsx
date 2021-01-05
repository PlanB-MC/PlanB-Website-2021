import React from 'react'
import { FaDiscord, FaTwitch, FaYoutube, FaReddit } from 'react-icons/fa';

import {
    CommunityIntroContainer,
    CommunitySectionContainer,
    CommunitySectionTitle,
    CommunitySectionSubTitle,
    CommunitySectionDesc,
    MembersContainer,
    MemberCard,
    MemberAvatar,
    MemberName,
    MemberSocials
} from './community-section.styles'
const members = require("../../data/members.json")

const CommunitySection = () => {

    return (
        <CommunitySectionContainer>
            <CommunityIntroContainer>
                <CommunitySectionTitle>THE PLANB COMMUNITY</CommunitySectionTitle>
                <CommunitySectionSubTitle>With strange aeons, even Death may die... <br /><span>- H.P. Lovecraft</span></CommunitySectionSubTitle>
                <CommunitySectionDesc>...And so may great Minecraft servers, it seems. Several years ago, Lovecraft, a vanilla Minecraft community, disappeared into the void together with its owner. We, a dedicated group of players and friends that played on it, had no clue where it went, but it left us without a home. We decided to not let that setback get to us and to continue its legacy in the form of a new server, where we could continue to express our creativity and unleash our wildest ideas. We decided it was time for a PlanB! Now 3 maps later we are standing at the gateway of the aquatic update and are looking for new players (Aged 18+) to join us in our exploration of these unknown waters on a brand new map for season 5!</CommunitySectionDesc>
            </CommunityIntroContainer>



            <MembersContainer>
                {members.map(member => {
                    return (
                        <MemberCard>
                            <MemberAvatar src={`https://visage.surgeplay.com/head/150/${member.uuid}`} />
                            <MemberName>{member.name}</MemberName>
                            <MemberSocials>
                                <a href={'#'}><FaDiscord /></a>
                                <a href={'#'}><FaTwitch /></a>
                                <a href={'#'}><FaYoutube /></a>
                                <a href={'#'}><FaReddit /></a>
                            </MemberSocials>
                        </MemberCard>
                    )
                })}
            </MembersContainer>

        </CommunitySectionContainer>
    )
}

export default CommunitySection

