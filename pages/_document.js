import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { extractCritical } from 'emotion-server';
import { injectGlobal } from 'react-emotion';

injectGlobal`
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
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  constructor(props) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Murderlon | Merlijn Vos</title>

          <meta
            name="description"
            content="Favorable in development, inadequate in rapper aliases"
          />
          <meta
            name="keywords"
            content="Murderlon, Merlijn, Vos, Front-end, Design"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="robots" content="index, follow" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Murderlon | Merlijn Vos" />
          <meta
            property="og:description"
            content="Favorable in development, inadequate in rapper aliases"
          />
          <meta
            property="og:image"
            content="https://murderlon.me/images/preview.png"
          />
          <meta property="og:site_name" content="Murderlon | Merlijn Vos" />
          <meta property="og:url" content="https://murderlon.me" />

          <link
            rel="shortcut icon"
            type="image/png"
            href="static/images/favicon32.ico"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/images/favicon32.ico"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/images/favicon32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="static/images/favicon16.png"
            sizes="16x16"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Changa:500|Fira+Sans:300i,400,400i"
            rel="stylesheet"
          />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
