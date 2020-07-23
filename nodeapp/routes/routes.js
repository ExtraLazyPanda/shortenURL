var express = require('express');
var path = require("path");
var data = require('./routes_data');

module.exports.setRoutes = function(app) {
  data.setRoutes(app)
}
