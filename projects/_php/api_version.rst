API版本信息
-------------

APP请求服务器API接口的版本信息

* APP请求新版本新的接口时,在http请求的header信息的X-Device-Info中添加api_version信息


相关类
^^^^^^^^

Library\\Listener\\Dispatch


使用条件
^^^^^^^^^

如果APP需要请求新的接口,原来的接口又不能覆盖,这时根据版本信息添加对应的新的接口,APP请求地址不变,eg:XXXXXX/api.php/home
在子项目配置文件的数组中添加如下代码行:

.. code-block:: php

    <?php
    /** 调度器监听 */
    'dispatchListener' => 'Library\Listener\Dispatch',


使用方法
^^^^^^^^^^


添加对应了版本号的接口 eg:HomeController::homePage210Action()
该接口是专门针对v2.1.0版本的app接口,之前的HomeController::homePageAction()不做任何改变,依然作为之前版本的首页接口


.. code-block:: php

    <?php

    //旧版APP首页接口地址
    public function homePageAction()
    {
        // code
    }

    //v2.1.0版本APP首页接口
    public function homePage210Action()
    {
        // code
    }





