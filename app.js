const express = require('express');
const path = require('path');
const upload = require('express-fileupload')
const routes = require('./routes/index');
const bodyParser = require('body-parser');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(upload());
app.use('/', routes);

module.exports = app;