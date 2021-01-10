import styled from "styled-components"

export const ServerPageContainer = styled.div`  
    background-color: #fefeff;
    background-image: url("https://cdn.discordapp.com/attachments/705560562318180412/709746145777156116/2020-05-12_13.15.16.png");
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
`

export const ServerTitleContainer = styled.div`
    border-top: 2px solid #fff;
    border-bottom: 2px solid #fff;
    height: 200px;
    background-color: rgba(0,0,0,.8);
    color: #fff;
    text-align: center;
    margin-top: -13px;
    position: relative;
    z-index: 999;
    background-color: #1c1c1c;
    background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23f9f8f9' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E");
    padding: 20px;
`

export const ServerTitleName = styled.h1`
    font-size: 70px;
    text-transform: uppercase;
    margin: 0;
    line-height: normal;
    margin-bottom: 15px;
`

export const ServerTitleLinks = styled.div`
    display: flex;
    justify-content: center;
    
    
`

export const LinkBtn = styled.a`
    border: 1px solid rgba(255, 255, 255, 0.3);
    min-width: 50px;
    padding: 10px 20px;
    margin: 0 20px;
    color: #fff;
    text-decoration: none;
    background-color: #1c1c1c;

    & :hover {
        -webkit-box-shadow: 0px 3px 18px -2px rgba(255,255,255,0.3);
        -moz-box-shadow: 0px 3px 18px -2px rgba(255,255,255,0.3);
        box-shadow: 0px 3px 18px -2px rgba(255,255,255,0.3);
    }
`

export const LinkIcon = styled.div`
    color: #FF1053;
`

export const LinkText = styled.div`


`
export const ServerDesc = styled.div`
    background-color: rgba(0,0,0,0.8);
    border: 1px solid rgba(255,255,255,0.75);
    color: #fff;
    padding: 20px 40px;
`

export const ServerPageContent = styled.div`
    width: 80vw;
    margin:  auto;
    padding: 50px 0;
    text-align: center;
`

export const ServerInfoSection = styled.div`
margin-top: 50px;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 35px;
     
    

`

export const ServerDataPanel = styled.div`
    padding: 20px 50px;
    background-color: rgba(255,255,255,0.8);
    border: 1px solid rgba(0,0,0,0.75);
    text-align: justify;
`

export const SeasonIconTray = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SeasonIconContainer = styled.div`
    border: 1px solid rgba(0,0,0,0.25);
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
    color: #FF1053;
    font-size: 20px;
    font-weight: bold;
`

export const SeasonIconLabel = styled.p`
    margin: 0;
    font-size: 11px;
`

export const PluginItem = styled.li`
width: fit-content;
    & a {
        text-decoration: none;
        color: #373f49;
    }
`