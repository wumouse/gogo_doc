JSON - 加入购物车
------------------------------------------------------------------------------------------------------------------------


说明
^^^^^^^^^



rel
^^^^^^^^

**create_edit_cart**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/bangnigo/branches/definition/public/api.php/user/cart>`_

接口路由
^^^^^^^^^^^

**/user/cart**


输入
^^^^^^^^^^^^^

认证与授权 :doc:`../../common/auth`

下面指出位置是PATH的参数，请看接口路由中的大括号

其他参数:

==================== ========== =========================== =========== ========== ====================================
参数名                  位置       过滤                        是否必须     默认值      说明
-------------------- ---------- --------------------------- ----------- ---------- ------------------------------------
goods_id                POST      uint                          是                    商品id
goods_number            POST      uint                          是                    商品数量
spec                    POST      notEmpty                      是                    规格
bNewCart                POST      string                        否        0           是否是新添购物车,忽略购物车记录
warehouse_id            POST      string                        否        0           cart.warehouse_id
area_id                 POST      string                        否        0           cart.area_id
quick                   POST      string                        否        0           cart.quick
script_name             POST      string                        否        0           1
goods_recommend         POST      string                        否                    1
==================== ========== =========================== =========== ========== ====================================


输出
^^^^^^^^^

api_status:

#. 1 成功

#. 0 失败

.. literalinclude:: ../../_tpl/response.js
    :language: javascript
    :linenos:
    

其他
^^^^^^^^^

:doc:`过滤 <../../common/filter>`
