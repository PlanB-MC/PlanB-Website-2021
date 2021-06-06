import React from 'react'
import {
  BarButtonContainer,
  BarBtn,
  BarBtnIcon,
  BarBtnNumber,
  BarBtnText,
} from './bar-button.styles'

const BarButton = ({ links, setStateFn }) => {
  const onClickFuntion = (stateName) => {
    return stateName ? setStateFn(stateName) : null
  }
  return (
    <BarButtonContainer>
      {links.map((link) => {
        return (
          <BarBtn
            href={link.href}
            rel={link.rel}
            target={link.target}
            onClick={() => onClickFuntion(link.stateName)}
          >
            {/* <BarBtnIcon>{link.icon}</BarBtnIcon> */}
            <BarBtnNumber>{link.stat}</BarBtnNumber>
            <BarBtnText>{link.text}</BarBtnText>
          </BarBtn>
        )
      })}
    </BarButtonContainer>
  )
}

export default BarButton
