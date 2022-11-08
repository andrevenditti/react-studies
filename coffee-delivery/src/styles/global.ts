import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple}
  }

  body{
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', cursive;
  }
`
