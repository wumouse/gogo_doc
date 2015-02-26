获取外部输入参数
------------------

外部输入必须经过验证过滤

框架自带过滤
^^^^^^^^^^^^^^^^

.. code-block:: php

    <?php
    // 控制器
    $mobile = $this->filter->sanitize($mobileFromUser, 'mobile');
    $mobile = $this->request->getQuery('myMobile', 'mobile');
    $mobile = $this->dispatcher->getParam('myMobile', 'mobile', '18581870304');

.. note:: 它只提供了过滤，就是说检查必须参数必须自己来判断

项目简单封装
^^^^^^^^^^^^^^

简单说明
"""""""""""""

检查参数区分为 必选和可选，可选的带默认值

相关类 : 服务
"""""""""""""""""""

#. Library\\Gogo\\Arguments : arguments 之前没有利用注解定义参数，注释和代码重复太多
#. Library\\Gogo\\Arguments\\Annotations : arguments 注解定义参数

.. note:: 两个类定义的参数顺序可能稍稍有不同，请注意

使用示例
"""""""""""

使用 Library\Gogo\Arguments 时：

.. code-block:: php

    <?php
    $userName = $this->arguments->getRequired('user_name', 'string', 'POST');
    // 赋值到数组，getOptional 不指定第4个参数默认值的话，过滤失败返回 null
    $user['name'] = $this->arguments->getOptional('user_name', 'string', 'POST', '');

从 Library\\Gogo\\Arguments 继承得来的 Library\\Gogo\\Arguments\\Annotations 类可以从注解中分析参数，为了方便，定义了一个 trait在
Library\\Traits\\ParamsGetter ，导入到控制器基类里即可，见示例

.. code-block:: php

    <?php
    namespace Api\Controller;

    use Phalcon\Mvc\Controller;
    use Library\Traits\ParamsGetter;

    // 首先在控制器基类添加
    class ControllerBase extends Controller
    {
        /** 导入注解参数解析方法 */
        use ParamGetter;
    }


    // 在 action中定义参数

    /**
     * 首页，下面 // 表示说明
     *
     * @Route('/{userId:[0-9]+}', methods='POST')
     *
     * // @required("参数名", "过滤器", "参数位置", "默认值，这里只是用来生成文档，并不算默认值，需要指定", "我是注释")
     * // @optional("参数名", "过滤器", "参数位置", "默认值", "我是注释，跑文档的话，上面会有我哦")
     * @required('userId', 'uint', 'PATH', '1', '用户ID')
     * @optional('name', 'string', 'POST', '1', '姓名')
     * @optional('complex', {'string', 'trim'}, 'POST', null, '注意到前面的过滤参数了，用大括号包起来表示是数组，传入两个过滤')
     */
    public function homeAction()
    {
        // 获取 必须参数
        $required = $this->getRequiredParams();
        echo $required['userId'];

        $optional = $this->getOptionalParams();
        echo $optional['name'];
    }

.. note:: 还有添加了一种 PATH 类型的参数，表示是路由当中的，对应 $dispatcher->getParam(int|string $position);

.. warning:: 使用 optional 要注意默认值的填入，该用户输入的参数可不要添加了默认值

