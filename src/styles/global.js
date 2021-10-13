import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root { 
    // dark mode
    --blue: #0079FF;
    --white: #ffffff;
    --dark: #141D2F;
    --dark-blue: #1E2A47;

    --light-grey: #F6F8FF;
    --dirty-white: #FEFEFE;
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
    background: var(--dark);
    -webkit-font-smoothing: antialiased;
  }
  body, textarea, h1 {
    font-family: 'Space Mono', monospace;
    font-weight: 400;
    color: var(--white)
  }
  button {
    font-family: 'Space Mono', monospace;
    cursor: pointer;
  }
  /* [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  } */
`