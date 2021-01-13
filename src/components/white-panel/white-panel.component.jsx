import React from 'react'

import { WhitePanelContainer } from './white-panel.styles'

const WhitePanel = ({ children, id }) => {

    return (
        <WhitePanelContainer id={id}>
            {children}
        </WhitePanelContainer>
    )
}

export default WhitePanel

