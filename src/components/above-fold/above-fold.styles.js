import styled from 'styled-components'

export const AboveFoldContainer = styled.div``

export const BackgroundImg = styled.div`
  height: 100vh;
  background-image: url('https://github.com/PlanB-MC/pbWebsite/blob/master/src/Images/bg.png?raw=true');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:after {
    background: rgba(0, 0, 0, 0.3);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
`

export const SiteNameContainerBox = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SiteNameBox = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  padding: 15px 50px;
  z-index: 100;
  display: flex;
  justify-items: center;
`

export const SiteNameBoxContents = styled.div`
  margin: auto;
`

export const SiteNameTitle = styled.h1`
  font-size: 7.6em;
  font-family: 'Orbitron', sans-serif;
  color: #fff;
  letter-spacing: 0.1em;
  text-indent: 0.1em;
  margin: 0;
  height: fit-content;
  text-align: center;

  @media only screen and (max-width: 750px) {
    font-size: 5.6rem;
  }

  @media only screen and (max-width: 450px) {
    font-size: 3.6rem;
  }
`

export const SiteNameSubtitle = styled.h2`
  font-family: 'Armata', sans-serif;
  font-size: 1.7em;
  font-weight: 700;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  margin-top: -25px;
  letter-spacing: 1.8em;
  text-indent: 1.8em;
  padding-top: 15px;
  border-top: 3px solid rgba(255, 255, 255, 0.8);
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.5); */

  @media only screen and (max-width: 750px) {
    font-size: 1.2em;
    margin-top: -15px;
    letter-spacing: 1.8em;
    text-indent: 1.8em;
  }

  @media only screen and (max-width: 450px) {
    font-size: 1em;
    margin-top: -8px;
    letter-spacing: 1.5em;
    text-indent: 1.5em;
  }
`

export const JoinPBButton = styled.a`
  display: none;

  @media only screen and (max-width: 700px) {
    display: unset;
    z-index: 10;
    width: 50px;
    color: #fff;

    margin-top: 60px;
    text-transform: uppercase;
    text-align: center;

    border: 1px solid rgba(255, 255, 255, 0.3);
    min-width: 90px;
    padding: 10px 20px;

    -webkit-text-decoration: none;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.2);
  }
`
