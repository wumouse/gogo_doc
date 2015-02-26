检查签名
-------------

.. note:: 暂未使用

用于客户端API请求来源验证

相关类 : 服务名
^^^^^^^^^^^^^^^^^

Library\\Gogo\\Auth ：auth

使用方法
^^^^^^^^^

将下列代码添加到控制器的基类

.. code-block:: php

    <?php

        /**
         * 路由前进行签名检查
         *
         * @throws \Library\Gogo\AuthException
         */
        public function beforeExecuteRoute()
        {
            // 非index 控制器才进行检测。Index 这里用来处理错误等等
            if ($this->dispatcher->getControllerName() != 'index') {
                $this->auth->checkSign();
            }
        }

