import styled from 'styled-components'

export const FooterContainer = styled.div`
  /* height: 200px; */
  border-top: 5px solid #ff1053;
`

export const MainFooterContainer = styled.div`
  background-color: #222;
  height: 100%;
`

export const CopyrightBar = styled.div`
  background-color: #111;
  text-align: center;
  color: #999;
  padding: 7px 0;
`

export const SocialIconContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;

  & svg {
    fill: #fff;
    font-size: 20px;
    margin: 10px 25px;
  }

  & svg:hover {
    fill: #ff1053;
  }
`

export const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-around;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 80%;
  margin: auto;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 700px) {
    width: fit-content;
    margin: 0 auto;
    margin-bottom: 25px;
  }
`

export const ColumnTitle = styled.h5`
  border-left: 5px solid #ff1053;
  text-transform: uppercase;
  color: #fff;
  padding-left: 10px;
  margin-bottom: 5px;
  font-size: 19px;

  @media only screen and (max-width: 1000px) {
    font-size: 25px;
    padding-left: 15px;
  }

  @media only screen and (max-width: 700px) {
    border-left: none;
    padding: 0 0 0px 0;
    border-bottom: 3px solid #ff1053;
    text-align: center;
    width: fit-content;
    margin: 0 auto 10px auto;
  }
`

export const ColumnLinkContainer = styled.div`
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

export const ColumnLink = styled.div`
  color: #fff;
  padding-left: 15px;
  line-height: 26px;

  & a {
    color: #fff;
    text-decoration: none;
    margin-left: 3px;
  }

  @media only screen and (max-width: 1000px) {
    padding-left: 20px;
    font-size: 18px;
  }
`
