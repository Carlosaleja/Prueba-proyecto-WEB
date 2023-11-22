const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const database = require("./config/database.config")

const apiRouter = require("./routes/index.router")

const app = express();
database.connect();

//loger para la request
app.use(logger('dev'));

//body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//establecimiento de las rutas estaticas
app.use(express.static(path.join(__dirname, 'public')));

//api Rauter
app.use("/api", apiRouter);
module.exports = app;
