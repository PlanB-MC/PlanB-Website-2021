import React from 'react'
import { Fragment } from 'react'

import { AboveFoldContainer, BackgroundImg, SiteNameBox, SiteNameContainerBox, } from './above-fold.styles.js'


const AboveFold = () => {

    return (
        <AboveFoldContainer>
            <BackgroundImg>
                <SiteNameContainerBox>
                    <SiteNameBox>
                        <h1>PlanB</h1>
                        <h2>GAMING</h2>
                    </SiteNameBox>
                </SiteNameContainerBox>

            </BackgroundImg>
            <div className="moving-clouds"></div>

        </AboveFoldContainer>


    )
}

export default AboveFold

