import React from 'react';
import { func } from 'prop-types';
import { css } from 'react-emotion';

const StyledCanvas = css`
  width: 100%;
  margin: 1em 0;
  min-height: 15em;
  max-height: 25em;
  h1 {
    color: white;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
  }
`;

const Canvas = ({ children }) => {
  return (
    <canvas role="note" aria-label="alt text" className={StyledCanvas}>
      {children}
    </canvas>
  );
};

Canvas.propTypes = {
  children: func.isRequired
};

export default Canvas;
