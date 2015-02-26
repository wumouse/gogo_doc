JSON - 注册
---------------

说明
^^^^^^^^^


rel
^^^^^^^^^

**service/sign_up**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/gogocenter/public/index.php/Bangnigo/register>`_

输入
^^^^^^^^^^^^^

=================== ========== ============== ============= ========== ====================================
参数名                 位置        过滤           是否必须      默认值       说明
------------------- ---------- -------------- ------------- ---------- ------------------------------------
mobile                 POST         string        是           无         手机号
username               POST         string        是           无         用户名(昵称或第三方用户名))
pwd                    POST         string        是           无         密码
source                 POST         string        否           无         第三方来源(qq,sina,weixin)
source_user_id         POST         string        否           无         第三方唯一标识符
head_url               POST         string        否           无         第三方头像
=================== ========== ============== ============= ========== ====================================

输出
^^^^^^^^^

.. code-block:: javascript
    :linenos:

    {
        "sys_status": 1,
        "api_status": 1,
        "info": "注册成功",
        "data": {
            "user": {
                "id": "41183",
                "mobile": "15680756558",
                "nickname": "jfdghhg",
                "sex": 3,
                "user_type": 1,
                "head_url" : "http://www.163.com"
            },
            "tokenid": "EYQ9FYXGGXK2AKA6"
        }
    }


其他
^^^^^^^^^^^^^

:doc:`../../common/filter`
