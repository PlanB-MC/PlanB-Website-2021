import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'

export const ServerPageContainer = styled.div`
  background-color: #fefeff;
  background-image: url('https://cdn.discordapp.com/attachments/705560562318180412/709746145777156116/2020-05-12_13.15.16.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

export const NavbarBacking = styled.div`
  background-color: #000;
  height: 80px;
`

export const MapEmbed = styled.iframe`
  width: 100%;
  height: calc(100vh - 320px);
  position: relative;
  z-index: 1;
  border: none;
  margin-bottom: -15px;
`

export const ImageEmbed = styled.img`
  height: 100%;
  width: 100%;
  z-index: 1;
  border: none;
  margin-bottom: -15px;
`

export const ServerDesc = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.75);
  color: #fff;
  padding: 20px 40px;
`

export const ServerPageContent = styled.div`
  width: 80vw;
  margin: auto;
  padding: 50px 0 63px 0;
  text-align: center;
`

export const ServerInfoSection = styled.div`
  /* margin-top: 50px; */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 50px;
`

export const ServerDataPanel = styled.div`
  margin-top: 50px;
  padding: 20px 50px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.75);
  text-align: justify;
`

export const SeasonIconTray = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SeasonIconContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.25);
  width: 100px;
  height: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
`
export const SeasonIconText = styled.p`
  margin: 0;
  color: #ff1053;
  font-size: 20px;
  font-weight: bold;
`

export const SeasonIconLabel = styled.p`
  margin: 0;
  font-size: 11px;
`

export const PluginItem = styled.li`
  /* background-color: #000; */
  width: 100%;
  & a {
    text-decoration: none;
    color: #ff1053;
    width: 100%;
    font-weight: 700;
  }
`

export const DownloadSection = styled.div`
  background-color: #fefeff;
  background-image: url('https://cdn.discordapp.com/attachments/705560562318180412/709746145777156116/2020-05-12_13.15.16.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  padding: 25px 0;
`

export const DownloadContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 83vw;
  margin: auto;
`

export const DownloadCard = styled.div`
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.5);
  text-align: center;
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  -webkit-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
  box-shadow: 0px 3px 18px -2px rgba(255, 255, 255, 0.3);
  /* max-width: 300px; */
  margin: 25px;
  flex-basis: 50px;
  flex-grow: 1;
`

export const DownloadCardImage = styled.img`
  object-fit: cover;
  max-height: 200px;
  width: auto;
  border-bottom: 1px solid rgba(95, 95, 95, 0.9);
`

export const DownloadCardTitle = styled.h3`
  color: #ff1053;
  color: #fff;
  text-transform: uppercase;
  background-color: #222;

  margin: 0;
  padding: 20px 0;
`

export const DownloadMainContent = styled.div`
  padding: 25px 35px;
  text-align: justify;
  line-height: 25px;
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const DownloadCardDescription = styled.div`
  flex: 1;

  & p {
    padding: 0;
    margin: 0;
  }
`

export const DownloadCardButton = styled.a`
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 10px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  color: #000;
  margin-top: 20px;

  & :hover {
    background-color: #222;
    color: #fff;
  }
`

export const TagContainer = styled.div`
  position: absolute;
  right: 0;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 5px;
  margin: 5px;
  text-align: justify;
`

export const Tag = styled.div`
  border: 1px solid #000;
  padding: 5px 10px 3px 10px;
  color: #ff1053;
  text-transform: uppercase;
  font-size: 10.5px;
  font-weight: bolder;
  background-color: rgba(255, 255, 255, 0.9);

  & svg {
    color: #222;
    font-weight: lighter;
    margin-right: 5px;
    font-size: 9px;
  }
`

export const VersionTag = styled.div`
  border: 1px solid #000;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: absolute;
  margin: 5px;
  padding: 5px 10px 3px 10px;
  font-size: 11px;
  font-weight: bolder;

  & svg {
    font-size: 10px;
  }
`

export const DownloadControlBar = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #fff;
  margin: 50px 0;
  color: #fff;
`
