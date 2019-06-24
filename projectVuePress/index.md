# 前台项目配置

## 项目地址

[项目地址](http://192.168.1.129:3000/lijin/projectVuePress.git)

## 项目发版分支

此项目发版默认为master分支，不排除后续添加其他发版分支

## 全局安装/运行/打包命令

本项目之前`vuepress`为全局安装并且为`0.X`版本，所有项目包内未引用。命令如下

``` bash
# 安装
npm install -g vuepress@0.14.11
# 运行
npm run docs:dev
# 打包
npm run docs:build
``` 

现在项目为` 1.X`版本,所需配置文件请查看`package.json`.命令如下

``` bash
# 安装
npm install -g vuepress@1.0.0-alpha.31
# 运行
npm run docs:dev
# 打包
npm run docs:build
``` 

### 参考资料

1. [VuePress 0.X](https://vuepress.vuejs.org/zh)

2. [VuePress 1.X](https://v1.vuepress.vuejs.org/zh)

3. [一步步搭建 VuePress](https://segmentfault.com/a/1190000018711587)

::: warning 注意
请确保你的 Node.js 版本 >= 8。
:::

 <CGitalk/>
