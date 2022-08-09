import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

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
    --second-text-color: #7f59b5;
    --placeholder-text-color: #666666;
    --active-text-color: #ebb848;

    --main-font: 'Source Sans Pro', sans-serif;
    --header-font: 'Arima', cursive;
    --logo-font: 'Inspiration', cursive;
  }

  body {
    height: 100vh;
    background-color: var(--main-bg-color);
    margin: 0 auto;
    padding: 10px;  
    font-family: var(--main-font);
    font-size: 18px;
    font-weight: 400;
    color: white;
    
  }
  
  #root {
    height: 100%;
  }
`;
