import React from 'react'
import { FloatingBarContainer, FloatingBarLinkBtn, FloatingBarLinkContainer, FloatingBarLinkIcon, FloatingBarLinkText, FloatingBarTitle } from './floating-bar.styles'


const FloatingBar = ({ id, title, links, content, setStateFn, stateName }) => {

    return (
        <FloatingBarContainer id={id}>
            {
                title ? <FloatingBarTitle>{title}</FloatingBarTitle> : null
            }

            {
                links ?
                    <FloatingBarLinkContainer>
                        {links.map(link => {
                            return (
                                <FloatingBarLinkBtn href={link.href} onClick={() => setStateFn(link.stateName)}>
                                    <FloatingBarLinkIcon >{link.icon}</FloatingBarLinkIcon>
                                    <FloatingBarLinkText>{link.text}</FloatingBarLinkText>
                                </FloatingBarLinkBtn>
                            )
                        })}
                    </FloatingBarLinkContainer>
                    : null
            }

            {
                content ? content : null
            }


        </FloatingBarContainer>
    )
}

export default FloatingBar