PHPRPC
------

RPC (Remote Procedure Call Protocol) 是远程过程调用协议，我们项目中目前使用 PHPRPC

由JAVA端提供服务，PHP读取服务

相关类库 : 服务名
^^^^^^^^^^^^^^^^^

`PHPRPC_Client`_ : rpc

.. _PHPRPC_Client: http://192.168.0.61:88/svn/www_test/service/trunk/library/PHPRPC/phprpc_client.php

JAVA的服务
^^^^^^^^^^

文档SVN: `<http://192.168.0.61:88/svn/www_test/gogo_java/doc/接口文档/java公共平台接口文档.docx>`_

PHP调用方式
^^^^^^^^^^^^

.. code-block:: php

    <?php

    // 该参数JSON参见JAVA组文档
    $params = '{"loginKey":"hezhoujun","password":"123456","token":"007TDEQM3G7CJU3L","loginType":"username","loginIp":"192.168.0.155"}';

    // user 为服务名，对应 JAVA组 文档中地址的中 /public/phprpc/{这里}.phprpc
    // login JAVA组文档中说的 `调用方法名`
    $jsonResult = $this->getDI()->get('rpc', ['user'])->login($params);

    // 响应结果是 JSON
    $result = json_decode($jsonResult, true);

    // 返回结果参见 JAVA组的文档
    if ($result['public_status'] == 100) {
        echo '成功';
        var_dump($result['data']);
    } else {
        echo $result['info'];
    }


