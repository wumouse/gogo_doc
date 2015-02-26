JSON - 修改用户资料
---------------------

说明
^^^^^^^^^



rel
^^^^^^^^

**service/my_message**

接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/gogocenter/public/index.php/users/changeInfo>`_

输入
^^^^^^^^^^^^^

============ ========== ============== ============= ========== ====================================
参数名         位置          过滤        是否必须        默认值       说明
------------ ---------- -------------- ------------- ---------- ------------------------------------
sex            POST         uint           否                       性别，1男2女
nickname       POST         string         否                       昵称
headimg        POST         uint           否                       头像图片ID
age            POST         uint           否                       年龄
signature      POST         string         否                       个性签名
============ ========== ============== ============= ========== ====================================

输出
^^^^^^^^^

.. code-block:: javascript
    :linenos:

        {
            "sys_status": 1,// 系统状态
            "api_status": 1,
            "info": "",
            "data": [],
        }


其他
^^^^^^^^^^

:doc:`过滤 <../../common/filter>`
