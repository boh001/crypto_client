import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    color: #ffff;
    background-color:#ECECEC;
  }

  a {
    text-decoration: none;
    &: visited {
      color: inherit
    }
  }
`

export default GlobalStyles