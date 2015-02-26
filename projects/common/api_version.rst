API版本信息
------------

说明
^^^^^^^

对于新版本的APP,如果接口做了修改,而之前的接口又不能覆盖(为了兼容旧版本的APP可用),那么可以将api_version服务器接口版本号带上,相当于请求服务器的另一个接口,而请求地址不变. eg:首页接口是xxx/api.php/home  如果不带api_version版本号,接口返回数据是针对旧版本的APP,这个时候就需要将api_version放入头信息的X-Device-Info中,标示请求的服务器接口版本(如果服务器有实现新版的接口,则返回新的接口数据,否则还是旧版数据),下面是X-Device-Info示例

.. code-block:: bash

    X-Device-Info:{"site":1,"lng":130.545644,"lat":29.001,"network":3,"time":"1418795910","version":1.0.1,"api_version":"v2.1.0"}



更新记录
^^^^^^^^^
.. versionadded:: 2015.02.05

