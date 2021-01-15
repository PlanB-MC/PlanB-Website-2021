import styled from "styled-components"

export const JoinContainer = styled.div`

    
    margin: auto;
    padding: 0 10vw;
    text-align: center;
    

& form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
}

    & input {
        height: 26px;
        padding: 3px 15px;
    }
`

export const HeaderImage = styled.div` 
height: 60vh;
    background-image: url("https://media.discordapp.net/attachments/457550251897913355/772178877933420584/2020-10-31_12.21.59.png");
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover; 
`