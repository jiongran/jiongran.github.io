var setFirstSlider = (list) => {
  var localObj = {}
  for (var i = 0; i < list.length; i++) {
    var _link = list[i].link
    var _text = list[i].text
    localObj[_link] = [['', _text]]
  }
  return localObj
}
const list = [
  {
    link: '/projectVuePress/',
    text: '前台项目配置'
  },
  {
    link: '/businessSchoolFrontendMobile/',
    text: '商学院'
  },
  {
    link: '/dappFrontendMobile/',
    text: 'Dapp'
  },
  {
    link: '/helpCenterBackend/',
    text: '帮助中心后台'
  },
  {
    link: '/helpCenterFrontend/',
    text: '帮助中心前台'
  },
  {
    link: '/monitorPlatformFrontend/',
    text: '监控运营中心'
  },
  {
    link: '/permissionResourceManagementFrontend/',
    text: '权限资源管理系统'
  },
  {
    link: '/tradeDecentralizationBackend/',
    text: '去中心化交易中心后台'
  },
  {
    link: '/tradeDecentralizationFrontend/',
    text: '去中心化交易中心前台'
  },
  {
    link: '/newhttp/',
    text: '新版本代码交易中心'
  },
  {
    link: '/tradeDecentralizationFrontendMobile/',
    text: '去中心化交易中心前台H5'
  },
  {
    link: '/tradeDecentralizationFrontendMobileV2/',
    text: '去中心化交易中心前台H5V2'
  }
]
const sliderList = {
  ...setFirstSlider(list),
  '/javascriptBridge/': [
    ['', 'javascriptBridge']
  ],
  '/webSocket/': [
    ['', 'THEX--WebSocket'],
    ['/webSocket/orderWebSocket', 'Order'],
    ['/webSocket/kLineWebSocket', 'KLine']
  ],
}
module.exports = {
  base: '/',
  dest: './dist',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '前端项目配置',
      description: ''
    }
  },
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#3eaf7c'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}]
  ],
  plugins: [
    ['@vuepress/medium-zoom', true]
  ],
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        label: '中文',
        nav: [
          {text: '前端项目配置及预览', items: list}
        ],
        sidebar: sliderList
      }
    },
  },
  plugins: [
    ['@vuepress/medium-zoom', true]
  ]
}

