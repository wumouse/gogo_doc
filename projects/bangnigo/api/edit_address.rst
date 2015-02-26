optional - 编辑地址
------------------------------------------------------------------------------------------------------------------------


说明
^^^^^^^^^



rel
^^^^^^^^

**edit_address**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/bangnigo/branches/definition/public/api.php/user/address/>`_

接口路由
^^^^^^^^^^^

**/user/address/{addressId:[0-9]+}**


输入
^^^^^^^^^^^^^

认证与授权 :doc:`../../common/auth`

下面指出位置是PATH的参数，请看接口路由中的大括号

其他参数:

==================== ========== =========================== =========== ========== ====================================
参数名                  位置       过滤                        是否必须     默认值      说明
-------------------- ---------- --------------------------- ----------- ---------- ------------------------------------
addressId               PATH      uint                          是                    地址ID
consignee               POST      string                        是                    收货人姓名
tel                     POST      mobile                        是                    电话号码
address                 POST      string                        是                    详细地址
district                POST      uint                          是                    区域id
city                    POST      uint                          是                    城市id
is_default              POST      string                        是                    是否设置默认 1,0
province                POST      uint                          否                    省id
sign_building           POST      string                        否                    标志建筑物
best_time               POST      string                        否                    最佳时间
zipcode                 POST      string                        否                    邮编
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
