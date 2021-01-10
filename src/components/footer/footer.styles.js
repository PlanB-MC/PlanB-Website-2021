import styled from "styled-components"

export const FooterContainer = styled.div`
    /* height: 200px; */
    border-top: 5px solid #FF1053;
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
        fill: #FF1053;
    }
`

export const ColumnContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 30px;
    padding-bottom: 30px;
    width: 80%;
    margin: auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const ColumnTitle = styled.h5`
    border-left: 5px solid #FF1053;
    text-transform: uppercase;
    color: #fff;
    padding-left: 10px;
    margin-bottom: 5px;
`

export const ColumnLink = styled.div`
    color: #fff;
    padding-left: 15px;
    line-height: 26px;
    
    & a {
        color: #fff;    
        text-decoration: none;
        margin-left: 3px
    }
`