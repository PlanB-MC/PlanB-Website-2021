import React from 'react'
import { Fragment } from 'react'

import {
  AboveFoldContainer,
  BackgroundImg,
  JoinPBButton,
  SiteNameBox,
  SiteNameBoxContents,
  SiteNameContainerBox,
  SiteNameSubtitle,
  SiteNameTitle,
} from './above-fold.styles.js'

const AboveFold = () => {
  return (
    <AboveFoldContainer>
      <BackgroundImg>
        <SiteNameContainerBox>
          <SiteNameBox>
            <SiteNameBoxContents>
              <SiteNameTitle>PlanB</SiteNameTitle>
              <SiteNameSubtitle>GAMING</SiteNameSubtitle>
            </SiteNameBoxContents>
          </SiteNameBox>
          <JoinPBButton to="/join-planb">Join</JoinPBButton>
        </SiteNameContainerBox>
      </BackgroundImg>
      <div className="moving-clouds"></div>
    </AboveFoldContainer>
  )
}

export default AboveFold
