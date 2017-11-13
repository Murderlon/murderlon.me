import React from 'react';
import { hydrate } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import variables from '../themes/variables';
import Header from '../components/Header';
import Canvas from '../components/Canvas';

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids);
}

export default () => {
  return [
    <ThemeProvider theme={variables} key="ThemeProvider">
      <Header>
        <img src="/static/images/me.gif" alt="Sequence of mugshots of me" />
        <div>
          <Canvas>
            <h1> Murderlon is my rapper alias but I don't actually rap</h1>
          </Canvas>
        </div>
      </Header>
    </ThemeProvider>
  ];
};
