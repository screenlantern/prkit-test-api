'use strict';
const test = require('ava');
const supertest = require('supertest-as-promised');
const agent = require('supertest-koa-agent');
const app = require('../app');


let request;

test.before(() => {
    request = supertest(app.listen());
});

test('GET api/users | should return status code 200', async t => {

    let res = await request.get('api/users')
        .expect('Content-Type', /json/)
        .expect(200);

    console.log(res.status);

    t.is(res.status, 200);

});