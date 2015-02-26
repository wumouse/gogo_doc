JSON - 商品列表2.2(搜索)
------------------------------------------------------------------------------------------------------------------------


说明
^^^^^^^^^



rel
^^^^^^^^

**goods_list_v22**


接口地址
^^^^^^^^^^^

**GET** `<http://public.gogotown.net/zhangdi/service/trunk/bangnigo/branches/definition/public/api.php/goods;v22>`_

接口路由
^^^^^^^^^^^

**/goods**


输入
^^^^^^^^^^^^^

认证与授权 :doc:`../../common/auth`

下面指出位置是PATH的参数，请看接口路由中的大括号

其他参数:

==================== ========== =========================== =========== ========== ====================================
参数名                  位置       过滤                        是否必须     默认值      说明
-------------------- ---------- --------------------------- ----------- ---------- ------------------------------------
page                    GET       uint                          否        1           1
limit                   GET       uint                          否        10          1
_name                   GET       string                        否                    超市名或商品名
_sort                   GET       string                        否                    排序，使用下面字段名进行排序，_sort=sale_volumes
sale_volumes            GET       string                        否                    销量
price                   GET       string                        否                    价格
market_id               GET       string                        否                    超市
category_id             GET       uint                          否                    分类
==================== ========== =========================== =========== ========== ====================================


输出
^^^^^^^^^

api_status:

#. 1 成功

#. 0 失败

.. literalinclude:: response/goods_list.js
:language: javascript
        :linenos:


其他
^^^^^^^^^

:doc:`过滤 <../../common/filter>`
