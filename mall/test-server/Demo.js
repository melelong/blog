/* eslint-disable node/no-deprecated-api */
// const user = require('./User.js')

// console.log(`userName: ${user.userName}`)

// console.log(`123:${user.sayHi()}`)

const http = require('http')
const url = require('url')
const util = require('util')

const server = http.createServer((req, res) => {
  res.statusCode = 200

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  console.log(`url: ${req.url}`)

  console.log(`parse: ${url.parse(req.url)}`)

  console.log(`inspect: ${util.inspect(url.parse(req.url))}`)

  res.end(util.inspect(url.parse(req.url)))
})

server.listen(3000, '127.0.0.1', () => {
  console.log('運行成功，請訪問http://127.0.0.1:3000/')
})
