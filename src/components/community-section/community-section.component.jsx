import React, { useState } from 'react'
import { FaDiscord, FaTwitch, FaYoutube, FaReddit } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroll-component';

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
    MemberSocials,
    LoadingLabel
} from './community-section.styles'
const members = require("../../data/members.json")

const CommunitySection = () => {

    const [items, setItems] = useState(members.slice(0, 9));

    const fetchMoreData = () => {
        console.log(items.length, items)
        setTimeout(() => {
            setItems(members.slice(0, (items.length + 9)))
        }, 700);
    };

    return (
        <CommunitySectionContainer id="about-planb">
            <CommunityIntroContainer >
                <CommunitySectionTitle>THE PLANB COMMUNITY</CommunitySectionTitle>
                <CommunitySectionSubTitle>With strange aeons, even Death may die... <br /><span>- H.P. Lovecraft</span></CommunitySectionSubTitle>
                <CommunitySectionDesc id="members">...And so may great Minecraft servers, it seems. Several years ago, Lovecraft, a vanilla Minecraft community, disappeared into the void together with its owner. We, a dedicated group of players and friends that played on it, had no clue where it went, but it left us without a home. We decided to not let that setback get to us and to continue its legacy in the form of a new server, where we could continue to express our creativity and unleash our wildest ideas. We decided it was time for a PlanB! Now 3 maps later we are standing at the gateway of the aquatic update and are looking for new players (Aged 18+) to join us in our exploration of these unknown waters on a brand new map for season 5!</CommunitySectionDesc>
            </CommunityIntroContainer>

            <MembersContainer >

                <InfiniteScroll
                    dataLength={items.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={items.length === members.length ? false : true}
                    loader={<LoadingLabel>Loading...</LoadingLabel>}

                    style={{
                        width: "100%",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridGap: "25px",
                        columnGap: "25px",
                        justifyItems: "center",
                        gridTemplateRows: "1fr min-content",
                        overflow: "unset"
                    }}
                >
                    {items.map((member, index) => (
                        <MemberCard key={index}>
                            <MemberAvatar src={`https://visage.surgeplay.com/head/150/${member.uuid}`} />
                            <MemberName>{member.name}</MemberName>
                            <MemberSocials>
                                <a href={'#'}><FaDiscord /></a>
                                <a href={'#'}><FaTwitch /></a>
                                <a href={'#'}><FaYoutube /></a>
                                <a href={'#'}><FaReddit /></a>
                            </MemberSocials>
                        </MemberCard>
                    ))}
                </InfiniteScroll>


            </MembersContainer>

        </CommunitySectionContainer>
    )
}

export default CommunitySection

