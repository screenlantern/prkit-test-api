'use strict'
const router = require('koa-router')();
const User = require( '../models/user');
const shortid = require('shortid');

router
    .get('/', async ctx => {
        ctx.body = await User.findAll();
    })
    .post('/', async (ctx, next) => {
        let rec = Object.assign({}, ctx.request.body, {_id: shortid.generate(), dateCreated: Date.now()})
        ctx.body = await User.create(rec);
    })
    .put('/:id', async (ctx, next) => {
        ctx.body = await User.update(ctx.params.id, ctx.request.body);
    })
    .delete('/:id', async (ctx, next) => {
        ctx.body = await User.delete(ctx.params.id);
    })

module.exports = router;