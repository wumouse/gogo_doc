JSON - 获取TOKEN
----------------------

说明
^^^^^^^^^

需要传递的参数：DEVICE_INFO 以数组类型转换成JSON格式


rel
^^^^^^^^^

**service/request_token**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/gogocenter/public/index.php/Bangnigo/getToken>`_

输入
^^^^^^^^^^^^^

============== ========== =================================== ============= ========== ====================================
参数名          位置        :doc:`过滤 <../../common/filter>`   是否必须        默认值       说明
-------------- ---------- ----------------------------------- ------------- ---------- ------------------------------------
uuid            RAW_JSON         string(50)                     是                         iphone为uuid，android为mac地址
app_version     RAW_JSON         string(2)                      否                         版本信息
device_modle    RAW_JSON         uint(11)                       否
os_type         RAW_JSON         uint(11)                       否                         0 android 1 ios
os_version      RAW_JSON         string(1)                      否                         操作系统版本
carrier         RAW_JSON         uint(11)                       否                         中国电信，中国移动，等
resolution      RAW_JSON         string(20)                     否
screenwidth     RAW_JSON         string(20)                     否                          分辨率
screenheight    RAW_JSON         string(20)                     否                          分辨率
app_name        RAW_JSON         string(50)                     否                          应用名称(包名)
============== ========== =================================== ============= ========== ====================================

输出
^^^^^^^^^

.. code-block:: javascript
    :linenos:

    {
        "sys_status": 1,
        "api_status": 1,
        "info": "",
        "data": "SI2I0D17K8HSZ72F"
    }
