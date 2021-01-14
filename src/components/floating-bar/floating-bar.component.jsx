import React from 'react'
import { FloatingBarContainer, FloatingBarContentContainer, FloatingBarLinkBtn, FloatingBarLinkContainer, FloatingBarLinkIcon, FloatingBarLinkText, FloatingBarTitle } from './floating-bar.styles'


const FloatingBar = ({ id, title, links, content, setStateFn, target, rel }) => {

    const onClickFuntion = (stateName) => {
        return stateName ? setStateFn(stateName) : null
    }

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
                                <FloatingBarLinkBtn href={link.href} rel={link.rel} target={link.target} onClick={() => onClickFuntion(link.stateName)}>
                                    <FloatingBarLinkIcon >{link.icon}</FloatingBarLinkIcon>
                                    <FloatingBarLinkText>{link.text}</FloatingBarLinkText>
                                </FloatingBarLinkBtn>
                            )
                        })}
                    </FloatingBarLinkContainer>
                    : null
            }

            {
                content ? <FloatingBarContentContainer>{content}</FloatingBarContentContainer> : null
            }


        </FloatingBarContainer>
    )
}

export default FloatingBar