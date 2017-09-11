require('dotenv').config();
const path = require('path');
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const sendgrid = require('@sendgrid/mail');

const app = express();
const port = process.env.PORT || 4000;

app
  .use(compression({threshold: 0, filter: () => true}))
  .use(express.static(path.join(__dirname, '/dist')))
  .use(bodyParser.urlencoded({extended: false}))
  .post('/', handleEmail)
  .listen(port, () => console.log(`Running on http://localhost:${port}`));

function handleEmail(req, res) {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: {email: 'hello@murderlon.me'},
    from: req.body.email,
    subject: req.body.subject,
    text: req.body.message
  };
  sendgrid.send(msg);
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}
