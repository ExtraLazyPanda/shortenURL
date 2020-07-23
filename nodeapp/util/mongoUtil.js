
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

var defaults = {
    host: 'localhost',
    port: '53498',
    dbName: 'test'
};

module.exports = function (options, callback) {
    var connectionString = 'mongodb://127.0.0.1:27017/test';
    console.log('Connection String', connectionString);
    var mongooseOptions = {
      useNewUrlParser: true
    };
    var connectWithRetry = function () {
        return mongoose.connect(connectionString, mongooseOptions, function (err) {
            if (err) {
                console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
                setTimeout(connectWithRetry, 5000);
            }
        });
    };
    connectWithRetry();
    mongoose.Promise = require('bluebird');
    mongoose.connection.on('connected', function () {
        callback(null);
    });
};
