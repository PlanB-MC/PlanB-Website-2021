import React from 'react'
import { MainContentContainer } from '../../page-style/index-styles'
import WhitePanel from '../white-panel/white-panel.component'
import { HowJoinContainer } from './how-to-apply.styles'
import Grid from '../grid/grid.component'

const HowToApply = ({}) => {
  return (
    <HowJoinContainer>
      <MainContentContainer>
        <Grid columns={'1fr 2fr'}>
          <WhitePanel title={'The Process'} setHtmlContent={'nkgfl'} />

          <WhitePanel
            title={'The Steps'}
            setHtmlContent={`<ul>
                <li>Join our <a href="#">Discord</a></li>
                <li>Read the welcome DM & <a href="/rules">Rules</a></li>
                <li>Click the link in the DM</li>
                <li>Complete the application</li>
                <li>Check it & Send it</li>
                <li>Await approval</li>
              </ul>`}
          />
        </Grid>
      </MainContentContainer>
    </HowJoinContainer>
  )
}

export default HowToApply
