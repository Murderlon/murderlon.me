import { css } from 'react-emotion';

const typography = css`
  h2 {
    font-size: 1.5em;
    font-family: 'Changa', 'Roboto', 'Helvetica', sans-serif;
    font-display: swap;
    font-weight: 500;
    margin: 0;
  }
  h1 {
    font-size: 2.25em;
    font-family: 'Changa', 'Roboto', 'Helvetica', sans-serif;
    font-display: swap;
    font-weight: 500;
    line-height: 1;
    margin: 0;
  }
  p {
    line-height: 1.3;
  }
  a {
    color: inherit;
    text-decoration: none;
    transition: background 0.15s cubic-bezier(0.33, 0.66, 0.66, 1);
    border-bottom: 3px solid #b4e7f8;
    box-shadow: inset 0 -4px 0 #b4e7f8;
    overflow-wrap: break-word;
    word-break: break-word;
    word-wrap: break-word;
  }
  a:hover,
  a:focus {
    background-color: #b4e7f8;
  }
`;

export default typography;
