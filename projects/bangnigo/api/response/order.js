{
    "sys_status": 1,
    "api_status": 1,
    "info": "",
    "data": {
        "actions": [
            {
                "method": "GET",
                "rel": "next",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order?page=2"
            },
            {
                "method": "GET",
                "rel": "prev",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order?page=0"
            }
        ],
        "list": [
            {
                "id": 1,
                "order_no": 75595465621,
                "status": 1,
                "payed_amount": 40,
                "actions": [
                    {
                        "method": "POST",
                        "rel": "service/pay",
                        "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/pay/index?paytype=1&orderno=1"
                    },
                    {
                        "method": "GET",
                        "rel": "order_detail",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order/1"
                    },
                    {
                        "method": "GET",
                        "rel": "delete_order",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order/1;delete"
                    },
                    {
                        "method": "GET",
                        "rel": "cancel_order",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order/1;cancel"
                    },
                    {
                        "method": "POST",
                        "params": "content,contact_info",
                        "rel": "service/cart",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/refactor/cart"
                    }
                ],
                "goods": [
                    {
                        "id": 2,
                        "quality": "礼盒装",
                        "amount": 10,
                        "count": 1,
                        "price": 12.5,
                        "name": "什么毛重哟13斤",
                        "picture": {
                            "src": "http://upaiyun.gogo.com.cn/test.jpg"
                        },
                        "action": {
                            "method": "GET",
                            "rel": "redirect.goods",
                            "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods/1"
                        }
                    }
                ]
            }
        ]
    }
}