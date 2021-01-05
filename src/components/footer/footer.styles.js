import styled from "styled-components"

export const FooterContainer = styled.div`
    /* height: 200px; */
    border-top: 5px solid #770a0a;
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
    margin: 0 auto;
    width: 70%;    
    display: flex;
    justify-content: space-evenly;
    padding-top: 30px;
    
    & svg {
        fill: #fff;
        height: 35px;
        width:auto;
        padding: 7px;
        border: 1px solid #fff;
        border-radius: 10px;
    }

    & svg:hover {
        border: 1px solid #770a0a;
        fill: #770a0a;
        background-color:rgba(255, 255, 255,0.99);
    }
`

export const ColumnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 60px;
    padding-bottom: 30px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const ColumnTitle = styled.h5`
    border-left: 5px solid #770a0a;
    text-transform: uppercase;
    color: #fff;
    padding-left: 10px;
    margin-bottom: 5px;
`

export const ColumnLink = styled.a`
    color: #fff;
    padding-left: 15px;
    line-height: 26px;
    & a {
        color: #fff;    
        text-decoration: none;
        margin-left: 3px
    }
`