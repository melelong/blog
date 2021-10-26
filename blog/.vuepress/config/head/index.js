var head = [
  [
    "link",
    {
      "rel": "icon",
      "href": "/img/10.ico"
    }
  ],
  [
    "meta",
    {
      "name": "viewport",
      "content": "width=device-width,initial-scale=1,user-scalable=no"
    }
  ],
  ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css" }],
  ["script", { src: "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" }],
  // 引入jquery
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
  }],
  // 引入鼠标点击脚本
  ["script", {
    "language": "javascript",
    "type": "text/javascript",
    "src": "/js/MouseClickEffect.js"
  }]
]
module.exports = head