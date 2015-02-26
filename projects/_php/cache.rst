数据缓存
---------

缓存跟phalcon官方一样，没有任何改变，只是redis在官方并没有相关的接口，但是在 `incubator`_ 官方非正式库上有提供

.. note:: 这里只是普通数据缓存和模型缓存，页面缓存等不在此列

.. _incubator: https://github.com/phalcon/incubator

相关类库
^^^^^^^^^^

`SVN地址 <http://192.168.0.61:88/svn/www_test/service/trunk/phalcon/Cache/Backend/Redis.php>`_

项目配置
^^^^^^^^^

代码参见 `SVN <http://192.168.0.61:88/svn/www_test/service/trunk/_config/bootstrap.php>`_
``$di->set('cache'...`` 和 ``$di->set('modelsCache'...`` 相关行

.. note:: 需要安装 redis 扩展

.. code-block:: php

    <?php
    /** 注册缓存，在没有用 cache 的地方最好不要获取本服务 */
    $di->set('cache', function () use ($di) {
        // 检查扩展
        if (!extension_loaded('Redis')) {
            throw new \Exception('Cache required redis extension');
        }
        // 创建 Redis 对象并连接redis
        $redis = new Redis();
        $redisConfig = $di->get('dbConfig')['redis']['connections'][0];
        $redis->connect($redisConfig['host'], $redisConfig['port']);

        // 创建前端缓存对象，这里决定了它是数据缓存，不是输出缓存等等
        $frontend = new CacheFrontendData([
            'lifetime' => $di->get('config')->cache->lifetime,
        ]);

        // 创建后端REDIS缓存
        $cache = new RedisCache($frontend, [
            'redis' => $redis
        ]);

        return $cache;
    }, true);

    /** 模型缓存，因为也可以用redis做缓存，所以用同一个 */
    $di->set('modelsCache', function () use ($di) {
        return $di->get('cache');
    });

使用示例
^^^^^^^^

.. code-block:: php

    <?php
    public function indexAction()
    {
        echo '<pre>';

        $cache = $this->cache;

        // 保存普通字符串
        $cache->save('token', 'fdasfdsaf456fdasfdas');

        // 查看是否存在
        var_dump($this->cache->exists('token'));

        // 获取 token
        echo $cache->get('token');

        $manicursit = \Model\Manicurist::findFirst();

        // 构造 key
        $key = 'manicurist:' . $manicursit->id;

        // 保存 model对象，过期时间为 3600 秒
        $this->cache->save($key, $manicursit, 3600);

        // 获取 缓存的 model对象
        $manicursitCache = $cache->get($key);

        // 看是否是 model 对象
        var_dump($manicursitCache instanceof \Phalcon\Mvc\Model);

        // 打印 model 数据
        print_r($manicursitCache->toArray());

        $autoKey = 'price_equal_255';
        // 查找一个结果集，自动缓存
        $manicursit = \Model\Manicurist::find([
            'id < ?0 and avg_price = :price:',
            'bind' => [
                2,
                'price' => 255,
            ],
            // 默认 lifetime 有个时间，这里指定 10 秒
            'cache' => ['key' => $autoKey, 'lifetime' => 10]
        ]);

        // 查找一个结果集
        echo $cache->get($autoKey)->count() , PHP_EOL;

        // 删除缓存
        echo $cache->delete('token') , PHP_EOL;
        echo $cache->delete($key) , PHP_EOL;
        echo $cache->delete($autoKey) , PHP_EOL;
    }
