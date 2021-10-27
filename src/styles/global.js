import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {   
    --background:       ${({ theme }) => theme.background};
    --title:            ${({ theme }) => theme.title}; 
    --theme:            ${({ theme }) => theme.theme};
    --placeholder:      ${({ theme }) => theme.placeholder};
    --input:            ${({ theme }) => theme.input};
    --name:             ${({ theme }) => theme.name};
    --joined:           ${({ theme }) => theme.joined};
    --bio:              ${({ theme }) => theme.bio};
    --valueLabel:       ${({ theme }) => theme.valueLabel};
    --value:            ${({ theme }) => theme.value};
    --card:             ${({ theme }) => theme.card};
    --buttonBackground: ${({ theme }) => theme.buttonBackground};
    --buttonColor:      ${({ theme }) => theme.buttonColor};
    --user:             ${({ theme }) => theme.user};
    --boxShadow:        ${({ theme }) => theme.boxShadow};
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased;
  }
  body, textarea, h1 {
    font-family: 'Space Mono', monospace;
    font-weight: 400;
  }
  button {
    font-family: 'Space Mono', monospace;
    cursor: pointer;
  }
`