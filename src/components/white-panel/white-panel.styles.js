import styled from 'styled-components'

export const WhitePanelContainer = styled.nav`
  padding: 20px 50px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.75);
  text-align: justify;

  & blockquote {
    border-left: 2px solid #ff1053;

    padding-left: 20px;
    margin-left: 10px;
  }

  & ul {
    list-style-type: none;
    padding-left: 10px;
  }

  & ul li::before {
    content: '✅';
    padding: 0 10px 0 0;
  }
`

export const WhitePanelTitle = styled.h2``

export const WhitePanelContents = styled.div``
