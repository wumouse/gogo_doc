Phalcon DI 介绍
--------------------

DI 是什么
^^^^^^^^^^^^^

DI 就是一个管理依赖的容器，我在一个地方集中初始化创建好服务，定义一个键放到容器里。然后别的地方直接就可以根据键拿过来用，不用管
他做了什么初始化，他具体是哪个类。

不用DI的时候，每个组件要自己管理哪个依赖，初始化等等。用了DI之后，组件只需要通过DI获取对应的依赖就可以了，减少了复杂性。而且我可以
随时悄无声息的替换实现的类。比如数据库，我之前是MYSQL，要切换到PostgreSql的话，只需要替换到DI中的DB类就行了

官方文档的中文翻译文档原文：

基本上，这个组件实现了 [ `控制反转`_ ] 的模式。
使用这种模式，组件的对象不用再使用setter或者构造函数去接受依赖实例，而是使用请求服务的依赖注入。这减少了总的复杂性，因为在组件内，只有一个方法去获取所需的依赖实例。

* 我们可以很容易的使用一个我们自己建立的或者是第三方的组件去替换原有的组件。
* 我们完全控制对象的初始化，这让我们在传递它们的实例到组件之前，根据需要设置这些对象。
* 我们可以在一个结构化的和统一组件内获取全局实例。

.. _控制反转: http://zh.wikipedia.org/wiki/%E6%8E%A7%E5%88%B6%E5%8F%8D%E8%BD%AC

官网写了一个简短的为什么要用  `DI`_

.. _DI:  http://docs.phalconphp.com/en/latest/reference/di.html

注入和调用方式
^^^^^^^^^^^^^^^^^

注入和简单调用
""""""""""""""""

注入方式有很多种方式，有中文翻译的文档，这里不作过多介绍 `Phalcon Di 的使用`_

.. _Phalcon Di 的使用: http://docs.phalconphp.com/en/latest/reference/di.html#registering-services-in-the-container


实际各处调用示例
""""""""""""""""""

.. note::
    * Phalcon\\Mvc\\Controller，Phalcon\\Mvc\\Application，视图引擎 都实现了 __get 方法获取DI中的服务
    * DI 又实现了魔术方法，当调用 get[ServiceName] 方法时就获取该服务，比如 logger，$di->getLogger('app.txt');

.. code-block:: php

    <?php
    /**
     * 下面以注入了一个叫 myService 的服务 为例，他有一个方法是 doSth()
     */
    // 控制器里
    $this->myService->get();
    $this->di->get('myService')->doSth();
    $this->di->getMyService->doSth();

    // 只要实现了 Phalcon\DI\InjectionAwareInterface 接口的类都可以使用 getDI() 获取到 DI，包括模型，控制器，视图等等
    $this->getDI()->get('myService')->doSth();

    // 静态的方法获取DI
    Phalcon\DI::getDefault()->get('myService')->doSth();

.. code-block:: php

    // 视图里
    <?php $this->myService->doSth();?>
    <?php $this->getDI()->get('myService')->doSth();?>

.. code-block:: Jinja

    {# Volt #}
    {{ myService.doSth() }}


其他说明
^^^^^^^^^^^^^

使用 Phalcon\\Di 实例化的注入容器是空的，没有任何服务

使用 `Phalcon\\Di\\FactoryDefault`_ 实例化的注入容器自带了服务。不过里面没有写包含assets
，挺奇怪

.. _Phalcon\\Di\\FactoryDefault: http://docs.phalconphp.com/en/latest/reference/di.html#service-name-conventions
