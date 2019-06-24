# javascriptBridge 使用手册

## 安装

``` bash
npm install javascript-bridge
```

## 引用

``` js
import JsBridge from 'javascript-bridge'
Vue.prototype.$JsBridge = JsBridge
```

## 初始化

``` js
this.$JsBridge.first(function (message, responseCallback) {
    responseCallback()
 })
```

## 使用

- h5注册方法（'goTransact'）给webview 调用 data为传送数据
``` js
this.$JsBridge.callHandler('goTransact', data, (res) => { 
})
```
- wevview 调用 退出的方法（'disconnectWallet'）
``` js
this.$JsBridge.registerHandler('disconnectWallet', (res, callback) => {
    callback()
})
```
 <CGitalk/>
