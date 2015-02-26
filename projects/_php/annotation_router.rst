匿名路由
-----------

匿名路由是 Phalcon 框架的一个特别的路由功能

相关类 : 服务名
^^^^^^^^^^^^^^^^

Phalcon\\Mvc\\Router\\Annotations : router

文档位置指示
^^^^^^^^^^^^^^

URI: /reference/routing.html#annotations-router
目录标题路径: 路由(Routing)->匿名路由(Annotations Router)

项目中的配置
^^^^^^^^^^^^^^

项目中未将所有资源放到一个数组定义，直接与控制器名关联

使用条件
"""""""""""

* 需要注入 匿名路由 到 router 服务，项目目前使用的是 Library\RESTful\Router
* 控制器类注释添加 @RoutePrefix标签，action添加 @Route 标签（有其他具体方法标签，不建议使用）

说明
"""""""

* 控制器路由规则: #/[a-z/]+[/;]#，即 PATHINFO 中以最后一个/或者;结束路由指示，多个/表示层级，对应的控制器分目录层级，
    @RoutePrefix 表示URI的前缀，@Route第一个参数表示 前缀后面的路由,methods 表示请求方法，@Route 支持正则表示路由

    下表作出了一些示范, NS表示控制器顶层空间：

=================== ================================== ==================== ===========================================
 请求                 对应控制器                          @RoutePrefix参数     @Route 参数
=================== ================================== ==================== ===========================================
GET /user?name=a      [NS]\\UserController               ("/user")           ("/", methods="GET")
POST /user;1?a=1      [NS]\\UserController               ("/user")           (";{userId:[0-9]+}", methods="POST")
POST /user/1?         [NS]\\UserController               ("/user")           ("/{userId:[0-9]+}", methods="POST")
PUT /user/account?    [NS]\\User\\AccountController      ("/user/account")   ("/", methods="PUT")
=================== ================================== ==================== ===========================================

.. note::

    * 请求URI全部统一使用小写，不能加尾斜杠。
    * 方法和路由规则匹配不上的话是不会进到 Action里的
    * 定义 @Route 时不要使用 /后面跟字母的格式，会被误认为是控制器的层级，请使用 ; 代替。 [#f1]_

.. [#f1] 一般 ``/`` 表示层级， ``;`` 表示消除层级误解。 ``,`` 表示同级比如 /location;130.00,28.145


