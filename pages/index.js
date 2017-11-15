import React from 'react';
import { hydrate } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';

import variables from '../styles/themes/variables';

import Header from '../components/Header';
import Canvas from '../components/Canvas';
import Main from '../components/Main';
import Section from '../components/Section';

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
    </ThemeProvider>,
    <Main key="Main">
      <Section title="What I Do">
        <p>
          I'm a digital tailor in the age where you can just pickup a website
          from the rack. Places like <a href="https://www.wix.com/">Wix </a>,
          <a href="https://wordpress.com/"> Wordpress </a>, or
          <a href="https://www.shopify.com/"> Shopify</a> offer a vast variety
          of out-of-the-box ones. But are they so different?
        </p>
      </Section>
    </Main>
  ];
};
