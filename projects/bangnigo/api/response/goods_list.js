{
    "sys_status": 1,
    "api_status": 1,
    "info": "",
    "data": {
        "list": [
            {
                "id": 1,
                "picture": {
                    "src": "http://upaiyun.gogo.com.cn/test.jpg"
                },
                "name": "商品名1",
                "price": 28,
                "praise_percent": "80%好评",
                "action": {
                    "method": "GET",
                    "rel": "redirect.goods",
                    "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/refactor/detail"
                }
            }
        ],
        "filter_sorting": {
            "filter": [
                {
                    "name": "全部商超",
                    "value": "0",
                    "param": "market_id"
                },
                {
                    "name": "建设路-伊藤洋华堂",
                    "value": "1",
                    "param": "market_id"
                },
                {
                    "name": "建设路沃尔玛",
                    "value": "2",
                    "param": "market_id"
                }
            ],
            "sort": [
                {
                    "name": "综合排序",
                    "value": "",
                    "param": "_sort"
                },
                {
                    "name": "价格最高",
                    "value": "-price",
                    "param": "_sort"
                },
                {
                    "name": "价格最低",
                    "value": "price",
                    "param": "_sort"
                },
                {
                    "name": "销量最好",
                    "value": "-sale_volumes",
                    "param": "_sort"
                }
            ]
        },
        "actions": [
            {
                "method": "GET",
                "rel": "goods_list",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods"
            },
            {
                "method": "GET",
                "rel": "next",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods?page=2"
            },
            {
                "method": "GET",
                "rel": "prev",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods?page=1"
            }
        ]
    }
}