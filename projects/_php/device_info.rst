设备信息传输
---------------

设备信息传输分两个地方：

* 一个是在首次使用时调用 getToken 传入的设备相关信息
* 一个是在每次请求时通过 X-Device-Info 请求报头发送上来的即时信息

这里主要说的是第2个

相关类 : 服务名
^^^^^^^^^^^^^^^^^

Library\\Gogo\\DeviceInfo : deviceInfo

使用条件
^^^^^^^^^^

将该类初始化并注入到Di，注意构造函数中第二个参数为指定使用报头值是用 JSON还是Query的解析

具体见 [svn]/service/trunk/_config/bootstrap.php

使用方法
^^^^^^^^^^^

获取相关属性（该类使用魔术方法获取属性）:

.. code-block:: php

    <?php

    // 控制器，Phalcon\Mvc\User空间下的类的子类，视图 中
    echo $this->deviceInfo->longitude;

    // 打印所有信息
    var_dump($this->deviceInfo->getInfo());

相关文档
^^^^^^^^^^

:doc:`phalcon_di`


