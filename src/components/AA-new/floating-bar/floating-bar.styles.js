import styled from 'styled-components'

export const FloatingBarContainer = styled.div`
  text-align: center;
  padding: 50px;
  border: 2px solid rgba(0, 0, 0, 0.85);
  background-color: #1c1c1c;
  background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23f9f8f9' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E");
  -webkit-box-shadow: 0px 9px 18px -2px rgba(0, 0, 0, 0.85);
  -moz-box-shadow: 0px 9px 18px -2px rgba(0, 0, 0, 0.85);
  box-shadow: 0px 9px 18px -2px rgba(0, 0, 0, 0.85);
  position: relative;
  z-index: 10;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
  color: #fff;

  @media only screen and (max-width: 450px) {
    padding: 50px 0;
    margin: auto;
  }
`
export const FloatingBarTitle = styled.h1`
  font-size: 70px;
  text-transform: uppercase;
  margin: 0;
  line-height: normal;
  margin-bottom: 15px;

  @media only screen and (max-width: 750px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 450px) {
    font-size: 50px;
  }
`
