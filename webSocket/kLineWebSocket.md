# K线WebSocket 订阅与返回事件说明

说明K线因不是自己开发所以根据插件的规则来获取相应的数据，其它我们没有用到的属性在这里我不做说明，因为我也不知道其中的用处，具体可以看官方文档

## K线盘口基本信息

请求报文

``` js
{
    "backend": "0",
    "source": "0",
    "symbolpk": "7-4",//当前K线所有的数据是哪个盘口
    "trading_times": "2018-05-26",//插件自动生成
    "req_id": 1//插件自动生成
}
```

响应报文

``` json
{
    "echo_req": {
        "backend": "0",
        "source": "0",
        "symbolpk": "7-4",//响应盘口
        "trading_times": "2018-05-26",
        "req_id": 1
    },
    "msg_type": "2018-05-26",
    "req_id": 1,
    "trading_times": {
        "markets": [
            {
                "name": "THEX",//当然系统名称
                "submarkets": [
                    {
                        "name": "LTC",//主币名称
                        "symbols": [
                            {
                                "events": [],
                                "name": "DKC/LTC",//盘口名称
                                "symbol": "7-4",//盘口编号
                                "times": {
                                    "close": [
                                        "23:59:59"//关盘时间这里可以没有用到
                                    ],
                                    "open": [
                                        "23:59:59"//开盘时间这里没有用到
                                    ]
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

## K线数据（走执图）

请求报文

``` js
{
    "ticks_history": "7-4",//要获取哪个盘口的数据
    "end": "latest",
    "style": "candles",
    "start": 1432801620,//从哪个起始时间获取数据到当时间的数据
    "count": 5000,//总共获取多少条
    "granularity": 86400,//要日K线，还是分钟K线 以秒为单位
    "adjust_start_time": 1,
    "req_id": 2
}
```

响应报文

``` json
{
    "candles": [
        {
            "close": 0.6053,//关
            "epoch": 1526515200,//时间
            "high": 2,//高
            "low": 0.0382,//低
            "open": 1,//开
            "volume": 159.4596//成交量
        },
        {
            "close": 0.3932,
            "epoch": 1527120000,
            "high": 2,
            "low": 0.0001,
            "open": 0.6053,
            "volume": 10959.0317
        },
        {
            "close": 0.4796,
            "epoch": 1527292800,
            "high": 0.4796,
            "low": 0.4796,
            "open": 0.4796,
            "volume": 0.1
        }
    ],
    "echo_req": {
        "ticks_history": "7-4",//哪个盘口
        "end": "latest",
        "style": "candles",
        "start": 1432801620,
        "count": 5000,//获取数量的总数量
        "granularity": 86400,//是日线，还是1分钟以秒为单位
        "adjust_start_time": 1,
        "req_id": 2
    },
    "msg_type": "candles",
    "req_id": 2
}
```

## K线最新价格

请求报文 这个只订阅一次

``` js
{
    "ticks_history": "7-4",//盘口
    "end": "latest",
    "count": 1,
    "style": "candles",
    "granularity": 86400,//日线，还是1分种以秒为单
    "subscribe": 1
}
```

响应报文

``` json
{
    "echo_req": {
        "count": 1,
        "end": "latest",
        "granularity": 86400,//日线，还是1分钟以秒为单位
        "style": "candles",
        "subscribe": 1,
        "ticks_history": "7-4"//盘口
    },
    "msg_type": "ohlc",
    "ohlc": {
        "close": "0.4796",//收盘价
        "volume": "0.1",//成交量
        "epoch": 1527292800,//成交时间
        "granularity": 86400,//日线，还是分钟以秒为单位
        "high": "0.4796",//高
        "id": "b843fef7-25b4-41d2-a3bd-d13fe82170f5",
        "low": "0.4796",//低
        "open": "0.4796",//开
        "open_time": 1527292800,成交时间
        "symbol": "7-4"//盘口
    }
}
```


## 新一代k线数据请求

请求报文

``` js
{
	"step": "D",
	"symbol": "0x4488ca14bafd2d70f27e7bb8d7f443453b7354b3",
	"param": "fullperiod",
	"from": 1512976941,
	"to": 1544081001
}
```

响应报文

``` json
{
	"t": [1543968000, 1544054400],
	"c": [1.9, 0.7],
	"o": [1.0, 1.75],
	"h": [1.9, 1.78],
	"l": [1.0, 0.7],
	"v": [171.2, 167.8],
	"s": "ok",
	"step": "D",
	"type": null,
	"param": "fullperiod",
	"symbol": "0x4488ca14bafd2d70f27e7bb8d7f443453b7354b3",
	"req": "{\"step\":\"D\",\"symbol\":\"0x4488ca14bafd2d70f27e7bb8d7f443453b7354b3\",\"param\":\"fullperiod\",\"from\":1512976941,\"to\":1544081001}"
}
```
 <CGitalk/>
