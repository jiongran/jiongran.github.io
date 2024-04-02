import{_ as l,c as i,o as a,a4 as e}from"./chunks/framework.Xe-pYyW9.js";const S=JSON.parse('{"title":"html","description":"","frontmatter":{},"headers":[],"relativePath":"question/html.md","filePath":"question/html.md","lastUpdated":null}'),t={name:"question/html.md"},o=e(`<h1 id="html" tabindex="-1">html <a class="header-anchor" href="#html" aria-label="Permalink to &quot;html&quot;">​</a></h1><h2 id="html5和css3新特性" tabindex="-1">html5和css3新特性 <a class="header-anchor" href="#html5和css3新特性" aria-label="Permalink to &quot;html5和css3新特性&quot;">​</a></h2><ul><li>html5 <ul><li>语义化的标签</li><li>新增音频视频</li><li>画布canvas</li><li>数据存储localstorage sessionstorage</li><li>增加了表单控件 email url search...</li><li>拖拽释放API</li></ul></li><li>csS3的新特性： <ul><li>新增选择器，属性选择器伪类选择器、伪元索选择</li><li>媒体查询</li><li>文字阴影</li><li>边框</li><li>盒子模型box-sizing</li><li>渐变</li><li>过度</li><li>自定义动面</li><li>背景的属性</li><li>2D和3D</li></ul></li></ul><h2 id="同源策略以及跨域解决方案" tabindex="-1">同源策略以及跨域解决方案 <a class="header-anchor" href="#同源策略以及跨域解决方案" aria-label="Permalink to &quot;同源策略以及跨域解决方案&quot;">​</a></h2><pre><code>同源策略是浏览器核心，主要是协议＋域名＋端口号三者一致，若其中一个不一样则不是同源产生跨域，如果没有这个策略就会遭受网络攻击

三个允许跨域加载资源的标签：img link script

跨域是可以发送请求，后端也会正常返回结果，只不过这个结果被浏览拦截

1. JSONP
2. CORS 
3. websocket
4. 反向代理
</code></pre><h2 id="浏览器存储方式有哪些" tabindex="-1">浏览器存储方式有哪些 <a class="header-anchor" href="#浏览器存储方式有哪些" aria-label="Permalink to &quot;浏览器存储方式有哪些&quot;">​</a></h2><pre><code>- cookies
	- H5标准前的本地存储方式
	- 兼容性好，请求头自带cookie
	- 存储量小(4KB)，资源浪费，使用麻烦（封装）
- localstorage
	- H5加入的以键值对为标准的方式(5M)
	- 操作方便，永久存储，兼容性较好
	- 保存值的类型被限定，浏览器在隐私模式下不可读取，不能被爬虫
- sessionstorage (5M)
	- 当前页面关闭后就会立刻清理，会话级別的存储方式
- indexedDB
	- H5标准的存储方式，它是以键值对进行存储，可以快速读取，适合WEB场景
</code></pre><h2 id="浏览器缓存策略" tabindex="-1">浏览器缓存策略 <a class="header-anchor" href="#浏览器缓存策略" aria-label="Permalink to &quot;浏览器缓存策略&quot;">​</a></h2><pre><code>- 强缓存 不发起请求直接使用缓存内容 浏览器把Js Css image 存到内存中 下次用户访问直接从内存中读取 提高性能 强缓存触发如下
	* http1.0 时间戳响应头
	* http1.1 cache-control响应头
- 协商缓存 需要像后端发送请求 通过判断是否使用协商缓存 如果请求内容没有变化则返回304 浏览器使用缓存内容 协商缓存触发如下
	* http1.0 请求头if-modified-since 响应头 last-modified
	* http1.1 请求头if-none-match 响应头 etag
</code></pre><h2 id="script标签async和defer区别" tabindex="-1">script标签async和defer区别 <a class="header-anchor" href="#script标签async和defer区别" aria-label="Permalink to &quot;script标签async和defer区别&quot;">​</a></h2><pre><code>- 没有上述标签时浏览器会立刻加载并执行脚本
- 有async 加载和渲染后面元素的过程和script的加载和执行并行进行
- 有defer 加载和渲染后面元素的过程和script的加载并行进行 但是执行事件灯所有元素解析完成后才会执行
</code></pre><h2 id="window-onload和document-ready区别" tabindex="-1">window.onload和document.ready区别 <a class="header-anchor" href="#window-onload和document-ready区别" aria-label="Permalink to &quot;window.onload和document.ready区别&quot;">​</a></h2><pre><code>- window.onload 是在DOM树和资源文件加载完成后执行(包括图片和引用文) 多个会被覆盖且只能执行最后一次
- document.ready 是在DOM树加载完后就会执行 可以多次执行
</code></pre><h1 id="html-面试题目" tabindex="-1">html 面试题目 <a class="header-anchor" href="#html-面试题目" aria-label="Permalink to &quot;html 面试题目&quot;">​</a></h1><h2 id="浏览器输入内容按下回车键发生什么" tabindex="-1">浏览器输入内容按下回车键发生什么 <a class="header-anchor" href="#浏览器输入内容按下回车键发生什么" aria-label="Permalink to &quot;浏览器输入内容按下回车键发生什么&quot;">​</a></h2><ol><li>域名解析 <ul><li>域名解析IP</li><li>由近及远查询</li><li>默认使用缓存</li></ul></li><li>建立Tcp连接 <ul><li>三次握手协议 <ul><li>客户端向服务端发送tcp报文 进入请求连接状态</li><li>服务端接收报文 结束listen阶段 表示同意请求连接 并且向客户端发送一段报文</li><li>客户端确认接受到服务端连接信号 进入消息收发阶段</li></ul></li></ul></li><li>发起http和https请求</li><li>服务器响应请求和下载网页 <ul><li>html响应头不需要添加缓存否则直接使用缓存直接进入渲染阶段</li></ul></li><li>浏览器解析和渲染 <ol><li>处理html构建DOM树</li><li>处理CSS标记并构建CSSOM树</li><li>将DOM树与CSSOM树合并成一个渲染树</li><li>根据渲染树来布局，以计算每个节点的几何信息</li><li>将各个节点渲染到屏幕上。这样就完成了 页面的渲染</li></ol></li><li>请求结束断开Tcp连接</li></ol><h2 id="浏览器如何渲染页面" tabindex="-1">浏览器如何渲染页面 <a class="header-anchor" href="#浏览器如何渲染页面" aria-label="Permalink to &quot;浏览器如何渲染页面&quot;">​</a></h2><p>当浏览器的网络线程收到 HTML文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列。 在事件调环机制的作用下，渲染主线程取出消息队列中的渲染任务，开启渲染流程。 整个渲染流程分为多个阶段，分别是：HTML解析、样式计算、布局、分层、绘制、分块、光栅化、画每个阶段都有明确的输入输出，上一个阶段的输出会成为下一个阶段的输入。 这样，整个渲染流程就形成了一套组织严密的生产流水线。 渲染的第一步是解析 HTML。 解析过程中遇到 Css解析 CSS，遇到JS执行 JS。为了提高解析效率，浏览器在开始解析前，会后动一个预解析的线程，率先下载 HTML中的外部 CSS 文件和 外部的 JS 文件。 如果主线程解析到 Link位置，此时外部的 css 文件还没有下载解析好，主线程不会等待，继续解析后续的HTML。这是因为下裁和解析 CSS的工作是在预解析线程中进行的。这就是CSS不会阻塞 HTML 解析的根本原因。 如果主线程解析到 script位置，会停止解析 HTML，转而等待 JS 文件下载好，并将全局代码解析执行完成后，才能继续解析 HTML。这是因为JS 代码的执行过程可能会修改当前的 DOM 树，所以 DOM 树的生成必须暂得。这就是 JS 会阻塞 HTML 解析的根本原因。 第一步完成后，会得到 DOM 树和 CSSOM 树，浏览器的默认样式、内部样式、外部样式、行内样式均会包含在 CSSOM 树中 渲染的下一步是样式计算 主线程会遍历得到的 DOM 树，依次为树中的每个节点计算出它最终的样式，称之为 Computed Style。 在这一过程中，很多预设值会变成绝对值，比如 red 会变成rgb（255,0,0）；相对单位会变成绝对单位，比如 em 会变成 pX 这一步完成后，会得到一棵带有样式的 DOM树。 接下来是布局，布局完成后会得到布局树。 布局阶段会依次追历 DOM树的每一个节点，计算每个节点的几何信息。例如节点的宽高、相对包含块的位置。 大部分时候，DOM树和布局树并非一一对应。 比如 display:none 的节点没有几何信息，因此不会生成到布局树；又比如使用了伪元素选择器，虽然DOM树中不存在这些伪元素节点，但它们拥有几何信息，所以会生成到布局树中。还有匿名行盒，匿名块盒等等都会导致 DOM 树和布局树无法一一对应。 下一步是分层 主线程会使用一套复杂的策略对整个布局树中进行分层。 分层的好处在于，将来某一个层改变后，仅会对该层进行后续处理，从而提升效率。 滚动条、堆叠上下文、transform、opacity 等样式都会或多或少的影响分层结果，也可以通过 WiLL-change 属性更大程度的影响分层结果 再下一步是绘制 主线程会为每个层单独产生绘制指令集，用于描述这一层的内容该如何画出来。 完成绘制后，主线程将每个图层的绘制信息提交给合成线程，剩余工作将由合成线程完成。 合成线程首先对每个图层进行分块，将其划分为更多的小区域。 它会从线程池安拿取多个线程来完成分块工作。 分块完成后，进入光栅化阶段。 合成线程会将块信息交给 GPU 进程，以极高的速度完成光樹化。 GPU 进程会开启多个线程来完成光栅化，并且优先处理近视口区域的块。 光栅化的结果，就是一块一块的位图 最后一个阶段就是画了 合成线程拿到每个层、每个块的位图后，生成一个个「指引（quad）」信息。 指引会标识出每个位图应该画到屏幕的哪个位置，以及会考虑到旋转、缩放等变形。 变形发生在合成线程，与渲染主线程无关，这就是 transform 效率高的本质原因。 合成线程会把 quad 提交给 GPU 进程，由 GPU 进程产生系统调用，提交给 GPU 硬件，完成最终的屏幕成像</p>`,18),n=[o];function r(s,d,c,h,m,u){return a(),i("div",null,n)}const f=l(t,[["render",r]]);export{S as __pageData,f as default};
