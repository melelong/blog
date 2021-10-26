/* eslint-disable node/no-deprecated-api */
const http = require('http')
const url = require('url')
// const util = require('util')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.statusCode = 200

  res.setHeader('Content-Type', 'text/plain; charset=utf-8')

  var pathname = url.parse(req.url).pathname
  console.log(`file:${pathname.substring(1)}`)
  fs.readFile(pathname.substring(1), function (err, data) {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
    } else {
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data.toString())
    }
    res.end()
  })
})

server.listen(3000, '127.0.0.1', () => {
  console.log('運行成功，請訪問http://127.0.0.1:3000/')
})
