/* eslint-disable camelcase */
const http = require('http')

http.get('http://www.imooc.com/u/card', function (res) {
  let data = ''
  res.on('data', function (chunk) {
    data += chunk
    console.log(`123:${data}123`)
  })

  res.on('end', function () {
    const data_json = JSON.stringify(data)
    console.log(data_json)
    const result = JSON.parse(data_json)
    console.log(`result:${result}`)
  })
})
