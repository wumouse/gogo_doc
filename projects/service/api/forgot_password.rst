JSON - 忘记密码
--------------------------


说明
^^^^^^^^^



rel
^^^^^^^^

**service/forgot_password**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/gogocenter/public/index.php/bangnigo/findPwd>`_


输入
^^^^^^^^^^^^^

认证与授权 :doc:`../../common/auth`

其他参数:

============== ========== ========= ========== ========== ====================================
    参数名        位置      过滤     是否必须    默认值      说明
-------------- ---------- --------- ---------- ---------- ------------------------------------
mobile           POST                  是                   商品ID
newPwd           POST       string     是                   新密码
============== ========== ========= ========== ========== ====================================


输出
^^^^^^^^^

.. literalinclude:: ../../_tpl/response.js
    :language: javascript
    :linenos:

其他
^^^^^^^^^

:doc:`过滤 <../../common/filter>`
