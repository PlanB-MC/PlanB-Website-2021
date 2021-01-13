import styled from "styled-components"

export const MemberCardContainer = styled.div`
    
    background-color: rgba(255,255,255,.85);
    justify-self: stretch;
    /* margin-bottom: 90px; */
    /* border-radius: 5px; */
    -webkit-box-shadow: 0px 9px 18px -2px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 9px 18px -2px rgba(0,0,0,0.55);
    box-shadow: 0px 9px 18px -2px rgba(0,0,0,0.55);
    display: flex;
    flex-direction: column;
`

export const MemberCardName = styled.h2`
    border-top: 2px solid #FF1053;

    background-color: #222;
    /* border-radius: 5px 5px 0 0 ; */
    margin: 0;
    color: #fff;
    padding: 5px 0;
`

export const SocialMediaTray = styled.div`
    background-color: #222;
    padding: 10px 0 20px 0;
    display: flex;
    justify-content: space-evenly;
    & svg {
        fill: #fff;
        font-size: 18px;

        & :hover{
            fill: #FF1053;
;
        }
    }
    & a {
        height: 16px
    }
`

export const MemberAvatar = styled.img`
    margin: auto;
    padding: 20px 0;
    width: 120px;
`