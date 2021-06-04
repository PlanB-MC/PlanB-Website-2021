import React, { useState } from 'react'
import { FaDiscord, FaTwitch, FaYoutube, FaReddit } from 'react-icons/fa'
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
        {members.map((member, index) => {
          const ranks_n_roles = member.communityRoles.concat(
            member.communityRank
          )
          if (ranks_n_roles.includes('Council of Ricks')) return

          const rank = ranks_n_roles ? ranks_n_roles.join(', ') : 'Member'
          if (!member.minecraftUuid) return
          if (filter && !rank.toLowerCase().includes(filter)) return
          return <MemberCardNew member={member} />
        })}
      </MembersContainer>
    </CommunitySectionContainer>
  )
}

export default CommunitySection
