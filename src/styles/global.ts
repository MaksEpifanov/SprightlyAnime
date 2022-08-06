import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --main-bg-color: #0e0e0e;
    --second-bg-color: #1c1c1c;
    --main-text-color: #aaaaaa;
    --second-text-color: #5a2e98;
    --active-text-color: #8f7003;
  }

  #root {
    margin: 0 auto;
    padding: 10px;   
  }

  body {
    height: 100vh;

    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    font-size: 18px;

    background-color: var(--main-bg-color);
    color: white;
  }
`;
