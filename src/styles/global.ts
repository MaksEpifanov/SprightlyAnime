import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0e0e0e;
    color: white;
    height: 100vh;
  }

  #root {
    margin: 0 auto;
    padding: 10px;
  }
`;
