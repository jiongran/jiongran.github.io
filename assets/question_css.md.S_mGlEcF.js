import{_ as l,c as a,o as i,a4 as e}from"./chunks/framework.Xe-pYyW9.js";const p=JSON.parse('{"title":"CSS 基础","description":"","frontmatter":{},"headers":[],"relativePath":"question/css.md","filePath":"question/css.md","lastUpdated":null}'),t={name:"question/css.md"},r=e(`<h1 id="css-基础" tabindex="-1">CSS 基础 <a class="header-anchor" href="#css-基础" aria-label="Permalink to &quot;CSS 基础&quot;">​</a></h1><h2 id="css盒模型" tabindex="-1">css盒模型 <a class="header-anchor" href="#css盒模型" aria-label="Permalink to &quot;css盒模型&quot;">​</a></h2><p>盒子模型由文本内容、内边距、边框和外边距组成</p><ul><li>标准盒子模型宽度等于文本内容加外边距加边框加内边距 box-sizing:content-box</li><li>IE盒子模型宽度等于文本内容加外边距 box-sizing:border-box</li></ul><h2 id="block-inline-inline-block区别" tabindex="-1">block inline inline-block区别 <a class="header-anchor" href="#block-inline-inline-block区别" aria-label="Permalink to &quot;block inline inline-block区别&quot;">​</a></h2><ul><li>block 独占一行 多个相同换行 设置宽度、高度、内外边距</li><li>inline 不会独占一行 多个相同并列直到父元素宽度不够换行 设置宽度和高度无效 水平方向内外边距会有距离垂直方向则没有距离</li><li>inline-block 将对象呈现为inline对象但是对象内容呈现为block 不会独占一行 可以设置宽度、高度和内外边距</li></ul><h2 id="都使用过哪些伪类" tabindex="-1">都使用过哪些伪类 <a class="header-anchor" href="#都使用过哪些伪类" aria-label="Permalink to &quot;都使用过哪些伪类&quot;">​</a></h2><ul><li>动态伪类 :link :active :focus :hover :visited</li><li>结构伪类 :first-child :last-child</li><li>否定伪类 :not</li><li>状态伪类 :enabled :disabled :checked</li></ul><h2 id="css选择器" tabindex="-1">css选择器 <a class="header-anchor" href="#css选择器" aria-label="Permalink to &quot;css选择器&quot;">​</a></h2><ul><li>选择器类型 id class 标签 通配符</li><li>选择器优先级 important &gt; 内联样式 &gt; id &gt; class &gt; 标签 &gt; 通配符</li></ul><h2 id="css样式继承" tabindex="-1">CSS样式继承 <a class="header-anchor" href="#css样式继承" aria-label="Permalink to &quot;CSS样式继承&quot;">​</a></h2><ul><li>文字样式例如font、font- family、 font-size、font-style、font- weight</li><li>文字修饰例如color text-indent text-align line-height word-space lettter-space</li><li>元素中的line-height为固定值时则直接继承,如果为数字则按照自己的字体大小计算,如果为百分比则按照父级大小计算。</li></ul><h2 id="flex布局" tabindex="-1">flex布局 <a class="header-anchor" href="#flex布局" aria-label="Permalink to &quot;flex布局&quot;">​</a></h2><ul><li>布局详细 flex容器中的子元素通过flex-grow，flex-shink,flex-basis属性可以随着父容器宽度大小自适应，也就是能够实现兼容不同分辨率屏幕</li><li>flex: 1 flex-grow，flex-shink,flex-basis 缩写</li><li>父元素flex布局 三个子元素flex: 0 0 auto 显示效果 都不显示</li></ul><h2 id="bfc-解决了什么问题以及怎么触发-bfc" tabindex="-1">BFC，解决了什么问题以及怎么触发 BFC <a class="header-anchor" href="#bfc-解决了什么问题以及怎么触发-bfc" aria-label="Permalink to &quot;BFC，解决了什么问题以及怎么触发 BFC&quot;">​</a></h2><p>BFC是一个独立的空间，父级元素添加overflow：hidden来解决问题。它可以解决如下问题</p><ul><li>解决margin塌陷问题</li><li>解决浮动问题 <ul><li>父级添加overflow</li><li>父级添加clearfix</li><li>父级跟随浮动</li></ul></li></ul><h2 id="水平居中的四种方法" tabindex="-1">水平居中的四种方法 <a class="header-anchor" href="#水平居中的四种方法" aria-label="Permalink to &quot;水平居中的四种方法&quot;">​</a></h2><ul><li>固定宽高 <ul><li>postion:absolute;left:50%;top:50%;margin-left:-150px;margin-top:-150px;</li><li>postion:absolute;left:0;top:0;left:0;bottom:0;margin:auto;</li></ul></li><li>固定宽度 <ul><li>display:table-cell；vertical-align:middle;margin:auto</li></ul></li><li>不固定宽高 <ul><li>postion:absolute;left:50%;top:50%;transform:translate(-50%,-50%)</li><li>父元素display:flex;justify-content:center;align-items:center;</li></ul></li></ul><h2 id="三栏布局" tabindex="-1">三栏布局 <a class="header-anchor" href="#三栏布局" aria-label="Permalink to &quot;三栏布局&quot;">​</a></h2><ul><li>flex</li><li>float</li><li>postion</li><li>table-cell</li></ul><h2 id="隐藏元素的方法" tabindex="-1">隐藏元素的方法 <a class="header-anchor" href="#隐藏元素的方法" aria-label="Permalink to &quot;隐藏元素的方法&quot;">​</a></h2><ul><li>display:none 元素在页面上消失不占据空间</li><li>opacity:0 设置元素透明度 元素不可见 占据位置空间</li><li>visibility:hidden 让元素消失 占据元素位置</li></ul><h2 id="rem、em和px的区别" tabindex="-1">REM、EM和PX的区别 <a class="header-anchor" href="#rem、em和px的区别" aria-label="Permalink to &quot;REM、EM和PX的区别&quot;">​</a></h2><ul><li>PX 绝对单位长度</li><li>REM相对单位根据根节点的font size值设置</li><li>EM根据父元素的放得下只设置</li></ul><h2 id="rgb与rgba的区别" tabindex="-1">rgb与rgba的区别 <a class="header-anchor" href="#rgb与rgba的区别" aria-label="Permalink to &quot;rgb与rgba的区别&quot;">​</a></h2><pre><code>rgb和rgba都代表颜色，A代表alpha透明度(0-1)之间显示
</code></pre><h2 id="static-relative-absolute-fixed-sticky区别" tabindex="-1">static relative absolute fixed sticky区别 <a class="header-anchor" href="#static-relative-absolute-fixed-sticky区别" aria-label="Permalink to &quot;static relative absolute fixed sticky区别&quot;">​</a></h2><pre><code>- static 默认定位 从上到下 从左到右
- relative 相对定位 标准流中位置进行偏移 标准所占空间保留
- absolute 绝对定位 移出标准流 后面元素占挤空间 若该元素所有父级设置position/ transform就靠近改父级偏移否则靠近浏览器窗口偏移
- fixed 固定定位 以浏览器窗口位置偏移
- sticky 粘性定位 元素固定在距离浏览器一定位时固定在此处否则在正常文档流中
</code></pre><h2 id="优雅降级与渐进增强" tabindex="-1">优雅降级与渐进增强 <a class="header-anchor" href="#优雅降级与渐进增强" aria-label="Permalink to &quot;优雅降级与渐进增强&quot;">​</a></h2><pre><code>- 渐进增强 保证最基本的功能
- 优雅降级 构建完整的功能再利用浏览器进行兼容
- 渐进增强是向上兼容而优雅降级是向下兼容一般采用向下兼容
</code></pre><h1 id="css面试" tabindex="-1">CSS面试 <a class="header-anchor" href="#css面试" aria-label="Permalink to &quot;CSS面试&quot;">​</a></h1><h2 id="什么是reflow-回流" tabindex="-1">什么是reflow(回流) <a class="header-anchor" href="#什么是reflow-回流" aria-label="Permalink to &quot;什么是reflow(回流)&quot;">​</a></h2><p>reflow 的本质就是重新计算 layout树。 当进行了会影响布局树的操作后，需要重新计算布局树，会引发 layout。 为了避免连续的多次操作导致布局树反复计算，浏觉器会合并这些操作，当JS代码全部完成后再进行统一计算。所以，改动属性造成的 reflow 是异步完成的。 也同样因为如此，当JS获取布局属性时，就可能造成无法获取到最新的布局信息。 浏览器在反复权衡下，最终决定获取属性立即 reflow</p><h2 id="什么是replain-重绘" tabindex="-1">什么是replain(重绘) <a class="header-anchor" href="#什么是replain-重绘" aria-label="Permalink to &quot;什么是replain(重绘)&quot;">​</a></h2><p>repaint 的本质就是重新根据分层信息计算了绘制指令。 当改动了可见样式后，就需要重新计算，会引发 repaint。 由于元素的布局信息也属于可见样式，所以 reflow 一定会引起 repaint.</p><h2 id="为什么transform效率高" tabindex="-1">为什么transform效率高 <a class="header-anchor" href="#为什么transform效率高" aria-label="Permalink to &quot;为什么transform效率高&quot;">​</a></h2><p>因为 transform 既不会影响布局也不会影响绘制指令，它影响的只是渲染流程的最后一个「draw」阶段由于 draw 阶段在合成线程中，所以 transform 的变化几乎不会影响渲染主线程。反之，渲染主线程无论如何忙碌，也不会影响 transform 的变化</p><h2 id="响应式设计" tabindex="-1">响应式设计 <a class="header-anchor" href="#响应式设计" aria-label="Permalink to &quot;响应式设计&quot;">​</a></h2><ul><li>媒体查询</li><li>百分比</li><li>vw/vh</li><li>rem</li></ul><h2 id="css性能优化" tabindex="-1">CSS性能优化 <a class="header-anchor" href="#css性能优化" aria-label="Permalink to &quot;CSS性能优化&quot;">​</a></h2><ul><li>内联首屏关键CSS</li><li>异步加载CSS</li><li>资源压缩</li><li>合理使用选择器</li><li>减少使用昂贵的属性</li><li>不要使用@import</li></ul>`,42),o=[r];function n(s,c,h,d,u,f){return i(),a("div",null,o)}const x=l(t,[["render",n]]);export{p as __pageData,x as default};