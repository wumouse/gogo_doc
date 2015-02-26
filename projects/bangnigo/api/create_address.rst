optional - 创建地址
------------------------------------------------------------------------------------------------------------------------


说明
^^^^^^^^^



rel
^^^^^^^^

**create_address**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/bangnigo/branches/definition/public/api.php/user/address>`_

接口路由
^^^^^^^^^^^

**/user/address**


输入
^^^^^^^^^^^^^

认证与授权 :doc:`../../common/auth`

下面指出位置是PATH的参数，请看接口路由中的大括号

其他参数:

==================== ========== =========================== =========== ========== ====================================
参数名                  位置       过滤                        是否必须     默认值      说明
-------------------- ---------- --------------------------- ----------- ---------- ------------------------------------
consignee               POST      string                        是                    收货人姓名
tel                     POST      mobile                        是                    电话号码
address                 POST      string                        是                    详细地址
city                    POST      uint                          是                    城市id
district                POST      uint                          是                    区域id
is_default              POST      string                        是                    是否默认 1,0
province                POST      uint                          否        1           省id
sign_building           POST      string                        否                    标志建筑物
best_time               POST      string                        否                    最佳时间
zipcode                 POST      string                        否        629200      邮编
city_id                 POST      uint                          是                    地理位置 - 城市ID



district_id             POST      uint                          是                    地理位置 - 区ID



recipient               POST      string                        是                    收件人



mobile                  POST      float                         是                    手机号



address                 POST      string                        是                    详细地址



zip_code                POST      string                        是                    邮政编码



is_default              POST      int                           否                    是否是默认



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
