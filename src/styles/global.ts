import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #FFFFFF;
  }

  button {
    cursor: pointer;
    background: none;
    border: 0;
  }

  body, input, button, textarea, select  {
    font: 400 16px 'Nunito', sans-serif;
  }
`
