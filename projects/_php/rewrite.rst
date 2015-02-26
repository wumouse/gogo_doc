脚本URL重写
-------------

框架默认是将 REQUEST_URI 入口文件后面的部分重写到 ?_url 里的，即 $_GET['_url']。

我们在开发阶段不会每个项目指定一个域名，所以添加了这个重写

相关类
^^^^^^^^^

.. note::
该功能没有注入到 DI 中，直接加工 $_GET

Library\\Gogo\\Rewrite

说明
^^^^^^^^

该处理代码只会在服务器没有重写生成 $_GET['_url'] 后做处理，只是应对服务器未重写的

使用代码
^^^^^^^^^^

.. code-block:: php

    <?php
    // 在 bootstrap.php （设置服务）中
    Rewrite::init();
