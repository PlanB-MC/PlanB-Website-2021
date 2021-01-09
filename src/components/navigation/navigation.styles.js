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
    /* padding: 0 80px; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

  a {
    text-decoration: none;
    color: #fff;
    float: left;
  font-size: 16px;
  
  text-align: center;
  padding: 14px 16px;
  
  }

    ${getFloatStyles};
`

export const InnerContainer = styled.div`
  display: flex;
  margin: 0 60px;
  justify-content: space-between;
  width: 100vw;
`

export const SiteName = styled.a`
  color: #fff;
  font-size: 20px;
`;

export const SiteLinks = styled.div`
  display: flex;
  justify-content: right;
`


export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 150px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

   & a {
     float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
   }

   & a:hover {
     background-color: #ddd;
   }
 
`

export const DropdownButton = styled.div`
  font-size: 16px;
  color: #fff;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
`

export const DropdownLink = styled.div`
  min-width: 160px;
  &:hover ${DropdownContent} {
      display: block;
    }
`

