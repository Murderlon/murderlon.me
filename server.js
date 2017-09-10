const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();
const port = process.env.PORT || 4000;

app
  .use(compression({threshold: 0, filter: () => true}))
  .use(express.static(path.join(__dirname, '/dist')))
  .listen(port, () => console.log(`Running on http://localhost:${port}`));
