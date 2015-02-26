{
    "sys_status": 1,
    "api_status": 1,
    "info": "",
    "data": {
        "address": {
                "name": "王老师",
                "mobile": 18301770819,
                "address_id": 231,
                "area_id": 2,
                "address": "四川省成都市水碾河南区65号"
            },
        "dates": [
            {
                "date": "2014-12-18(周四)",
                "day_value": 1,
                "time": [
                    {
                        "times": "9:00-16:00",
                        "time_value": 1
                    },
                    {
                        "times": "15:00-19:00",
                        "time_value": 2
                    },
                    {
                        "times": "19:00-22:00",
                        "time_value": 3
                    }
                ]
            },
            {
                "date": "2014-12-19(周五)",
                "day_value": 2,
                "time": [
                    {
                        "times": "9:00-16:00",
                        "time_value": 1
                    },
                    {
                        "times": "15:00-19:00",
                        "time_value": 2
                    },
                    {
                        "times": "19:00-22:00",
                        "time_value": 3
                    }
                ]
            },
            {
                "date": "2014-12-19(周五)",
                "day_value": 3,
                "time": [
                    {
                        "times": "9:00-16:00",
                        "time_value": 1
                    },
                    {
                        "times": "15:00-19:00",
                        "time_value": 2
                    },
                    {
                        "times": "19:00-22:00",
                        "time_value": 3
                    }
                ]
            }
        ],
        "ship": [
            {
                "title": "市内配送",
                "description": "￥12.00",
                "value": 1,
                "ship_price": 12
            },
            {
                "title": "上门自提",
                "description": "免费",
                "value": 2,
                "ship_price": 12
            }
        ],
        "pay": [
            {
                "title": "货到付款",
                "value": 1
            },
            {
                "title": "银联支付",
                "value": 2
            },
            {
                "title": "支付宝",
                "value": 3
            }
        ],
        "coupon": {
            "amount": 0,
            "info": "优惠信息"
        },
        "bag": {
            "amount": 0.2,
            "name": "是否需要购物袋"
        },
        "actions": [
            {
                "method": "POST",
                "params": "goods,pay_type,address_id,ship_type,ship_time,remark,is_bag",
                "rel": "pay_info",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/order;pay_info"
            },
            {
            "method": "GET",
                "rel": "address_list",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address;manage_address"
            },
            {
                "method": "POST",
                "params": "consignee,tel,addreess,zipcode,province,city,district,sign_building,best_time,is_default",
                "rel": "create_address",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address"
        }
        ]
    }
}