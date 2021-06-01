import React, { useState } from 'react'
import { FaDiscord, FaTwitch, FaYoutube, FaReddit } from 'react-icons/fa'
import InfiniteScroll from 'react-infinite-scroll-component'
import MemberCardNew from '../member-card/member-card.component'

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
  LoadingLabel,
} from './community-section.styles'
const members = require('../../data/members.json')

const CommunitySection = ({ filter }) => {
  const [items, setItems] = useState(members.slice(0, 9))

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(members.slice(0, items.length + 9))
    }, 700)
  }

  return (
    <CommunitySectionContainer>
      <MembersContainer id="members">
        <InfiniteScroll
          dataLength={items.length} //This is important field to render the next data
          next={fetchMoreData}
          hasMore={items.length === members.length ? false : true}
          loader={<LoadingLabel>Loading...</LoadingLabel>}
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridGap: '25px',
            columnGap: '25px',
            justifyItems: 'center',
            gridTemplateRows: '1fr min-content',
            overflow: 'unset',
          }}
        >
          {members.map((member, index) => {
            const rank = member.rank ? member.rank : 'Member'
            if (filter && !rank.includes(filter)) return
            return <MemberCardNew member={member} />
          })}
        </InfiniteScroll>
      </MembersContainer>
    </CommunitySectionContainer>
  )
}

export default CommunitySection
