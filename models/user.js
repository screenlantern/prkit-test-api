'use strict'
const low = require('lowdb');
const fileAsync = require('lowdb/lib/storages/file-async');

const db = low('db.json', {
    storage: fileAsync
});

function User() {}

User.prototype.findAll = function () {
    return new Promise(function (res, rej) {
        let col = db.get('users');
        if(col){
            res(col);
        }
    });
}

User.prototype.create = function (obj) {
    return new Promise(function (res, rej) {
        db.get('users').push(obj).last().write().then((rec) => {
            res(rec);
        })
    });
}

User.prototype.update = function (id, obj) {
    return new Promise(function (res, rej) {
        db.get('users').find({_id: id}).assign(obj).write().then((rec) => {
            res(rec);
        }); 
    });
}

User.prototype.delete = function (id) {
    return new Promise(function (res, rej) {
        db.get('users').remove({_id: id}).write().then((rec) => {
            res(rec);
        });
    });
}

module.exports = new User();