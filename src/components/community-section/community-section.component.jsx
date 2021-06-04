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

const CommunitySection = ({ filter, members }) => {
  const [items, setItems] = useState(members.slice(0, 9))

  const fetchMoreData = () => {
    setTimeout(() => {
      setItems(members.slice(0, items.length + 9))
    }, 7000)
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
            const ranks_n_roles = member.communityRoles.concat(
              member.communityRank
            )
            if (ranks_n_roles.includes('Council of Ricks')) return

            const rank = ranks_n_roles ? ranks_n_roles.join(', ') : 'Member'

            console.log(1111, filter, rank)
            if (filter && !rank.toLowerCase().includes(filter)) return
            return <MemberCardNew member={member} />fdsdfdsfsd
          })}
        </InfiniteScroll>
      </MembersContainer>
    </CommunitySectionContainer>
  )
}

export default CommunitySection
