{
    "sys_status": 1,
    "api_status": 1,
    "info": "",
    "data": {
        "menu": [
            {
                "method": "GET",
                "rel": "home_page",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/home"
            },
            {
                "method": "GET",
                "rel": "goods_category",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods/category"
            },
            {
                "method": "POST",
                "params": "content,contact_info",
                "rel": "cart",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/refactor/cart"
            },
            {
                "method": "GET",
                "rel": "my_home_page",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/home"
            }
        ],
        "actions": [
            {
                "method": "GET",
                "rel": "city_list",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/city"
            },
            {
                "method": "POST",
                "params": "DEVICE_INFO",
                "rel": "service/request_token",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/Bangnigo/getToken"
            },
            {
                "method": "POST",
                "params": "mobile,password",
                "rel": "service/sign_in",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/Bangnigo/authenticate"
            },
            {
                "method": "POST",
                "params": "mobile,user_name,pwd,email,sex,head_img,nickname,source",
                "rel": "service/sign_up",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/Bangnigo/register"
            },
            {
                "method": "POST",
                "rel": "service/sign_out",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/Bangnigo/loginout"
            },
            {
                "method": "GET",
                "rel": "service/captcha",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/Bangnigo/verifyPhone"
            },
            {
                "method": "POST",
                "params": "mobile,code",
                "rel": "service/change_mobile",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/Bangnigo/changemobile"
            },
            {
                "method": "POST",
                "params": "mobile,newPwd",
                "rel": "service/forgot_password",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/bangnigo/findPwd"
            },
            {
                "method": "GET",
                "rel": "service/my_message",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/std_message/list?user_id=26035&app_type=8"
            },
            {
                "method": "GET",
                "rel": "goods_list",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods"
            },
            {
                "method": "GET",
                "rel": "update",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/update"
            },
            {
                "method": "GET",
                "rel": "user_agreement",
                "href": "http://www.baidu.com"
            },
            {
                "method": "POST",
                "rel": "service/picture_upload",
                "href": "http://service.gogotown.net:6180/trunk/gogocenter/public/index.php/std_picture/upload"
            },
            {
                "method": "GET",
                "rel": "hot_word_searched",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/search;hot_word"
            },
            {
                "method": "GET",
                "rel": "check_order",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/refactor/settlement"
            }
        ],
        "ios_switch_info": {
            "qq_login": 0,
            "weixin_login": 1,
            "weixin_pay": 1,
            "weibo_login": 0,
            "union_pay": 0,
            "alipay": 1
        },
        "android_switch_info": {
            "qq_login": 0,
            "weixin_login": 1,
            "weixin_pay": 1,
            "weibo_login": 0,
            "union_pay": 0,
            "alipay": 1
        }
    }
}