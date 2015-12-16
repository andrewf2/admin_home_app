'use strict';

var connect = require('connect');
var serveStatic = require('serve-static');
console.log('server started')

connect().use(serveStatic(__dirname)).listen(8080);