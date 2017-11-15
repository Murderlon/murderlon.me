import { css } from 'react-emotion';

const globals = css`
  * {
    box-sizing: border-box;
  }
  html {
    width: 100%;
    font-size: calc(100% + 0.25vw);
    font-family: 'Fira Sans', 'Roboto', 'Helvetica', sans-serif;
    font-display: swap;
  }
  body {
    margin: 0;
  }
`;

export default globals;
