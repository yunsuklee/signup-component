import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    font-family: 'Poppins', sans-serif;
    background-color: ${({ theme }) => theme.colors.red};
    background-image: url("src/assets/bg-intro-mobile.png");
  }

  @media (min-width: 1440px) {
    overflow: hidden;
    background-image: url("src/assets/bg-intro-desktop.png");
    display: grid;
  }
`
export default GlobalStyles