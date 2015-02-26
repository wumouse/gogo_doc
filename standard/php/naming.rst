命名规范
-----------

为什么
^^^^^^^^

代码是可读的，扩展会更容易，“猜想”正确的拼写也成为可能（参看 Phalcon 的命名）。

定义
^^^^^^^^

抄录至 《开发高质量PHP框架与应用的实际案例解析》一书，前两点是符合PSR规范的

#. 方法名和变量名总是 lowerStudlyCaps里.
#. 类（接口，traits）名总是在 UpperStudlyCaps里.
#. setter 和 getter 总是有类似 setPropertyName() 和 getPropertyName() 的形式
#. 关于布尔值的方法总是以 isAttributeName() 或 hasThingName() 的形式命名.
#. 如果 getValidator() 返回一个新的对象，createValidator() 就是一个更好的名字.
#. setFactory() 似乎是设置一个 factory实例，但事实上如果是个类名，那么使用 setFactoryClassName() 则会更好.
#. 通过 getSpecialConfiguration() 和 loadSpecialConfiguration() 的名称并不能解释它们的为什么叫 special.

