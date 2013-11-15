var express = require('express');
var expressResource = require('express-resource');
var groups = require('./lib/group');
var users = require('./lib/user');

var app = express();
app.resource('groups', groups);

app.resource('users', users, { id: 'user_id', load: (function(id, next) { next(null, { name: 'bouzuya' }); }) })
  .map('get', 'feed', users.feed)
  .map('post', 'star', users.addStar)
  .map('get', 'messages', users.messages);

module.exports = app;
