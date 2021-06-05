import styled from 'styled-components'

export const ApplicationContentContainer = styled.div`
  margin: 50px;
  text-align: center;
`

export const ApplicationTitle = styled.h2`
  text-align: center;
  font-size: 52px;
  color: #fff;
`

export const ApplicantAvatar = styled.img`
  border-radius: 10%;
  background-color: rgba(255, 255, 255, 0.49);
  padding: 10px;
  border: 3px solid #ff1053;

  margin-bottom: 25px;
`

export const ApplicationForm = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  & input {
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 15px 20px;
    color: #fff;
    font-size: 15px;
  }

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const TextAreasContainers = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;

  & textarea {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #000;
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 15px 20px;

    color: #fff;
    font-size: 15px;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const DisabledInput = styled.input`
  cursor: not-allowed;
`

export const ApplicationSubmitBtn = styled.button`
  background-color: #000;
  color: #fff;
  padding: 20px 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin-top: 25px;

  &:hover {
    border-color: rgba(255, 255, 255, 0.9);
    cursor: pointer;
  }
`
