'use strict'
const compose = require('koa-compose');
const logger =  require('koa-logger');
const cors = require('kcors'); 
const bodyParser = require('koa-bodyparser');


 function middleware() {
  return compose([
    logger(),
    cors(),
    bodyParser()
  ]);
}

module.exports = { middleware: middleware };