import React, { useEffect, useState } from 'react'
import useDebounce from '../../helpers/useDebounce.helper'
import MemberCardNew from '../member-card/member-card.component'
const browser = typeof window === 'undefined' ? null : require('browser-size')()

import {
  CommunitySectionContainer,
  MembersContainer,
  ViewMoreBtn,
} from './community-section.styles'

const CommunitySection = ({ filter, members }) => {
  const [window_width, set_wind_width] = useState(
    typeof window !== 'undefined' ? document.documentElement.clientWidth : null
  )

  const calculate_cards = () => {
    if (window_width <= 600) return 4
    if (window_width > 600 && window_width <= 920) return 4
    if (window_width > 920 && window_width <= 1200) return 6
    if (window_width > 1200 && window_width <= 1400) return 8
    if (window_width > 1400 && window_width <= 1600) return 10
    if (window_width > 1600 && window_width <= 1800) return 12
    if (window_width > 1800 && window_width <= 2000) return 14
    if (window_width > 2000 && window_width <= 2200) return 16
    if (window_width > 2200 && window_width <= 2400) return 18
    if (window_width > 2400) return 20
  }
  const [member_count, set_member_count] = useState(calculate_cards())

  if (typeof window !== 'undefined') {
    browser.on('resize', function () {
      set_wind_width(document.documentElement.clientWidth)
      set_member_count(calculate_cards())
    })
  }
  // useDebounce(, 500)

  const randomised_members = members.sort(() => Math.random() - 0.5)

  const members_sample = randomised_members.slice(0, member_count)

  return (
    <CommunitySectionContainer>
      <MembersContainer id="members">
        {members_sample.map((member, index) => {
          return <MemberCardNew member={member} />
        })}
      </MembersContainer>
      <ViewMoreBtn to={`/members`}>Meet The rest</ViewMoreBtn>
    </CommunitySectionContainer>
  )
}

export default CommunitySection
