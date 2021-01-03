import styled from "styled-components"

export const AboveFoldContainer = styled.div`
  
 
`

export const BackgroundImg = styled.div`
    height: 100vh;
    background-image: url("https://github.com/PlanB-MC/pbWebsite/blob/master/src/Images/bg.png?raw=true");
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover; 


    &:after {
        background: rgba(0,0,0,.3);
        content: "";
        display: block;
        height: 100%;
        left: 0;
        top: 0;
        position: absolute;
        width: 100%;
        z-index: 1;
  }
`

export const SiteNameContainerBox = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

export const SiteNameBox = styled.div`
    border: 3px solid #fff;
    border-radius: 5px;
    padding: 15px 50px;
    z-index: 100000000;
    margin: 1px;

    & h1 {
        font-size: 7.6vw;
        font-family: 'Orbitron' ,sans-serif;
        color: #fff;
        margin: -20px 0;
    }

    & h2 {
        font-family: 'Armata',sans-serif;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        text-align: center;
        letter-spacing: 15px;
    }
`
