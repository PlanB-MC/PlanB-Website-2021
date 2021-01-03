import styled, { css } from "styled-components"

const floatStyles = css`
  background: rgba(17,12,12,.9);
  box-shadow: 0 5px 10px 0 rgba(0,0,0,.56);    
`

const getFloatStyles = ({ float }) => (float ? floatStyles : null)

export const NavContainer = styled.nav`
    background: rgba(17,12,12,0);
    position: fixed;
    z-index: 99999;
    width: 100vw;
    height: 80px;
    padding: 0 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  a {
    text-decoration: none;
  }

    ${getFloatStyles};
`

export const SiteName = styled.p`
  color: #fff;
`;