import styled from 'styled-components'

export const BarButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 35px;
  }
`

export const BarBtn = styled.a`
  border: 1px solid rgba(255, 255, 255, 0.3);
  min-width: 90px;
  padding: 10px 20px;
  margin: 0 20px;
  color: #fff;
  text-decoration: none;
  background-color: #1c1c1c;

  &:hover {
    -webkit-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
    -moz-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
    box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
  }
`

export const BarBtnIcon = styled.div`
  color: #ff1053;
`

export const BarBtnText = styled.div``

export const BarBtnNumber = styled.p`
  color: #ff1053;
  font-size: 30px;
  margin: 0;
`
