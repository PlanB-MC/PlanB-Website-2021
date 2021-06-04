import React from 'react'
import { FloatingBarContainer, FloatingBarTitle } from './floating-bar.styles'

const FloatingBar = ({ children, title, id }) => {
  return (
    <FloatingBarContainer id={id}>
      {title ? <FloatingBarTitle>{title}</FloatingBarTitle> : null}
      {children}
    </FloatingBarContainer>
  )
}

export default FloatingBar
