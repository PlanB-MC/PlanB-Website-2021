import styled from 'styled-components'

export const GameBarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
  }
`
