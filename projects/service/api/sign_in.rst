JSON - 登录
---------------

说明
^^^^^^^^^



rel
^^^^^^^^^

**service/sign_in**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/gogocenter/public/index.php/Bangnigo/authenticate>`_

输入
^^^^^^^^^^^^^

================== ========== ============ ============= ========== ========================================
参数名                位置        过滤         是否必须      默认值       说明
------------------ ---------- ------------ ------------- ---------- ----------------------------------------
mobile               POST         string        是           无         手机号
password             POST         string        是           无         密码
logintype            POST         uint          是           无         1手机号登录,2第三方登录
source               POST         string        否           无         第三方来源(qq,sina,weixin,mobile)
source_user_id       POST         string        否           无         第三方唯一标识符
================== ========== ============ ============= ========== ========================================

输出
^^^^^^^^^

.. code-block:: javascript
    :linenos:

    //返回类型1
    {
        "sys_status": 1,
        "api_status": 1,
        "info": "验证成功",
        "data": {
            "tokenid": "NUTJBQAU9VQF5VOG",
            "user": {
                "id": "41109",
                "source": "qq",
                "tokenkey": "7895ILKOJ",
                "username": "15680756009",
                "sex": 3,
                "user_type": 1,
                "mobile": "15680756009"
            }
        }
    }

    //返回类型2
    {
        "sys_status": 1,
        "api_status": 0,
        "info": "未绑定",
    }
