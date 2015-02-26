JSON - 支付
--------------------

说明
^^^^^^^^^


rel
^^^^^^^^^

**service/pay**



接口地址
^^^^^^^^^^^

**POST** `<http://service.gogotown.net/trunk/gogocenter/public/index.php/newpay/index>`_

输入
^^^^^^^^^^^^^

========== ========== =================================== ============= ========== ====================================
参数名      位置        :doc:`过滤 <../../common/filter>`   是否必须        默认值       说明
---------- ---------- ----------------------------------- ------------- ---------- ------------------------------------
orderno      POST         uint                                 是           无          订单号
paytype      POST         uint                                 是           无          1(支付宝),2(银联),3(微信),5(新版银联)
========== ========== =================================== ============= ========== ====================================

输出
^^^^^^^^^

.. code-block:: javascript
        :linenos:

        {
            "sys_status": 1,
            "api_status": 1,
            "info": "验证成功",
            "data": "partner=\"2088601208699120\"&seller_id=\"2088601208699120\"&out_trade_no=\"2269\"&subject=\"测试专用测试餐食2-大妈小厨\"&body=\"测试专用测试餐食2 \"&total_fee=\"5\"&notify_url=\"http%3A%2F%2Fgogocenter.gogotown.cn%2Fpay%2Falinotify\"&service=\"mobile.securitypay.pay\"&_input_charset=\"UTF-8\"&payment_type=\"1\"&return_url=\"www.xxx.com\"&it_b_pay=\"1d\"&show_url=\"www.xxx.com\"&extra_common_param=\"extra_common_param\"&sign=\"RU%2Fi%2BZTMo4keyTydWmX3vcKRzg8ao8RksPDZ6lY%2BdiySOShyBhQTeyTX7GUFfF%2FpFr0q5UezW3%2FeMGeGZiF8%2F3Ujte3ohcobc4GKTYeYJi0D48DD%2FP%2B3ApM8V%2F66uuaplG7s7YuxmgTUF1rZwfIziTeSmFpepVcZ5jTKWuFQZXo%3D\"&sign_type=\"RSA\""
        }

