import React from 'react'

import { WhitePanelContainer, WhitePanelContents, WhitePanelTitle } from './white-panel.styles'

const WhitePanel = ({ children, id, title, content, setHtmlContent }) => {

    return (
        <WhitePanelContainer id={id}>
            {title ? <WhitePanelTitle>{title}</WhitePanelTitle> : null}
            {content ? <WhitePanelContents>{content}</WhitePanelContents> : null}
            {setHtmlContent ? <WhitePanelContents dangerouslySetInnerHTML={{
                __html: setHtmlContent,
            }}
            /> : null}
            {children}
        </WhitePanelContainer>
    )
}

export default WhitePanel

