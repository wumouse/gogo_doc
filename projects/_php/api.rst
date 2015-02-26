项目间HTTP接口调用
------------------

相关类 : 服务名
^^^^^^^^^^^^^^^^^

Library\\Gogo\\Api : api

相关配置
^^^^^^^^^^^

项目框架中:

#. 需要注入 api 到 DI :doc:`phalcon_di`
#. 新加项目需要更改 Api 类，添加对应的常量
#. 新加项目需要在 baseUris 里添加项目的请求入口
#. 新加项目后，该项目中应该添加下面说到的 平台接收篇相关代码
#. 保证配置中的 baseUris 是正确的请求地址并可用

使用示例
^^^^^^^^^^

1. 调用篇，即项目中的调用

.. code-block:: php

    <?php
    /**
     * API示例，下面假定服务名就叫 api
     */

    use Library\Gogo\Api;

    /** @var Api $api */
    $api = $di->get('api');
    // 参数说明：
    // 第一个参数表示回调，跟 url 中一样，与服务的控制名和操作名一样，不带后缀
    // 第二个参数是查询字符数组
    // 第三个为服务器标识，请使用 Api::SERVER_* 常量

    $result = $api->get(['imController', 'imAction'], ['param1' => 'imGetParams'], $api::SERVER_MANICURE);
    $result = $api->get('imController/imAction', ['param1' => 'imGetParams']);// 第3个参数默认为服务平台
    $result = $api->get('imController,imAction', ['param1' => 'imGetParams']);// 第3个参数默认为服务平台

2 . 平台接收篇（项目接收请求的方法）：

.. code-block:: php

    <?php
    // 首先定义一个 pathinfo 对应是 /api/entry 的控制器，ApiController::entryAction
    // 在控制器中执行如下代码：
    $this->api->handle();// 即可

