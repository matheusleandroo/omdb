import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme.black};
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`
