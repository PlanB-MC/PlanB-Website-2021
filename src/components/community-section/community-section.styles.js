import { Link } from 'gatsby'
import styled from 'styled-components'

export const CommunitySectionContainer = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 250, 0.3)
    ),
    url('https://github.com/PlanB-MC/pbWebsite/blob/master/src/Images/bg.png?raw=true');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  text-align: center;
  padding: 55px 10vw;
  display: flex;
  flex-direction: column;
`

export const CommunityIntroContainer = styled.div`
  background: #ffffff94;
  margin-bottom: 125px;
  padding: 50px;
  border-radius: 8px;
`

export const CommunitySectionTitle = styled.h2`
  text-transform: uppercase;
  font-size: xx-large;
  border-bottom: 2px solid #ff1053;
  width: fit-content;
  margin: auto;
`

export const CommunitySectionSubTitle = styled.h3`
  font-size: large;
  margin-bottom: 15px;
  line-height: 25px;
  margin-top: 12px;

  & span {
    font-size: medium;
  }
`

export const CommunitySectionDesc = styled.p`
  margin-top: 25px;
  text-align: justify;
`

export const MembersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 25px;

  @media only screen and (max-width: 2400px) {
    grid-template-columns: repeat(9, 1fr);
  }

  @media only screen and (max-width: 2200px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media only screen and (max-width: 2000px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media only screen and (max-width: 1800px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media only screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 920px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const MemberCard = styled.div`
  padding: 20px;
  background-color: #ffff;
  justify-self: stretch;
  border-top: 5px solid #ff1053;
  margin-bottom: 90px;
  border-radius: 10px 10px 5px 5px;
  -webkit-box-shadow: 0px 9px 18px -2px rgba(0, 0, 0, 0.55);
  -moz-box-shadow: 0px 9px 18px -2px rgba(0, 0, 0, 0.55);
  box-shadow: 0px 9px 18px -2px rgba(0, 0, 0, 0.55);
`

export const MemberAvatar = styled.img`
  border-radius: 50%;
  padding: 5px;
  background-color: #fff;
  margin-top: -100px;
  border: 4px solid #ff1053;
`

export const MemberName = styled.h5`
  font-size: 30px;
`

export const MemberSocials = styled.div`
  display: flex;
  justify-content: space-around;
  margin: auto;
  margin-top: 10px;
  font-size: 28px;
  height: 35px;
  & svg {
    fill: #808080d1;
  }

  & svg:hover {
    fill: #ff1053;
  }
`

export const LoadingLabel = styled.h4`
  color: #fff;
  font-size: 30px;
`

export const ViewMoreBtn = styled(Link)`
  /* text-transform: uppercase;
  padding: 10px 30px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: ; */

  border: 1px solid rgba(255, 255, 255, 0.3);
  max-width: 50vw;
  padding: 20px 40px;
  margin: auto;
  margin-top: 50px;
  color: #fff;
  text-decoration: none;
  background-color: #222;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 800;

  &:hover {
    -webkit-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.5);
    -moz-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.5);
    box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.5);
    background-color: #222222e5;
  }
`
