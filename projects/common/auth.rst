认证
------

说明
^^^^^^

#每个接口都必须发送认证，认证包括请求认证和登录认证。未登录之前需要认证获得 Request Token ，登录需要 认证后的 Token。
#每个接口都必须签名

请求认证
^^^^^^^^^

#. 进入设备，:doc:`获取 Request Token <../service/api/request_token>`
#. 需要 :doc:`登录 <../service/api/sign_in>` 时以 Request Token 重新请求新的登录Token
#. 请求时以请求头 Token :FDSFASDFDAS 的样式发送给服务端

请求签名
^^^^^^^^^

#. 服务端程序员相关使用代码说明：:doc:`检查签名 <../_php/check_sign>`

#. 签名方式: token + time + secret 顺序连接并进行 md5加密。token 是请求token, time 的格式是 Unix 时间戳(从 1970年到现在的秒数), secret 不在文档说明

.. code-block:: php

    <?php
    // PHP的加密
    $token = $this->auth->getToken();// B3TJLE8JHABNTHQW
    $secret = 'abc';
    $time = $_SERVER['REQUEST_TIME'];// 1418795910
    $result = md5($token . $time . $secret);

#. 请求头示例

.. code-block:: bash

    Token: B3TJLE8JHABNTHQW
    X-Device-Info: {"site":1,"lng":130.545644,"lat":29.001,"network":3,"time":"1418795910","version":"1.0"}
    Accept: application/json
    Authorization: 75429d136f65d2d6168b9b6c5f6ec951

Authorization 是签名数据

其他
^^^^^^^^^^

:doc:`device_info`
