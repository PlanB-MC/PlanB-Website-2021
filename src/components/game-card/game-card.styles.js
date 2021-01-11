import styled from "styled-components"

export const GameCardContainer = styled.div`
    & img {
        margin: 0;
    }
    height: 164px;
    margin:auto;
`

export const GameCardTitle = styled.h3`
    font-family: Exo;
    font-weight: bold;
    text-transform: uppercase;
    color: #FF1053;
    font-size: larger;  
`

export const GameCardIcon = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding: 5px;
    background-color: #fff;
    border: 2px solid #FF1053;
    -webkit-box-shadow: 5px 9px 20px -2px rgba(0,0,0,0.39);
    -moz-box-shadow: 5px 9px 20px -2px rgba(0,0,0,0.39);
    box-shadow: 8px 9px 20px -2px rgba(0,0,0,0.38);
    margin-bottom: 15px;
`