const head = require('./config/head/index') // 标签头部
const nav = require('./config/nav/index') // 导航栏
const sidebar = require('./config/sidebar/index') // 侧边栏
const blogConfig = require('./config/blogConfig/index') // 博客配置
const friendLink = require('./config/friendLink/index') // 友链
const plugins = require('./config/plugins/index') // 插件
const valineConfig = require('./config/valine/index') // 评论
// const webpack = require('./config/webpack/index') // webpack配置
module.exports = {
  "title": "Mele",
  "description": "每个牛逼的人，都有一段苦逼的坚持！",
  "dest": "blogdist",
  "base": '/blog/',
  head,
  "theme": "reco",
  "themeConfig": {
    displayAllHeaders: true,
    activeHeaderLinks: true,
    nextLinks: true,
    prevLinks: true,
    nav,
    valineConfig,
    sidebar,
    subSidebar: 'auto',
    "type": "blog",
    blogConfig,
    friendLink,
    "logo": "/img/10.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Mele",
    "authorAvatar": "/img/avatar.jpg",
    "record": "粤ICP备2021058009号",
    "recordLink": "https://beian.miit.gov.cn/",
    "startYear": "2021"
  },
  markdown: {
    lineNumbers: true, //代码显示行号
  },
  // 简体中文
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  plugins,
  "markdown": {
    "lineNumbers": true
  }
}