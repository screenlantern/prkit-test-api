'use strict'
require('dotenv').config()
const Koa  = require('koa');
const Router = require( 'koa-router');
const render = require('koa-static');
const users = require( './routes/users');
const middleware = require( './middleware').middleware;
const app = new Koa();

require('koa-validate')(app);
app.use(middleware());

const router = new Router({
    prefix: '/api'
})
.use('/users', users.routes());

app.use(router.routes()).use(router.allowedMethods());

app.use(render('ui'));

module.exports = app;