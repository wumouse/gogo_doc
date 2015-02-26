PHPDoc 简单说明
--------------------

.. note:: 注释既然写好就必须实时更新(类似于phpstorm这样的IDE会有提示)，否则不如不写，尤其是 @param @throws @return。

全名 phpDocumentor ，设计之初的目的是为了生成代码注释文档。后来已然成为了PHP的注释标准。PHP-FIG组织正在将 PHPDoc 定制为 PSR-5
标准。诸多IDE也支持 PHPDoc 读取来识别正确的函数方法引用，标识符文档提示等等。总之写好注释，加快了我们开发的速度和对代码的理解。
本文只是简单将常用的注释规范进行说明。具体学习请看 `phpdoc_link`_ 。

.. _phpdoc_link: https://github.com/phpDocumentor/fig-standards/blob/master/proposed/phpdoc.md

基本介绍
^^^^^^^^^^^^^

#. 注释分单行注释和多行注释。均使用 /** \*/ 作为界定。
#. 注释里包含标签以 @开头，比如 @param。
#. 可以使用的注释位置为 文件头，类，函数，变量，常量，foreach，类属性，类常量，类属性，类方法等。
#. 注释摘要必须以 . 或者两个换行（即空行）结束。
#. 注释标签分为普通和 行内(用 {} 包围起来)。
#. {\@inheritDoc} 表示继承。
#. 包含某类型的数组用 "Type"[] 表示，比如 string[]，多种并明确类型可以用 (string|null)[]，不明确的数组元素类型 mixed[]
#. 注释超过行长的限制，可以折行，但是必须缩进一次表示折行

注释中的转义
^^^^^^^^^^^^^^

#. \\@ -> @
#. {@*} -> \*/

主要标签
^^^^^^^^^^

* <表示可选>
* [表示结构]
* "Type"请参见
* FQSEN (Fully Qualified Structural Element Name) 表示 完全限定结构名：
    * 命名空间: \\My\\Space
    * 函数: \\My\\Space\\myFunction()
    * 常量: \\My\\Space\\MY_CONSTANT
    * 类: \\My\\Space\\MyClass
    * 接口: \\My\\Space\\MyInterface
    * Trait: \\My\\Space\\MyTrait
    * 方法: \\My\\Space\\MyClass::myMethod()
    * 属性: \\My\\Space\\MyClass::$my_property
    * 类常量: \\My\\Space\\MyClass::MY_CONSTANT

@author
""""""""""

* 格式：@author [name] [<email address>]
* 说明：这里如果有邮箱，邮箱的尖括号是必须的
* 位置：无限制。
* 示例:

.. code-block:: php

    <?php
    /**
     * @author My Name
     * @author My Name <wumouse@qq.com>
     */

@version
""""""""""""

* 格式: @version ["Semantic Version"] [<description>]
* 位置：无限制。
* 示例：

.. code-block:: php

    <?php
    /**
     * Foo 类文件头注释，下面的括号是注释，实际并不编写
     *
     * @version 2.1.7 MyApp
     *          (this string denotes the application's overall version number)
     * @version @package_version@
     *          (this PEAR replacement keyword expands upon package installation)
     * @version $Id$
     *          (this CVS keyword expands to show the CVS file revision number)
     */

    /**
     * Class A
     */
    class Foo
    {
    }

@var
"""""""

* 格式：@var ["Type"] [element_name] [<description>]。
* 说明：有一些变体，不推荐，所以这里不作说明。属性和常量不用写 element_name，但是变量必须写
* 位置：常量，属性，变量。
* 示例：

.. code-block:: php

    <?php
    class Foo
    {
        /** @var int 我的常量 */
        const MY_CONST = 1;

        /** @var string|null Should contain a description */
        protected $description = null;

        /**
         * @var string 我是名字
         */
        protected $name;

        public function __construct()
        {
            /** @var int $int This is a counter. */
            $int = 0;

            /** @var \Sqlite3 $sqlite */
            foreach($connections as $sqlite) {
                // there should be no docblock here
                $sqlite->open('/my/database/path');
                <...>
            }
        }
    }

@param
"""""""""

* 格式：@param ["Type"] [name] [<description>]
* 说明：表示函数或方法的一个参数。而且支持一种结构体的写法，具体参见文档(`structure_link`_)，不用结构体时类型表示为 mixed[]
* 位置：函数，方法。
* 示例：

.. code-block:: php

    <?php
    /**
     * 计算提供的数组有多少个元素
     *
     * @param mixed[] $array 要计算的数组参数
     * @return int 返回元素的数量
     */
    function count(array $items)
    {
        <...>
    }

@return
""""""""""

* 格式：@return <"Type"> [description]
* 说明：没有返回值时最好不写
* 位置：函数，方法。
* 示例：

.. code-block:: php

    <?php
    /**
     * @return integer 指出有多少个子项
     */
    function count()
    {
        <...>
    }

    /**
     * @return string|null 标签的文本或者空（如果没有提供的话）
     */
    function getLabel()
    {
        <...>
    }

@throws
""""""""""

* 格式：@throws ["Type"] [<description>]
* 说明：有异常产生时必须写出，包括里面的调用方法等产生。
* 位置：函数，方法。
* 示例：

.. code-block:: php

    <?php
    /**
     * 计算提供的数组有多少个元素
     *
     * @param mixed[] $array Array 要计算的数组参数
     * @throws InvalidArgumentException 如果输入的不是数组的话
     * @return int Returns the number of elements.
     */
    function count($items)
    {
        <...>
        throw new \InvalidArgumentException('Wrong information!');
    }

{\@inheritDoc}
""""""""""""""""

* 格式：{@inheritDoc}
* 说明：继承被覆盖（实现）的方法属性的注释
* 位置：函数，方法，属性。
* 示例：

.. code-block:: php

    <?php
    /**
     * {@inheritDoc}
     */

其他一些标签
^^^^^^^^^^^^^^

* @deprecated [<"Semantic Version">][:<"Semantic Version">] [<description>] 表示已经标识为废弃（将来会被移除）的元素
* @todo [description] 表示待完成的事
* @property ["Type"] [name] [<description>] 当类带 getter setter 时使用，表示 getter setter 会使用哪些属性
* @method [return type] [name]([type] [parameter], [...]) [description] 类带魔术方法 __call 时使用，来表示会被魔术调用的方法

* @typedef ["Type"] [<"QCN">] [<"Inline PHPDoc">] 这个原文上没有使用示例，大概是定义一个数据混合类型，后面引用
* @example [URI] [<description>] 表示例子
* @see [URI | "FQSEN"] [<description>] 表示可以参看某个URI或者某个标识符 ，FQSEN请看上面说明
* @link 已废弃，使用 @see 代替

类型
^^^^^^^

* ``string`` , 字符串
* ``integer`` or ``int``, 整数
* ``boolean`` or ``bool``, 布尔值
* ``float`` or ``double``, the element to which this type applies is a continuous, or real, number.
* ``object``, 对象
* ``mixed``, 表示不确定的
* ``array``, 数组
* ``resource``, PHP 资源句柄
* ``void``, 常用于方法或函数，不过最好不用



PHPDoc 支持模版语法，请参见 `phpdoc_template_link`_ ;

.. _structure_link: https://github.com/phpDocumentor/fig-standards/blob/master/proposed/phpdoc.md#examples-12
.. _phpdoc_template_link: http://manual.phpdoc.org/HTMLSmartyConverter/HandS/phpDocumentor/tutorial_phpDocumentor.howto.pkg.html#basics.docblocktemplate
