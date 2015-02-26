JSON - 上传图片
------------------

说明
^^^^^^^^^

使用表单形式上传，支持多张，表单字段名字任意不重复即可



rel
^^^^^^^^^

**service/picture_upload**


接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/gogocenter/public/index.php/picture/upload>`_

输入
^^^^^^^^^^^^^

输出
^^^^^^^^^

.. code-block:: javascript
    :linenos:

    {
        "sys_status": 1,
        "api_status": 1,
        "info": "",
        "data": [
            {
                "file_id": 1,
                "url": "http://upyun.com/uploads/test.jpg"
            },
            {
                "file_id": 2,
                "url": "http://upyun.com/uploads/test.jpg"
            }
        ],
    }
