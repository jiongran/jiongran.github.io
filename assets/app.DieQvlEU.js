import{aA as o,aU as p,aV as u,aW as l,aX as c,aY as f,aZ as d,a_ as m,a$ as h,b0 as A,b1 as g,aP as P,l as _,aw as b,d as v,w,b2 as R,b3 as y,b4 as C,ag as E}from"./chunks/framework.CtlH_-Gv.js";import{R as T}from"./chunks/theme.BEO1X4V7.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),S=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=b();return v(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),y(),C(),s.setup&&s.setup(),()=>E(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=L(),a=V();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function V(){return h(S)}function L(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
