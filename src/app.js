const express = require('express');
const app = express();

app.use(express.json());

app.use(require('./controllers/auth.controller'))


module.exports = app;