PHP文档注释规范示例
----------------------

简单介绍请见 :doc:`phpdoc-introduction`

普通文件
^^^^^^^^^^^

必须包含文件注释，文件注释两个 phpdoc 标签 @author @version，@author 后面跟随自己的英文名字，邮箱

.. code-block:: php

    <?php
    /**
     * GOGO - gogo_doc.
     *
     * @author wumouse <wumouse@qq.com>
     * @version $Id$
     */

类，接口，traits等文件
^^^^^^^^^^^^^^^^^^^^^^^

必须包含文件注释，类注释，类属性注释，类常量注释，类方法注释。

.. code-block:: php

    <?php
    /**
     * GOGO - library.
     *
     * @author wumouse <wumouse@qq.com>
     * @version $Id$
     */

    namespace Library\Test;

    use Phalcon\Config;

    /**
     * 人物建模 {@see http://www.baidu.com/s?wd=人}
     *
     * <code>
     * <?php
     * $person = new Person();
     * </code>
     */
    class Person implement \JsonSerializable
    {

        /** 人的肤色种类 - 白色 */
        const SKIN_WHITE = 1;

        /**
         * 选项
         *
         * @var mixed[]
         */
        protected $_options = [
            'iq' => 100,// IQ智商
            'skin' => null,// 肤色
        ];

        /**
         * 构造函数，不允许直接实例化
         *
         * 初始化了 _options 属性为 \Phalcon\Config 类型
         *
         * @see $_options
         * @param array $options 设置选项
         */
        private function __construct(array $options)
        {
            $this->_options = new Config($this->_options);
            // .. other implementation to merge $options and $_options
        }

        /**
         * 获取人的姓名
         *
         * @param bool $isShort 是否只返回短名
         * @return string 姓名
         */
        public function getName($isShort = false)
        {
            if ($isShort) {
                // 使用短名
                $name = explode(' ', $this->name, 1)[0];
            } else {
                $name = $this->name;
            }
            return $name;
        }

        /**
         * {@inheritDoc}
         */
        public function jsonSerialize()
        {
            // TODO: implementation
        }
    }
