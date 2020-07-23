var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoDBConnect = require('./util/mongoUtil.js');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var routes = require('./routes/routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

console.log('Setting up application routes');
var routerV1 = express.Router();
routes.setRoutes(routerV1);
app.use(routerV1);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//MongoDB connect
mongoDBConnect({}, function (err) {
    if (err) {
        console.log("Unable to connect to mongo db >>" + err);
        throw new Error(err);
    } else {
        console.log('connected to mongodb');
    }
});

app.use(express.static(path.join('../../UIApp/UIApp', 'public')))

app.use('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname,'../../UIApp/UIApp/public', "index.html"));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
