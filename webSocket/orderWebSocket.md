
# 订单WebSocket服务订阅与返回事件数据说明

## 连接WebSocket

使用JS连接WebSocket服务如下

``` js
   var host=”ws//127.0.0.1:8080”
   var socket=new WebSocket(host);
```

连接成功响应报文

``` json
   {
    "success": true,//连接状态
    "type": "connection",//响应类型
    "id": "7d0b6ca8-d022-4423-99fd-aa8863c7b577"//连接ID
    }
```

## 盘口最新价格

请求报文

``` js
{
    "method": "pst_bicitem",//订阅盘口基本信息
    "data": "7-3,7-4,10-7,11-7,12-7,9-7,17-9"//要订阅哪些盘口（主币-副币）
}
```

响应报文

``` json
{
    "type": "event",
    "event": "pst_bicitem",
    "data": {
         //盘口为KEY
        "7-3": [
            0,//开
            0,//高
            0,//低
            0,//最新
            0,//成交量
        ],
        "17-9": [
            0,
            0,
            0,
            0,
            0
        ]
    }
}
```

## 盘口基本信息

请求报文
``` js
{
    "method": "pst_basic",//基本信息事件
    "data": "7-4",//订阅那个盘口
    "userid": "1"//用户的USERID如果没有登录可以为0
}   
```

响应报文

``` json
{
    "type": "event",
    "event": "pst_basic",//响应事件
    "data": {
        "7-4": [
            0.6053,//开盘价
            2,//最高价
            0.0001,//最低价
            0.3932,//最新价
            10959.0317//日成交量
        ]
    }
}
```

## 盘口档区

请求报文：因为当连接的时候已订阅了盘口（pst_basic事件所有不用再次请求任何报文）

响应报文

``` json
{
    "type": "event",
    "event": "pst_queue_s",//档区事件
    "data": {
        "0": [//0是买的
            [
                0.1404,//价格
                0.4625//数量
            ],
            [
                0.3932,
                0.5004
            ]
        ],
        "1": [//1是卖的
            [
                0.4796,//价格
                0.3804//数量
            ],
            [
                0.7609,
                0.2751
            ]
        ]
    }
}
```

##	实时交易数据(pst_trade_s)

请求报文：因为当连接的时候已订阅了盘口（pst_basic事件所有不用再次请求任何报文）

响应报文：只拿 最近的100条交易数据

``` json
{
    "type": "result",
    "event": "pst_trade_s",
    "data": [
        [
            1527154922,//UTC时间
            1,//数据类型：1是卖0是买
            0.7471,//价格
            0.2635//成交数量
        ],
        [
            1527154923,
            0,
            0.5402,
            0.0157
        ],
        [
            1527154923,
            0,
            0.7476,
            0.0465
        ]
    ]
}
```

## 用户余额

说明：只有在用户的订单成交的时候如果该用户在线则推送数据

请求报文 因为当连接的时候已订阅了盘口（pst_basic事件所有不用再次请求任何报文）

响应报文

``` json
{
    "type": "event",
    "event": "user_pst_wallet",//用户余额事件
    "data": {
        "4": [//4表示是币种的ID
            9644.46289828,//用户的总余额
            387.02494842//冻结余额
        ],
        "7": [//7表示币种的ID，因为一个盘口有2个币组成以这数据为列（7-4）盘口
            9544.127656,
            4074.85083745
        ]
    }
}
```

## 用户订单

说明：只有在用户的订单成交的时候如果该用户在线则推送数据

请求报文 因为当连接的时候已订阅了盘口（pst_basic事件所有不用再次请求任何报文）

响应报文

``` json
{
    "type": "event",
    "event": "user_pst_entrust_list",//订单成交事件
    "data": [
        40863,//订单ID
        1,//订单型号1卖0买
        0.7609,//下单价格
        0.8748,//下单数据
        0.5997,//成交数据
        0,//状态0（未成交/部分成功），1完全成交
        1527154911//下单时间UTC
        0.2313，//成交总金额--------------------新增
        0.1 //如果是买单的话，此值为需要补充的差价。例如，下单加2元，成交价1元，一般会多扣了。
    ]
}
```

## 其它分析说明
<picture>
  <source srcset="/img.png" media="(min-width: 719px)">
  <img class="line-numbers-desktop-snap" alt="Image">
</picture>

<style>
  @media screen and (min-width:  719px) {
    .line-numbers-mobile-snap {
       display: none;
    }
  }
  @media screen and (max-width:  719px) {
    .line-numbers-desktop-snap {
       display: none;
    }
    .line-numbers-mobile-snap {
      max-width: none!important;
      margin: 0 -1.5rem;
      width: 100vw;
    }
  }
</style>

*编号1：百分比算法=本身数量/取卖的最大的数量*100%

*编号2：累计=当位置的数量+下级位置的数量总各 (如：当位置位在3档那么。累计=1+2+3)

## 增加撤销单事件推送

说明 只有在用户的订单成交的时候如果该用户在线则推送数据

请求报文 因为当连接的时候已订阅了盘口（pst_basic事件所有不用再次请求任何报文）

响应报文
``` json
{
	"type": "event",
	"event": "revertorder", //订单成交事件
	"id": "1", //订单编号
	“success”: true, //撤销成功
	“content”: ”执行结果信息”, //撤销成功
}
```

## 增加关闭Qrcode事件

下委托单或是撤销委托单成功后，关闭pc端二维码窗体

请求报文

``` js
{
	"sub": "closeqrcode",
	"address": "钱包地址"
}
```

响应报文

``` json
{
    "type": "event",
    "event": "close_qrcode_order_interface",
    "data": []
}
```

## 增加关闭推送最新订单和余额的事件

``` csharp
    /// <summary>
    /// 前端未成交数据获取确认事件
    /// </summary>
    public class LastUnsettleOrderReceiveComfirmRequestInfo
    {
        /// <summary>
        /// 盘口id
        /// </summary>
        public string HandicapId { get; set; }

        /// <summary>
        /// 事件类型
        /// wallet,order 
        /// enum ComfirmEventType
        /// </summary>
        public string EventType { get; set; }

        /// <summary>
        /// 钱包地址
        /// </summary>
        public string WalletId { get; set; }
    }
```
 <CGitalk/>
