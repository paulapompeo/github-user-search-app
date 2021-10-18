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
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  //desktop > 1440
  // tablet -> 768
  // smart -> 375
  // font-size: 16px -> ideal para desktop
  // REM = 1rem = font-size (16px)
  html {
    @media (max-width: 1080px) { // TODO: mudar conforme as telas
      font-size: 93.75%; // 16 * 93.75 = 15px
    }
    @media (max-width: 720px) { // TODO: mudar conforme as telas
      font-size: 87.5%; // 16 * 87.5 = 14px
    }
  }
  body {
    background: ${({ theme }) => theme.background};
    -webkit-font-smoothing: antialiased;
  }
  body, textarea, h1 {
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    /* color: var(--white) */
  }
  button {
    font-family: 'Space Mono', monospace;
    cursor: pointer;
  }
`