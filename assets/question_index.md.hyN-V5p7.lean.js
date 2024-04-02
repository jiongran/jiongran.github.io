import{_ as a,c as n,o as e,a4 as s,m as l,a as i}from"./chunks/framework.Xe-pYyW9.js";const b=JSON.parse('{"title":"浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"question/index.md","filePath":"question/index.md","lastUpdated":null}'),t={name:"question/index.md"},h=s("",7),p=l("ol",null,[l("li",null,[i("优化打包构建速度 "),l("ul",null,[l("li",null,[i("HMR 热模块替换 "),l("ul",null,[l("li",null,[i("为什么要用？ "),l("ul",null,[l("li",null,"默认情况下，一旦修改了代码，全部代码重新编译刷新，速度慢（全体刷新）")])]),l("li",null,[i("有什么作用？ "),l("ul",null,[l("li",null,"只更新修改的模块，其他模块不变（局部更新）")])]),l("li",null,[i("怎么使用？ "),l("ul",null,[l("li",{"hot:":"",true:""},"devServer:"),l("li",null,"new webpack.HotModuleReplacementPlugin()")])]),l("li",null,[i("注意： "),l("ul",null,[l("li",null,"默认情况下只有样式文件有 HMR 功能（style-loader），JS 是没有的开启 JS 的 HMR 功能："),l("li",null,"手写 JS 代码 --> module.hot.accpet('模块路径', () => {})"),l("li",null,"在 Vue 使用 --> vue-loader"),l("li",null,"在 React 使用 --> react-hot-loader")])])])]),l("li",null,[i("缓存 "),l("ul",null,[l("li",null,"eslint 和 babel 两个任务处理 JS 文件，时间一般会比较长，为了让其重新构建速度更快, 可以使用缓存。"),l("li",null,"eslint --> cache: true"),l("li",null,"babel --> cacheDirectory: true"),l("li",null,"cache-loader 放置在要缓存 loader 的前面"),l("li",null,"注意：一般只针对耗时长的任务：eslint-loader/babel-loader/vue-loader")])]),l("li",null,[i("oneOf "),l("ul",null,[l("li",null,[i("作用： "),l("ul",null,[l("li",null,"让模块只被一个 loader 处理，其他的就不看了(原本所有都会判断一下)"),l("li",null,"能够提升打包速度")])]),l("li",null,[i("注意： "),l("ul",null,[l("li",null,"eslint-loader: 处理 js, 需要先执行, 将其定义在 oneOf 的外面"),l("li",null,"babel-loader: 处理 js, 后执行, 将其定义在 oneOf 的内部")])])])]),l("li",null,[i("多进程打包 "),l("ul",null,[l("li",null,"过去: happyPack 现在: thread-loader"),l("li",null,"用法和 cache-loader 差不多，放在要使用 loader 前面"),l("li",null,"作用：开启多进程处理前面的任务，提升打包速度"),l("li",null,"注意：每个进程开启和通信都有开销，一般只针对耗时长的任务：babel-loader")])])])]),l("li",null,[i("兼容性处 "),l("ul",null,[l("li",null,[i("js "),l("ul",null,[l("li",null,"babel-loader: presets: ['@babel/preset-env'] 问题就是只能编译/转换简单语法"),l("li",null,"@babel/polyfill: 做复杂语法(新的 APi)兼容，问题是体积太大了"),l("li",null,"core-js: 在@babel/preset-env 基础上，增加了 useBuiltIns: 'usage'来实现按需打包"),l("li",null,"eslint-loader package.json 中配置 eslintConfig 来指示 eslint-loader 到底要干什么事enfore: 'pre' 优先执行")])]),l("li",null,[i("css "),l("ul",null,[l("li",null,"postcss-loader"),l("li",null,"内部使用 autoprefixer 插件, 给 w3c 样式自动添加厂商前缀"),l("li",null,"package.json 中指定 browserslist 来指示 postcss-loader 兼容性做到什么程度"),l("li",null,[i("开发环境 "),l("ul",null,[l("li",null,"style-loader"),l("li",null,"css-loader"),l("li",null,"postcss-loader"),l("li",null,"less-loader / sass-loader / stylus-loader")])]),l("li",null,[i("生产环境 "),l("ul",null,[l("li",null,"MiniCssExtractPlugin.loader（还需要配置插件 new MiniCssExtractPlugin）"),l("li",null,"css-loader"),l("li",null,"postcss-loader"),l("li",null,"less-loader / sass-loader / stylus-loader")])])])]),l("li",null,"vue vue-loader"),l("li",null,"html html-webpack-plugin 自动引入打包生成的 js/css"),l("li",null,"图片/字体/音视频文件 url-loader / file-loader limit: 10000 小于 10kb 一下的图片会被 base64 处理")])]),l("li",null,[i("拆分打包与压缩 "),l("ul",null,[l("li",null,[i("作用： "),l("ul",null,[l("li",null,"抽取公共代码"),l("li",null,"拆分多个文件，减少单个文件体积（避免单次请求时间过长）")])]),l("li",null,[i("配置： "),l("ul",null,[l("li",null,[i("多入口+ optimization "),l("ul",null,[l("li",null,"将node_modules抽取成单独模块"),l("li",null,"将多入口的公共模块也抽取成单独模块")])]),l("li",null,[i("单入口+optimization+import "),l("ul",null,[l("li",null,"将node_modules抽取成单独模块"),l("li",null,"动态导入语法import就能将某些文件抽取成单独模块")])]),l("li",null,"import（）动态引入模块"),l("li",null,[i("原生Js：在需要的回调函数中动态加载模块，"),l("code",null,"import（模块）.then()")]),l("li",null,[i("Vue："),l("code",null,"（）=>import（'./Foo.vue'）"),i("，实现路由组件懒加载")])])])])]),l("li",null,[i("资源预加载(prefetch) "),l("ul",null,[l("li",null,[i("作用 "),l("ul",null,[l("li",null,"让资源提前加载")])]),l("li",null,[i("区别： "),l("ul",null,[l("li",null,"preload 让当前页面的要使用资源加载（延后加载）"),l("li",null,"prefetch 让后面要使用资源提前加载（当前不需要使用）")])]),l("li",null,[i("使用： "),l("ul",null,[l("li",null,"import(/* webpackPrefetch: true */'./xxx')"),l("li",null,"import(/* webpackPreload: true */'./xxx') // 没有效果"),l("li",null,"问题：兼容性较差")])]),l("li",null,[i("使用chrome团队提供的一个工具包：preload-webpack-plugin "),l("ul",null,[l("li",null,"npm i-D preload-webpack-plugin@next //必须是最新的下一个版本")]),l("ul",null,[l("li",null,"对异步模块包使用：prefetch"),l("li",null,"对同步模块包使用：preload")])])])]),l("li",null,[i("生产环境时不生成 SourceMap "),l("ul",null,[l("li",null,"productionSourceMap: false 减少打包文件")])]),l("li",null,[i("文件名 hash 化=>利用浏览器缓存 "),l("ul",null,[l("li",null,"对打包文件名用上 contenthash ==> 某个 bundle 对应的模块文件内容发生改变文件名才会变化 ===> 利用浏览器缓存"),l("li",null,"hash、chunkhash、contenthash，首先生成效率越来越低，成本越来越高，影响范围越来越小，精度越来越细。"),l("li",null,"hash是一整个项目，一次打包，只有一个hash值，是项目级的"),l("li",null,"chunhash是从入口entry出发，到它的依赖，以及依赖的依赖，依赖的依赖的依赖，等等，一直下去，所打包构成的代码块(模块的集合)叫做一个chunk，也就是说，入口文件和它的依赖的模块构成的一个代码块，被称为一个chunk。"),l("li",null,"contenthash是哈希只跟内容有关系，内容不变，哈希值不变。与chunkhash的区别可以举上面contenthash的例子，同时可以说明contenthash跟内容有关，但是chunkhash会考虑很多因素，比如模块路径、模块名称、模块大小、模块id等等。")])]),l("li",null,[i("代码 Tree Shaking "),l("ul",null,[l("li",null,"效果: 打包时'摇掉'模块中没有被使用的代码 条件: 必须是 ES6 模块化导出且进行代码压缩时"),l("li",null,"必须使用 ES6 模块化（需要禁止@babel/preset-env 转换 ES6 模块化语法 modules: false）"),l("li",null,"开启 webpack 的生产模式（内部启用 TerserPlugin，用来压缩 JS 代码的插件，tree shaking 功能就是这个插件完成的）"),l("li",null,"在 package.json 配置 sideEffects 来指定哪些文件需要进行 tree shaking")])])],-1),k=s("",8),r=[h,p,k];function u(o,d,c,F,g,E){return e(),n("div",null,r)}const C=a(t,[["render",u]]);export{b as __pageData,C as default};
