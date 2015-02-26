{
    "sys_status": 1,
    "api_status": 1,
    "info": "",
    "data": {
        "id": 1,
        "status": 1,
        "order_no": 75595465621,
        "payed_amount": 25,
        "total_amount": 30.9,
        "preferential_amount": 2.9,
        "freight_amount": 3,
        "datetime": "2014-12-13 15:25:56",
        "payment_method": 1,
        "payment_method_description": "在线支付",
        "distribution_date": "2014-05-20",
        "distribution_time": "14:20",
        "goods": [
            {
                "id": 2,
                "quality": "礼盒装",
                "amount": 15,
                "count": 2,
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
            },
            {
                "id": 2,
                "quality": "礼盒装",
                "amount": 15,
                "count": 2,
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
        ],
        "actions": [
            {
                "method": "POST",
                "params": "score,content,pictures",
                "rel": "create_goods_comment",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods/comment"
            },
            {
                "method": "GET",
                "rel": "delete_order",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order/1;delete"
            },
            {
                "method": "GET",
                "rel": "buy_again",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/cart;order_to_cart,1"
            },
            {
                "method": "GET",
                "rel": "order_goods_list",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order/1,goods"
            },
            {
                "method": "POST",
                "rel": "cancel_order",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order/transaction/1;cancel"
            }
        ],
        "recipient": {
            "name": "白老师",
            "mobile": "13880888888 ",
            "address": "四川省成都市张家店"
        }
    }
}