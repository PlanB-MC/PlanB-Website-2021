import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  width: fit-content;
  margin: 20px auto 0 auto;
`

export const SearchBarIcon = styled.div`
  position: relative;
  left: 60px;
  top: 7px;
  font-size: 30px;
`

export const SearchBar = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-size: 25px;
  min-width: 30vw;
  padding: 10px 10px 10px 60px;
  margin: 0 20px;
  color: #fff;
  text-decoration: none;
  background-color: #1c1c1c;
  text-transform: uppercase;

  &:hover {
    -webkit-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
    -moz-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
    box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
  }
`
