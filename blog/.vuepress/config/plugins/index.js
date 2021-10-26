var plugins = [
  // 流程图插件
  ["flowchart"],
  // 标签加强
  ["vuepress-plugin-boxx"],
  // 动态标题
  [
    "dynamic-title",
    {
      showIcon: "vuepress/smile.ico",
      showText: "(/≧▽≦/)欢迎帅哥美女！",
      hideIcon: "vuepress/cry.ico",
      hideText: "(●—●)呜呜，不要走嘛！！",
      recoverTime: 2000,
    },
  ],
  // 更新刷新插件
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新",
      },
    },
  ],
  // 代码复制弹窗插件
  [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码",
      tip: {
        content: "复制成功!",
      },
    },
  ],
  // 只要把这个放进 config的plugins中就可以了 有木有很简单
  [
    "sakura",
    {
      num: 20, // 默认数量
      show: true, //  是否显示
      zIndex: 0, // 层级
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: "...", // 绝对路径
      },
    },
  ],
  // 音乐插件
  [
    'meting',
    {
      meting: {
        // 网易
        metingApi: "https://meting.sigure.xyz/api/music",
        server: "netease",
        // 读取歌单
        type: "playlist",
        mid: "3061337894"
        // auto: 'https://music.163.com/#/playlist?id=3061337894'
      },
      aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded:true,
          // 颜色
          theme: '#f9bcdd',
          // 播放顺序为随机
          // order: 'random',
          // 初始音量
          volume: 0.3,
          // 关闭歌词显示
          lrcType: 0
       },
    },
 ]
]
module.exports = plugins;
