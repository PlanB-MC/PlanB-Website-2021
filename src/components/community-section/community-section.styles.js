import styled from "styled-components"

export const CommunitySectionContainer = styled.div`
    background-image:linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 250, 0.3)), url("https://github.com/PlanB-MC/pbWebsite/blob/master/src/Images/bg.png?raw=true");
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover; 
    background-attachment: fixed;
    text-align: center;
    padding: 55px 50px;
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
    border-bottom: 2px solid #770a0a;
    width: fit-content;
    margin: auto;
    
;
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
    
    
`

export const MemberCard = styled.div`
    padding: 20px;
    background-color: #ffff;
    justify-self: stretch;
    border-top: 5px solid #770a0a;
    margin-bottom: 90px;
    border-radius: 10px 10px 5px 5px;
    -webkit-box-shadow: 0px 9px 18px -2px rgba(0,0,0,0.55);
    -moz-box-shadow: 0px 9px 18px -2px rgba(0,0,0,0.55);
    box-shadow: 0px 9px 18px -2px rgba(0,0,0,0.55);
`

export const MemberAvatar = styled.img`
    border-radius: 50%;
    padding: 5px;
    background-color: #fff;
    margin-top: -100px;
    border: 4px solid #770a0a;
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
        fill: #770a0a;
    }
`

export const LoadingLabel = styled.h4`
    color: #fff;
    font-size: 30px;
`