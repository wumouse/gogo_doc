JSON - 支付 接口（refactor）
------------------------------------------------------------------------------------------------------------------------


说明
^^^^^^^^^


**返回支付字符串及信息**

rel
^^^^^^^^

**pay_info**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/bangnigo/branches/definition/public/api.php/order;pay_info>`_

接口路由
^^^^^^^^^^^

**/order;pay_info**


输入
^^^^^^^^^^^^^

认证与授权 :doc:`../../common/auth`

下面指出位置是PATH的参数，请看接口路由中的大括号

其他参数:

==================== ========== =========================== =========== ========== ====================================
参数名                  位置       过滤                        是否必须     默认值      说明
-------------------- ---------- --------------------------- ----------- ---------- ------------------------------------
rec_ids                 POST      notEmpty                      是                    购物车ids
pay_id                  POST      string                        是                    支付方式
address_id              POST      string                        是                    地址ID
shipping_id             POST      string                        是                    配送方式
shipping_date_time      POST      string                        是                    配送时间
postscript              POST      string                        是                    备注
bag_needed              POST      string                        是                    是否需要购物袋，1=要，0=不要
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
