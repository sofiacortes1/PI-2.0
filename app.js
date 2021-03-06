var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var datosRouter = require('./routes/datos');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');

app.use(session({
  secret: "proyecto",
  resave: false,
  saveUninitialized: true
}));


app.use(function (req, res, next) {
  console.log("En app.js");

  if (req.cookies.userId && !req.session.resultado) {
    console.log("entro?");

    db.Usuario.findByPk(req.cookies.userId).then(resultado => {
      req.session.resultado = {}
      req.session.resultado.email = resultado.email;
      req.session.resultado.first_name = resultado.first_name
      req.session.resultado.id = resultado.id

      console.log('probando');

      return next();
    }).catch(error => console.log(error));
  } else {
    return next();
  }
});

app.use(function (req, res, next) {
  console.log(req.session.resultado);
  if (req.session.resultado) {
    res.locals = {
      usuarioLogueado: true,
      miUsuario: req.session.resultado,
      

    }
  } else {
    res.locals = {
      usuarioLogueado: false
    }
  }
  console.log(res.locals);
  return next();
});




const db = require('./database/models');




app.use('/', indexRouter);
app.use('/datos', datosRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;