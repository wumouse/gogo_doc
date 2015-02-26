{
    "sys_status": 1,
    "api_status": 1,
    "info": "",
    "data": {
        "address_list": [
            {
                "is_default": 1,
                "name": "李老师",
                "mobile": 18301770819,
                "address_id": 231,
                "city_id": 2,
                "area_id": 2,
                "area": "成都市 成华区",
                "address": "四川省成都市水碾河南区65号",
                "actions": [
                    {
                        "method": "GET",
                        "rel": "address_delete",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address2,delete"
                    },
                    {
                        "method": "GET",
                        "rel": "set_default",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address3,default"
                    },
                    {
                        "method": "POST",
                        "params": "consignee,tel,address,district,city,is_default,province,sign_building,best_time,zipcode",
                        "rel": "edit_address",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address/32"
                    }
                ]
            },
            {
                "is_default": 0,
                "name": "王二",
                "mobile": 18301770819,
                "address_id": 232,
                "city_id": 3,
                "area_id": 2,
                "area": "成都市 锦江区",
                "address": "四川省成都市水碾河南区65号",
                "actions": [
                    {
                        "method": "GET",
                        "rel": "address_delete",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address2,delete"
                    },
                    {
                        "method": "GET",
                        "rel": "set_default",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address3,default"
                    },
                    {
                        "method": "POST",
                        "params": "consignee,tel,address,district,city,is_default,province,sign_building,best_time,zipcode",
                        "rel": "edit_address",
                        "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address/32"
                    }
                ]
            }
        ],
        "actions": [
            {
                "method": "POST",
                "params": "consignee,tel,address,city,district,is_default,province,sign_building,best_time,zipcode",
                "rel": "create_address",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/address"
            }
        ],
        "areas": [
            {
                "id": 1,
                "name": "成都",
                "area": [
                    {
                        "id": 12,
                        "name": "区域一"
            },
            {
                        "id": 13,
                        "name": "区域二"
                    }
                ]
            },
            {
                "id": 2,
                "name": "北京",
                "area": [
                    {
                        "id": 12,
                        "name": "区域一"
                    },
                    {
                        "id": 13,
                        "name": "区域二"
                    }
                ]
            }
        ]
    }
}