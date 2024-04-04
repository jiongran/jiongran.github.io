import{av as l,p as i,m as e,aR as t}from"./chunks/framework.CtlH_-Gv.js";const v=JSON.parse('{"title":"Vue2&3 基础知识","description":"","frontmatter":{},"headers":[],"relativePath":"question/vue.md","filePath":"question/vue.md","lastUpdated":null}'),a={name:"question/vue.md"},o=t(`<h1 id="vue2-3-基础知识" tabindex="-1">Vue2&amp;3 基础知识 <a class="header-anchor" href="#vue2-3-基础知识" aria-label="Permalink to &quot;Vue2&amp;3 基础知识&quot;">​</a></h1><h2 id="vue2-相关-api" tabindex="-1">Vue2 相关 API <a class="header-anchor" href="#vue2-相关-api" aria-label="Permalink to &quot;Vue2 相关 API&quot;">​</a></h2><ol><li>全局配置 <ul><li>Vue.config 对象的属性</li><li>Vue.config.productionTip = false</li></ul></li><li>全局 API <ul><li>Vue.component():</li><li>Vue.directive():</li><li>Vue.filter():</li><li>Vue.use(): <ul><li>对象插件: 调用插件对象 install 方法(传入 Vue)来安装插件(执行定义新语法的代码)</li><li>函数插件: 直接将其作为 install 来调用(传入 Vue)来安装插件(执行定义新语法的代码)</li></ul></li><li>Vue.nextTick(): <ul><li>把回调函数放入callbacks等待执行</li><li>将执行函数放到微任务或者宏任务中</li><li>事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调</li></ul></li><li>Vue.set():</li><li>Vue.delete():</li></ul></li><li>配置选项 <ul><li>数据 <ul><li>data: 在return之前单独修改这个数据是不可以的，因为这个数据没有被getter和setter/在return后可以修改</li><li>props:</li><li>computed:</li><li>methods:</li><li>watch:</li><li>DOM</li><li>el:</li><li>template:</li><li>render:</li></ul></li><li>生命周期 <ol><li>创建 1.1. beforeCreat 在这个阶段属性和方法都不能使用 1.2. created 这里时实例创建完成之后，在这里完成了数据监测，可以使用数据，修改数据，不会触发updated 视图 挂载 1.3. beforeMount 完成了模板的编译，虚拟DON也完成创建，即将渲染，修改数据，不会触发updated 1.4. Mounted 把编译好的模板挂载到页面，这里可以发送异步请求也可以访问DOM节点</li><li>更新 2.1. beforeUpdate 组件数据更新之前使用，数据足新的，页面上的数据时旧的，组件即将更新，准各谊染，可以改数据 2.2. updated render重新渲染，这时数据和页面都是新的，避免在此更新数据</li><li>销毁 3.1. beforeDestroy 实例销毀前，在这里实例还可以用，可以清雄定时器等等 3.2. destroyed 组件已经被销毁了，全部都销毁</li><li>activited组件激活时（刷新时先进入mounted然后进入） 4.1 activited 不刷新时只执行activated） 4.2 deactivited组件被销毁时</li></ol></li><li>资源 <ul><li>directives:</li><li>filters:</li><li>components:</li></ul></li><li>杂项 <ul><li>mixins:</li><li>provide / inject:</li></ul></li><li>其它 <ul><li>name:</li><li>functional</li></ul></li></ul></li><li>实例属性 <ul><li>$el</li><li>$parent</li><li>$children</li><li>$refs</li><li>$attrs</li><li>$listeners</li></ul></li><li>实例方法 <ul><li>数据 <ul><li>$watch()</li><li>$nextTick()</li><li>$set()</li><li>$delete()</li></ul></li><li>事件 <ul><li>$on()</li><li>$once()</li><li>$off()</li><li>$emit()</li></ul></li><li>生命周期 <ul><li>$mount()</li><li>$nextTick()</li><li>$destroy()</li></ul></li></ul></li><li>指令 <ul><li>v-text</li><li>v-html</li><li>v-show</li><li>v-if</li><li>v-else</li><li>v-else-if</li><li>v-for</li><li>v-on</li><li>v-once</li><li>v-bind</li><li>v-model</li><li>v-slot</li></ul></li><li>特殊属性 <ul><li>key <ul><li>key属性是Dom唯一标识符</li><li>1.提高虚拟DoM的更新</li><li>2.若不设置key，可能会触发一些bug</li><li>3.为了触发过度效果</li></ul></li><li>ref</li><li>is</li></ul></li><li>内置组件 <ul><li>component</li><li>transition</li><li>keep-alive</li><li>slot</li></ul></li><li>修饰符 <ul><li>事件修饰符 .stop .prevent .capture .self .once .passive .native</li><li>按键修饰符 .keyup . keydown</li><li>系统修饰符 .ctri .alt .meta</li><li>鼠标修饰符 .left .right .middle</li><li>表单修饰符 .lazy .trim .number</li><li>v-bind修饰符 .async .prop .camel</li></ul></li><li>option API（选项式API）</li><li>模板编译原理</li></ol><ul><li>解析阶段 将模板解析为ast语法树(抽象语法树)</li><li>优化阶段 从ast中找到静态子树进行标记(虚拟DOM对比时会被忽略)</li><li>生成阶段 通过ast转化围殴代码字符串并最终生成render函数</li></ul><ol start="12"><li>watch和computed区别</li></ol><blockquote><p>computed 是计算结果可以修改通过getter和setter来设置 watch 监听数据变化 第一次监听使用handler和immediate 对象监听更改时无触发变化是时需要使用handler deep和immediate</p></blockquote><ul><li>data中已定义对象或者是props传值数据更新时才能进行重新计算 watch是监听数据变化执行某些操作</li><li>computed有缓存当发生变化时才能够输出结果watch监听有变化，再调用回掉函数</li><li>computed必须有return watch则不必须要</li><li>computed不能出现异步事物 watch可以进行异步操作</li></ul><ol start="13"><li>diff和虚拟Dom 深度优先算法 <ul><li>描述 <ul><li>虛扣DOM是利用js描述元素与元素的关系，用js对象来表示真实的DOM数结构创建一个虚拟的DOM对象</li><li>如果组件内有响应的数据，数据发生改变的时候，render函数会生成一个新的虛扣DOM，这个新的虚拟DOM会和旧的虚拟DOM进行比对，找到需要修改的虚拟DOM内容，然后去对应的真实DOM中修改</li><li>diff第法就是虚拟DOM的比对时用的，返回一个patch对象，这个对象的作用就是存储两个节点不同的地方，最后用path 记录里记录的信息进行更新真实DOM</li></ul></li><li>特点 <ul><li>比较只会在同层级进行, 不会跨层级比较</li><li>在diff比较的过程中，循环从两边向中间比较</li></ul></li><li>实现方式 <ol><li>js对象表示真实的DoM结构，要生成一个虚拟DOM，再用虚拟DOM均建一个真实DOM树，渲染到页面</li><li>状态改变生成新的虛拟DOM，跟旧得虚拟DOM进行比对，这个比对的过程就是DIFF第法，利用patch记录差异</li><li>把记录的差异用在第一个虚扣DOM生成的真实DOM上，视图就更新了。</li></ol></li><li>实现步骤 <ul><li>当数据发生改变时，订阅者watcher就会调用patch给真实的DOM打补丁</li><li>通过isSameVnode进行判断，相同则调用patchVnode方法</li><li>patchVnode做了以下操作： <ul><li>找到对应的真实dom，称为el</li><li>如果都有都有文本节点且不相等，将el文本节点设置为Vnode的文本节点</li><li>如果oldVnode有子节点而VNode没有，则删除el子节点</li><li>如果oldVnode没有子节点而VNode有，则将VNode的子节点真实化后添加到el</li><li>如果两者都有子节点，则执行updateChildren函数比较子节点</li></ul></li><li>updateChildren主要做了以下操作： <ul><li>设置新旧VNode的头尾指针</li><li>新旧头尾指针进行比较，循环向中间靠拢，根据情况调用patchVnode进行patch重复流程、调用createElem创建一个新节点，从哈希表寻找 key一致的VNode 节点再分情况操作</li></ul></li></ul></li></ul><ul><li>diff算法</li></ul><ul><li>用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中</li><li>当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异</li><li>把所记录的差异应用到所构建的真正的DOM树上，视图就更新了 算法对比</li><li>平层对比 <ul><li>节点类型变化 直接卸载旧节点替换</li><li>属性或者属性值发生变化 更新节点属性</li><li>文本变化 直接修改文字</li><li>新旧都有子节点 通过updateChildren(el,oldCh,newCh)进行对比更新</li><li>新没有子节点 旧节点有子节点则将旧节点的innerHTML设置为空</li><li>新有子节点 旧节点没有子节点则直接将新的子节点生成真实DOM插入老节点</li></ul></li></ul></li><li>template与jsx <blockquote><p>Template 适合逻辑简单，render 适合复杂逻辑。 使用者 template 理解起来相对容易，但灵活性不足；自定义 render 函数灵活性高，但对使用者要求较高。 render 的性能较高，template 性能较低。 使用 render 函数渲染没有编译过程，相当于使用者直接将代码给程序。</p></blockquote></li></ol><h2 id="vue3-相关-api" tabindex="-1">Vue3 相关 API <a class="header-anchor" href="#vue3-相关-api" aria-label="Permalink to &quot;Vue3 相关 API&quot;">​</a></h2><ol><li><p>配置选项</p><ul><li>生命周期 <ul><li>setup</li><li>onbeforeMount</li><li>onmounted</li><li>onbeforeupdate</li><li>onupdated</li><li>onbeforeunmount</li><li>onunmounted</li><li>onactived</li><li>ondeactived</li></ul></li></ul></li><li><p>常用 Composition API</p><ul><li>setup: 所有组合 API 都在此选项函数中执行(它本身并不是组合 API)</li><li>ref : 一般用来定义基本类型数据的响应式</li><li>reactive: 一般用来定义包含多个数据的对象/数组的响应式</li><li>computed: 定义基于已有响应式数据的计算属性(getter/setter)</li><li>watch: 监视响应式数据</li><li>toRefs: 将一个被代理对象中所有属性都转换为 ref 对象</li><li>onMounted: 当初始化挂载显示后执行回调</li></ul></li></ol><h2 id="vue-router" tabindex="-1">Vue-router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;Vue-router&quot;">​</a></h2><ol><li><p>路由守卫</p><ul><li>全局守卫(beforeEach/afterEach)</li><li>路由单独首位(beforeEnter)</li><li>组件守卫(beforeRouterEnter/beforeRouterUpdater/beforeRouterLeave)</li></ul></li><li><p>动态路由</p><blockquote><p>要在路由配置里设置meat属性，扩展权限相关的字段，在路由号航守卫里通过判断这个权限标识，实现路由的动态增加和跳转根据用户登录的账号，返回用户角色 前端再根据角色，跟路由表的meta.role进行匹配 把匹配搭配的路由形成可访问的路由</p></blockquote></li></ol><h2 id="vuex" tabindex="-1">Vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;Vuex&quot;">​</a></h2><ol><li>核心概念 <ul><li>state 存储变量I</li><li>getters state的计算属性</li><li>mutations 提交更新数据的方法</li><li>actions 和mutations差不多，他是提交mutations来修改数据，可以包括异步操作</li><li>modules 楧块化vuex</li></ul></li><li>持久化 vuex肯定会重新获取数据，页面也会丢失数据 <ul><li>把数据直接保存在浏览器级存里 (cookie 1ocalstorage sessionstorage)</li><li>页面刷新的时候，再次请求数据，达到可以动态更新的方法</li></ul><blockquote><p>监听浏览器的刷新操作，在刷新前把数据保存到sessionstorage里，刷新后请求致据，清求到了用vuex，如果汉有那就用sessionstorage里的数据</p></blockquote></li><li>双向绑定 <blockquote><p>vuex处理异步，当触发事件的时候，会通过dispatch来访问actions中的方法，actions中的commit会航发mutations中的方法从而修改state里的值，通过getter把数据更新到视图</p></blockquote></li></ol><h2 id="pinia" tabindex="-1">pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;pinia&quot;">​</a></h2><ol><li>核心概念 <ul><li>state 存储变量I</li><li>getters state的计算属性</li><li>actions 修改数据，可以包括异步操作</li><li>modules 楧块化stores</li></ul></li><li>持久化 stores肯定会重新获取数据，页面也会丢失数据 <ul><li>把数据直接保存在浏览器级存里 (cookie 1ocalstorage sessionstorage)</li><li>页面刷新的时候，再次请求数据，达到可以动态更新的方法</li></ul><blockquote><p>监听浏览器的刷新操作，在刷新前把数据保存到sessionstorage里，刷新后请求致据，清求到了用vuex，如果汉有那就用sessionstorage里的数据</p></blockquote></li><li>双向绑定 <blockquote><p>pinia处理异步，当触发事件的时候，会直接调用actions中的方法,通过getter把数据更新到视图</p></blockquote></li></ol><h1 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h1><h2 id="vue实例化发生了什么" tabindex="-1">vue实例化发生了什么 <a class="header-anchor" href="#vue实例化发生了什么" aria-label="Permalink to &quot;vue实例化发生了什么&quot;">​</a></h2><ul><li>new Vue的时候调用会调用_init方法</li></ul><ul><li>定义 $set、$get 、$delete、$watch 等方法</li><li>定义 $on、$off、$emit、$off等事件</li><li>定义 _update、$forceUpdate、$destroy生命周期</li></ul><ul><li>调用$mount进行页面的挂载</li><li>挂载的时候主要是通过mountComponent方法</li><li>定义updateComponent更新函数</li><li>执行render生成虚拟DOM</li><li>_update将虚拟DOM生成真实DOM结构，并且渲染到页面中</li></ul><h2 id="vue2响应式原理" tabindex="-1">vue2响应式原理 <a class="header-anchor" href="#vue2响应式原理" aria-label="Permalink to &quot;vue2响应式原理&quot;">​</a></h2><ul><li>初始化 <ul><li>实现数据代理 <ul><li>通过 defineproperty 给 vm 定义与 data 中属性对应的带 getter/setter 的属性</li><li>在 getter 中, 读取 data 中对应的属性值返回 ==&gt; 读取 this.msg ==&gt; 读取的是data 中 msg 属性值</li><li>在 setter 中, 将最新值保存到 data 对应的属性上 ==&gt; this.msg = &#39;abc&#39; ==&gt; &#39;abc&#39;会保存到 data 的 msg 上</li></ul></li><li>创建 observer <ul><li>目标: 对 data 中所有层次的属性进行监视/劫持</li><li>通过 defineproperty 给 data 中所有层次属性, 都重新定义, 加上 getter 与setter</li><li>getter: 用来建立 dep 与 watcher 的关系</li><li>setter: 用来当 data 数据发生改变去更新界面</li><li>为 data 中所有层次的属性创建一个对应的 dep ==&gt; 用来将来更新界面的</li></ul></li><li>创建 compile <ul><li>目标 1: 实现界面的初始化显示</li><li>目标 2: 为将更新做准备 <ul><li>为模板中每个包含表达式(事件表达式除外)的节点创建一个对应的watcher</li><li>给 watcher 绑定用于更新对应节点的回调函数</li><li>将 watcher 添加到 n 个对应的 dep 中</li></ul></li></ul></li></ul></li><li>更新 <ul><li>this.msg = &#39;abc&#39;</li><li>由于有数据代理 ==&gt; data 的 msg 更新为了&#39;abc&#39;</li><li>由于有数据劫持 ==&gt; data 中 msg 的 setter 调用了</li><li>在 setter 中, 通过对应的 dep 去通知所对应的 watcher 去更新对应的节点 ==&gt; 使用了订阅发布模式</li></ul></li><li>响应式原理和经验 通过数据劫持和发布订阅者模式来实現，同时利用object.defineProperty()劫持各个属性的setter和getter,在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图时同步的，数据发生改变，视图跟者发生改变，视图改变，数报也会发生改变。 <ol><li>需要observer的数据对象进行递归便利，包括子属性对象的属性，都加_上setter和getter</li><li>compile模板解析指令，把模板中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上更新数据，添加订问者，如果数据变化，收到通知，更新视</li><li>watcher订阅者是observer和compile之间的通信桥梁，作用： <ol><li>在自身实例化的时候发布订阅器内添加自己</li><li>自身要有一个update()方法</li><li>等待属性变动时，调用自身的update方法，触发compile这种的回调</li></ol></li><li>MVVM作为数据绑定的入口，整合了observer、compile和watcher三者，通过observer来监听自己的数据交化，通过compile解析模板指令，最后利用watcher把observer和compile联系起米，最终达到数据更新视图更新，视图更新数据更新的效果</li></ol></li></ul><h2 id="vue3响应式原理" tabindex="-1">vue3响应式原理 <a class="header-anchor" href="#vue3响应式原理" aria-label="Permalink to &quot;vue3响应式原理&quot;">​</a></h2><h2 id="比较vue2和vue3的区别" tabindex="-1">比较Vue2和Vue3的区别 <a class="header-anchor" href="#比较vue2和vue3的区别" aria-label="Permalink to &quot;比较Vue2和Vue3的区别&quot;">​</a></h2><ul><li><p>vue2响应式</p><ul><li><p>核心</p><ul><li>对象: 通过 defineProperty 对对象的已有属性值的读取和修改进行劫持(监视/拦截)</li><li>数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持</li></ul></li><li><p>问题</p><ul><li>对象直接新添加的属性或删除已有属性, 界面不会自动更新 (defineProperty)</li><li>直接通过下标替换元素或更新 length, 界面不会自动更新</li></ul></li><li><p>双向绑定原理 通过数据劫持和发布订阅者模式来实現，同时利用object.defineProperty()劫持各个属性的setter和getter,在数据发生改变的时候发布消息给订阅者，触发对应的监听回调渲染视图，也就是说数据和视图时同步的，数据发生改变，视图跟者发生改变，视图改变，数报也会发生改变。 第一步：需要observer的数据对象进行递归便利，包括子属性对象的属性，都加_上setter和getter 第二步：compile模板解析指令，把模板中的变量替换成数据，然后初始化渲染视图，同时把每个指令对应的节点绑定上更新数据，添加订问者，如果数据变化，收到通知，更新视图 第三步：watcher订阅者是observer和compile之间的通信桥梁，作用： 1.在自身实例化的时候发布订阅器内添加自己 2.自身要有一个update()方法 3.等待属性变动时，调用自身的update方法，触发compile这种的回调 第四步：MVVM作为数据绑定的入口，整合了observer、compile和watcher三者，通过observer来监听自己的数据交化，通过compile解析模板指令，最后利用watcher把observer和compile联系起米，最终达到数据更新视图更新，视图更新数据更新的效果 diff和虚拟Dom 虛扣DOM是利用js描述元素与元素的关系，用js对象来表示真实的DOM数结构创建一个虚拟的DOM对象 如果组件内有响应的数据，数据发生改变的时候，render函数会生成一个新的虛扣DOM，这个新的虚拟DOM会和旧的虚拟DOM进行比对，找到需要修改的虚拟DOM内容，然后去对应的真实DOM中修改 diff第法就是虚拟DOM的比对时用的，返回一个patch对象，这个对象的作用就是存储两个节点不同的地方，最后用path 记录里记录的信息进行更新真实DOM 步骤： 1.js对象表示真实的DoM结构，要生成一个虚拟DOM，再用虚拟DOM均建一个真实DOM树，渲染到页面 2.状态改变生成新的虛拟DOM，跟旧得虚拟DOM进行比对，这个比对的过程就是DIFF第法，利用patch记录差异 3.把记录的差异用在第一个虚扣DOM生成的真实DOM上，视图就更新了。</p></li></ul></li><li><p>vue3响应式</p><ul><li>核心 <ul><li>通过 Proxy(代理): 拦截对 data 任意属性的任意(13 种)操作, 常用 3 个: 读取属性值, 修改或添加属性, 删除属性</li><li>通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作</li></ul></li><li>解决问题 <ul><li>给对象添加新属性</li><li>删除对象已有属性</li><li>直接通过下标替换元素或更新 length</li></ul></li></ul></li><li><p>具体内容</p><ol><li>双向数据绑定原理不同吗（2.0使用es5 object.definepropertype对数据进行劫持同时结合发布订阅来实现3.0是使用es6 proxy对数据进行代理）</li><li>3.0支持碎片划（存在多个根节点）</li><li>Api不同（2.0采用选项型options3.0采用合成型composition）</li><li>定义数据方式（2.0数据放在data中3.0需要使用setup中）</li><li>生命周期不同（2.0 beforecreate created beforeMounte mounted beforeUpdate updated beforeDestroy destroyed activated deactivated 3.0 setup on beforeMount Onmounted onbefore update onupdated onbeforeunmount onunmounted onactived ondeactived ）</li><li>父子组件传参方式不同</li><li>指令和插槽不同</li></ol></li><li><p>vue3使用哪些优化</p><ul><li>diff算法优化 -增加了静态标记</li><li>静态提升 -对不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用</li><li>事件监听缓存</li><li>SSR优化</li></ul></li><li><p>vue3性能提升提现</p><ul><li>编译阶段 以上优化</li><li>源码体积 Tree shanking</li><li>响应式系统</li></ul></li><li><p>vue3使用proxy原因</p><ol><li>proxy可以代理整个对象，defineproperty只代理对象上的某个属性</li><li>proxy对代理对象的监听更加丰富</li><li>proxy代理对象会生成新的对象，不会修改被代理对象本身</li><li>proxy补兼容ie浏览器</li></ol><blockquote><p>vue 内部功能分为三大模块分别为 响应性reactivite 运行时runtime 和编译器compiler</p></blockquote><p>vue2 的响应性是根据es5的特性object.defineprorety进行实现 但是object.defineprorety只能监听指定对象指定属性的getter行为和setter行为，所以在这中情况下会出现 新增属性无法得到监听的问题而为了解决这一问题vue2提供vue.$set方法，但是这一方法是不合理的。而在vue3中引入了反射和代理的概念，所谓的反射就是reflect 代理就是proxy 我们利用proxy去代理一个普通对象得到一个proxy实例的代理对象。在vue3中这个过程通过reactive方法实现，但是proxy只能代理复杂数据类型所以在vue3中额外提供了ref方法用来 处理简单数据响应性。ref本质上并没有进行数据监听而是构建了refimpl类通过set和get标记了value函数以此来实现，所以ref必须要通过.value来进行触发之所以这样做是要调用value方法</p><p>所谓runtime大多数的时候指的是renderer渲染器 渲染器本质上是一个对象里面由三个方法组成 render hydrate createApp render处理渲染逻辑 hydrate处理服务端逻辑 createApp创建vue实例的方法 render函数在Vue3中为了保证宿主环境和渲染逻辑的分离，把所有的宿主环境相关逻辑进行抽离，通过接口形式进行传递，这样目的是为了解绑宿主环境和渲染逻辑保证vue3在非浏览器环境下依然可以渲染</p><p>编译器其实就是一个DSL，其目的就是把template编译成render函数，主要分为三大步骤 parse transform generate parse 把template转化为AST transform 把AST转化为javascript AST generate 把javascript AST转化为render函数</p></li></ul><h2 id="vue单双向绑定" tabindex="-1">Vue单双向绑定 <a class="header-anchor" href="#vue单双向绑定" aria-label="Permalink to &quot;Vue单双向绑定&quot;">​</a></h2><ul><li>双向绑定 v-model</li><li>单向绑定 v-bind</li></ul><h2 id="父子组件" tabindex="-1">父子组件 <a class="header-anchor" href="#父子组件" aria-label="Permalink to &quot;父子组件&quot;">​</a></h2><ul><li><p>生命周期顺序</p><ul><li>加载渲染过程</li></ul><blockquote><p>父 beforeCreate -＞ 父 created -&gt;父beforeount -&gt; 子 beforeCreate -&gt; 子created -&gt;子 beforeMount -&gt;子mounted -&gt;父 mounted</p></blockquote><ul><li>子组件更新过程</li></ul><blockquote><p>父beforeUpdate-子 beforeUpdate一&gt;子updated -&gt; 父updated</p></blockquote><ul><li>父组件更新过程</li></ul><blockquote><p>父 beforeUpdate-＞父 updated</p></blockquote><ul><li>销毀过程</li></ul><blockquote><p>父beforeDestroy --子 beforeDestroy-&gt;子destroyed -＞父 destroyed</p></blockquote></li><li><p>组件通讯</p><ul><li>父子组件传值</li><li>父绑定引用子组件(单向绑定/子组件通过props 绑定 不可以直接修改父组件值)</li><li>子组件直接引用父组件值 (this.$parent.data 可以直接修改父组件值)</li><li>依赖注入(provided/injected)</li><li>后代向父组件传值</li><li>使用emit提交数据使用methods方法(在mounted 和created无法使用emit 修改数据)</li><li>父组件直接拿子组件ref</li><li>平辈传值 eventBus</li></ul></li></ul><h2 id="v-if和v-for优先级" tabindex="-1">v-if和v-for优先级 <a class="header-anchor" href="#v-if和v-for优先级" aria-label="Permalink to &quot;v-if和v-for优先级&quot;">​</a></h2><blockquote><p>2.0版本 v-if小于v-for 3.0版本 v-if大于v-for</p></blockquote><h2 id="v-if和v-show区别" tabindex="-1">v-if和v-show区别 <a class="header-anchor" href="#v-if和v-show区别" aria-label="Permalink to &quot;v-if和v-show区别&quot;">​</a></h2><blockquote><p>都可以控制元茶的显示和隐藏</p></blockquote><ol><li>v-show时控制元素的display值来让元素显示和隐藏：v-if显示隐藏把DOM元素整个添加和删除</li><li>v-if有一个局部编译，卸载的过程，切换这 个过程中会适当的销毁和重建内部的事件监听和子组件： v-show只是简单的css切换</li><li>v-if才是真正的系件谊染： v-show人false交成true的时候不会勉发组件的声明周期，v-if会触发生命周期</li><li>v-if的切换效率比较低 v-show的效奉比较高</li></ol><h2 id="created-和mounted请求数据区别" tabindex="-1">created 和mounted请求数据区别 <a class="header-anchor" href="#created-和mounted请求数据区别" aria-label="Permalink to &quot;created 和mounted请求数据区别&quot;">​</a></h2><ul><li>created． 在道染前调用，通常先初始化属性，然后做渲染</li><li>mounted：在模板疸染完成后，一般都是初始化页面后，在对元索节点进行操作</li><li>在这里请求数据可 能会出现闪屏的问题</li></ul><blockquote><p>请求的数据对DOM有影响，那么使用created</p></blockquote><blockquote><p>清求的数据对DOM无关，可以放在mounted</p></blockquote><h2 id="vue2-data-为什么只能是函数不能是对象" tabindex="-1">vue2 data 为什么只能是函数不能是对象 <a class="header-anchor" href="#vue2-data-为什么只能是函数不能是对象" aria-label="Permalink to &quot;vue2 data 为什么只能是函数不能是对象&quot;">​</a></h2><pre><code>* 同一个组件的多个组件实例的 data 必须是不同的对象(内容初始数据可以相同)
* 如果是 data 是对象, 组件的多个实例共用一个 data 对象
* 如果是函数, 组件对象通过调用函数得到的一个新的 data 对象
</code></pre><h2 id="响应式数据与非响应式数据区别" tabindex="-1">响应式数据与非响应式数据区别 <a class="header-anchor" href="#响应式数据与非响应式数据区别" aria-label="Permalink to &quot;响应式数据与非响应式数据区别&quot;">​</a></h2><ul><li><p>非数组和非对象</p><ul><li>响应式: data / props / computed/ vuex 的 state 与 getters</li><li>非响应式: 仅仅存在于组件对象上的属性数据</li></ul><blockquote><p>给组件对象添加一个新属性: this.xxx = value</p></blockquote><blockquote><p>直接给一个响应式对象添加一个新属性: this.product.xxx = &#39;abc&#39; ==&gt; this.$set(this.product, &#39;xxx&#39;, 3)</p></blockquote></li><li><p>数组与对象</p><ul><li>对象: 通过 Object.defineProperty()添加 setter 方法来监视属性数据的改变 + 订阅-发布</li><li>数组: 重写更新数组元素的一系列方法 + 订阅-发布</li></ul></li></ul><h2 id="双向数据绑定原理" tabindex="-1">双向数据绑定原理 <a class="header-anchor" href="#双向数据绑定原理" aria-label="Permalink to &quot;双向数据绑定原理&quot;">​</a></h2><ol><li>new Vue()首先执行初始化，对data执行响应化处理，这个过程发生Observe中</li><li>同时对模板执行编译，找到其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在Compile中</li><li>同时定义⼀个更新函数和Watcher，将来对应数据变化时Watcher会调用更新函数</li><li>由于data的某个key在⼀个视图中可能出现多次，所以每个key都需要⼀个管家Dep来管理多个Watcher</li><li>将来data中数据⼀旦发生变化，会首先找到对应的Dep，通知所有Watcher执行更新函数</li></ol><h2 id="v-model-的本质" tabindex="-1">v-model 的本质 <a class="header-anchor" href="#v-model-的本质" aria-label="Permalink to &quot;v-model 的本质&quot;">​</a></h2><ul><li>将动态的 data 数据通过 value 属性传给 input 显示 ==&gt; data 到 view 的绑定</li><li>给 input 标签绑定 input 监听, 一旦输入改变读取最新的值保存到 data 对应的属性上==&gt; view 到 data 的绑定</li></ul><blockquote><p>双向数据绑定是在单向数据绑定(data--&gt;view)的基础, 加入 input 事件监听(view ==&gt; data)</p></blockquote><h2 id="mixin原理" tabindex="-1">mixin原理 <a class="header-anchor" href="#mixin原理" aria-label="Permalink to &quot;mixin原理&quot;">​</a></h2><blockquote><p>Vue中的mixin，提供了一种非常灵活的方式，来分发vue组件中的可复用功能，本质上就是一个js对象，他可以包含我们组件中任意功能选项data和methods等，我们只要将共有的功能以对象方式传入mixin选项中，mixin分为局部混入和全局混入</p></blockquote><h2 id="vue-keep-alive" tabindex="-1">Vue Keep-alive <a class="header-anchor" href="#vue-keep-alive" aria-label="Permalink to &quot;Vue Keep-alive&quot;">​</a></h2><blockquote><p>vue的一个内置组件，包裹组件的时候，会缓存不活跃的组件实例，并不足销毁他们</p></blockquote><blockquote><p>作用：把组件切换的状态保存在内存里，防止重复渲染DoM节点，诚少加教时间和性能消托，捉高用户体验</p></blockquote><h2 id="watch和computed区别" tabindex="-1">watch和computed区别 <a class="header-anchor" href="#watch和computed区别" aria-label="Permalink to &quot;watch和computed区别&quot;">​</a></h2><blockquote><p>computed 是计算结果可以修改通过getter和setter来设置</p></blockquote><blockquote><p>watch 监听数据变化 第一次监听使用handler和immediate 对象监听更改时无触发变化是时需要使用handler deep和immediate</p></blockquote><ul><li>data中已定义对象或者是props传值数据更新时才能进行重新计算 watch是监听数据变化执行某些操作</li><li>computed有缓存当发生变化时才能够输出结果watch监听有变化，再调用回掉函数</li><li>computed必须有return watch则不必须要</li><li>computed不能出现异步事物 watch可以进行异步操作</li></ul><h2 id="vuex-中的-mutation-可以执行异步操作吗" tabindex="-1">vuex 中的 mutation 可以执行异步操作吗 <a class="header-anchor" href="#vuex-中的-mutation-可以执行异步操作吗" aria-label="Permalink to &quot;vuex 中的 mutation 可以执行异步操作吗&quot;">​</a></h2><ul><li>可以 ==&gt; 异步更新数据后界面确实会自动更新</li><li>问题 ==&gt; vuex 的调用工具监视不到 mutation 中的异步更新, 工具记录还是更新前的数据(不对) 扩展: 工具如何记录数据变化? ==&gt; 每次 mutation 函数执行完后, 立即记录当前的数据==&gt; 在 mutation 中同步更新 state, 才能被记录到</li></ul><h2 id="created-和mounted请求数据区别-1" tabindex="-1">created 和mounted请求数据区别 <a class="header-anchor" href="#created-和mounted请求数据区别-1" aria-label="Permalink to &quot;created 和mounted请求数据区别&quot;">​</a></h2><blockquote><p>created． 在道染前调用，通常先初始化属性，然后做渲染</p></blockquote><blockquote><p>mounted：在模板疸染完成后，_般都是初始化页面后，在对元索节点进行操作 在这里请求数据可 能会出现闪屏的问题</p></blockquote><ul><li>请求的数据对DOM有影响，那么使用created</li><li>清求的数据对DOM无关，可以放在mounted</li></ul><h2 id="vue-router相关" tabindex="-1">vue-router相关 <a class="header-anchor" href="#vue-router相关" aria-label="Permalink to &quot;vue-router相关&quot;">​</a></h2><ul><li>路由懒加载: ===&gt; 预加载(vue 脚手架项目已经实现了 ==&gt; webpack)<code>() =&gt; import(&#39;./Home.vue&#39;)</code></li></ul><blockquote><p>组件单独打包, 开始不加载其打包文件, 第一次请求时才会加载 ==&gt; 加载更快, 提高用户体验</p></blockquote><ul><li>缓存路由组件</li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keep-alive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">router-view</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">keep-alive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><blockquote><p>路由离开时不销毁, 路由回来时不用重新创建 ==&gt; 利用缓存, 切换路由更快再利用上 prefetch/preload 实现预获取/加载, 用户体验更佳</p></blockquote><ul><li>动态添加路由 <code>router.addRoutes(routes)</code></li></ul><blockquote><p>在异步确定用户的权限路由后, 需要动态添加到路由器</p></blockquote><h2 id="路由hash和history区别" tabindex="-1">路由hash和history区别 <a class="header-anchor" href="#路由hash和history区别" aria-label="Permalink to &quot;路由hash和history区别&quot;">​</a></h2><ul><li>hash的路由地址上有#号，history模式没有</li><li>在做回车刷新的时候，hash模式会加载页面，history直接报错404</li><li>hash模式支持低版本浏览器，history不支持，因为是H5新增的API</li><li>hash不会重新加载页面，单项面应用必备</li><li>history有历史记录，HS新增 了 pushstate和replacestate去修改历史记果，并不会立刻发送请求</li><li>history两要后合配置</li></ul><h2 id="vue性能优化" tabindex="-1">vue性能优化 <a class="header-anchor" href="#vue性能优化" aria-label="Permalink to &quot;vue性能优化&quot;">​</a></h2><ol><li>编码优化 <ul><li>不要把所有数据都放在data中</li><li>v-for时给每个元素綁定事件用事件代理</li><li>v-for时不要同时使用v-if</li><li>keep-alive缓存组件</li><li>尽可能拆分组件，提高复用性、维护性</li><li>key值要保证唯一</li><li>合理使用路由懒加载，异步组件</li><li>数据持久化存储的使用尽量用防抖、节流优化</li><li>第三方插件的按需引入打包</li><li>大数组优化 <ul><li>冻结响应式数据</li><li>虚拟列表</li></ul></li><li>减少DOM层级</li><li>减少计算</li><li>事件和定时器销毁</li></ul></li><li>加载优化 <ul><li>按需加裁</li><li>内容懒加執</li><li>图片懒加執</li></ul></li><li>用户体验 <ul><li>骨架屏</li></ul></li><li>SE0优化 <ul><li>預演染</li><li>服务灣渲染ssr</li></ul></li><li>打包优化 <ul><li>CDN形式加教第三方棋块</li><li>线程打包</li><li>抽离公共文件</li></ul></li><li>缓存和压编 <ul><li>客户端级存、服务端饭存</li><li>服务淌Gzip压縮</li></ul></li></ol><h2 id="首屏优化加载" tabindex="-1">首屏优化加载 <a class="header-anchor" href="#首屏优化加载" aria-label="Permalink to &quot;首屏优化加载&quot;">​</a></h2><ul><li>使用路由懒加载</li><li>非首屏组件使用异步组件</li><li>首屏不中要的组件延迟加载</li><li>静态资源放在CDN上</li><li>减少首屏上jS、cSS等资源文件的大小</li><li>使用服务端渲染</li><li>尽量减少DOM的数量和层级</li><li>使用精灵图请求</li><li>做一些1oading</li><li>开启Gzip压缩</li><li>图片懒加载</li></ul>`,77),u=[o];function r(d,s,n,p,c,h){return e(),i("div",null,u)}const b=l(a,[["render",r]]);export{v as __pageData,b as default};
