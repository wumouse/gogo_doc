{
    "sys_status": 1,
    "api_status": 1,
    "info": "",
    "data": {
        "page_title": "商品详情",
        "collection_status": 1,
        "actions": [
            {
                "method": "POST",
                "rel": "collect_goods",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/collection;goods,3"
            },
            {
                "method": "POST",
                "params": "ids",
                "rel": "delete_collection",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/user/collection;delete_goods,3"
            },
            {
                "method": "GET",
                "rel": "redirect.url",
                "href": "http://service.gogotown.net:6180/trunk/bangnigo/trunk/public/api.php/goods/3190;content"
            }
        ],
        "share": {
            "title": "分享能得奖",
            "desc": "我是分享内容",
            "url": "http://service.gogotown.net:6180/trunk/bangnigo/branches/definition/public/api.php/goods/1;content",
            "picUrl": "http://upaiyun.gogo.com.cn/test.jpg"
        }
    }
}