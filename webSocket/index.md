## 协议规范

> 由于websocket协议的特性，既要考虑并发处理，也需要考虑前台端的报文对象序列化难易成度。我们使用基于json的序列化规范处理协议的底层通讯传输。

THEX系统目前主要使用二个Webscoket服务端分别为

* [订单sockete服务](./orderWebSocket.md#K线盘口基本信息)
* [K线 socket 服务](./kLineWebSocket.md#连接WebSocket)

以上服务多是以请求订阅的方式进行客户端与服务端进和数据的传输
