const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
// const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const goodsRouter = require('./routes/goods')
// const session = require('express-session')
const mongoose = require('mongoose')
const cors = require('cors')

// mongodb連接
mongoose.connect('mongodb://127.0.0.1:27017/db_demo', { useNewUrlParser: true }, { useUnifiedTopology: true })

mongoose.connection.on('connected', function () {
  console.log('MongoDB connected success.')
})

mongoose.connection.on('error', function () {
  console.log('MongoDB connected fail.')
})

mongoose.connection.on('disconnected', function () {
  console.log('MongoDB connected disconnected.')
})
const app = express()
var corsOptions = {
  origin: [
    'http://192.168.0.100:8080',
    'http://192.168.0.101:8080',
    'http://192.168.0.102:8080',
    'http://192.168.0.103:8080',
    'http://192.168.0.100:8081',
    'http://192.168.0.101:8081',
    'http://192.168.0.102:8081',
    'http://192.168.0.103:8081'
  ], // 允许跨域
  credentials: true,
  maxAge: '360000'
  // 这一项是为了跨域专门设置的
}
app.use(cors(corsOptions))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// view engine setup
// 中间件
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use(cookieParser())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'views')))

// 登录拦截
app.use(function (req, res, next) {
  if (req.cookies.userId) {
    next()
  } else {
    if (req.originalUrl === '/users/login' || req.originalUrl === '/users/registered' || req.originalUrl === '/users/logout' || req.originalUrl.indexOf('/goods/list') > -1) {
      next()
    } else {
      res.json({
        status: '10001',
        msg: '当前未登录',
        result: ''
      })
    }
  }
})

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/goods', goodsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
