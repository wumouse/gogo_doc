过滤器
---------

Phalcon 框架中自带了过滤的类，Phalcon\\Filter，自带一些过滤器，

相关Phalcon文档位置
^^^^^^^^^^^^^^^^^^^^^^

URI： /reference/filter.html#types-of-built-in-filters
目录标题路径：过滤与清理（Filtering and Sanitizing）

相关类 : 服务名
^^^^^^^^^^^^^^^^^

Library\\Gogo\\Filter : filter

项目中的配置
^^^^^^^^^^^^^^^^

项目中使用 Phalcon\\Filter::add()  方法扩展了一些过滤器，相关代码类：

使用条件
""""""""""

在 bootstrap.php 中加入以下代码:

.. code-block:: php

    <?php
    use Library\Gogo\Filter as GogoFilter;

    /** 添加自定义过滤器 */
    GogoFilter::init($di->get('filter'));

使用场景
"""""""""

获取参数：

.. code-block:: php

    <?php
    // 控制器
    $mobile = $this->filter->sanitize($mobileFromUser, 'mobile');
    $mobile = $this->request->getQuery('myMobile', 'mobile');
    $mobile = $this->dispatcher->getParam('myMobile', 'mobile');

    // 项目添加的 arguments 类
    $mobile = $this->arguments->getRequired('myMobile', 'mobile', 'POST');

    // 新项目使用注解定义参数

    /**
     * @required('myMobile', 'mobile', 'POST', '', '我的手机号')
     * @optional('myEmail', 'email', 'POST', '', '我的邮箱，可选')
     */
    public function indexAction()
    {
        $optional = $this->getRequiredParams();
    }

相关文档
^^^^^^^^^^^^

:doc:`get_input_var`
