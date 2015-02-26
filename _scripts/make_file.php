<?php
/**
 * 根据列表生成文件
 *
 * @author wuhao <wumouse@qq.com>
 * @version $Id$
 */

const BASEDIR = '../projects/bangnigo';

$warnings = <<<WARNINGS
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\address.rst:16: WARNING: unknown document: ../../api/address_list
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\address.rst:17: WARNING: unknown document: ../../api/address_delete
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\cart.rst:18: WARNING: unknown document: ../../api/address_list
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\cart.rst:19: WARNING: unknown document: ../../api/create_edit_cart
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\cart.rst:20: WARNING: unknown document: ../../api/topic_goods
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\change_mobile_step_1.rst:16: WARNING: unknown document: ../../api/captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\change_mobile_step_1.rst:17: WARNING: unknown document: ../../api/verify_captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\change_mobile_step_3.rst:16: WARNING: unknown document: ../../../service/api/captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\change_mobile_step_3.rst:17: WARNING: unknown document: ../../../service/api/verify_captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\change_password_step_1.rst:16: WARNING: unknown document: ../../../service/api/captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\change_password_step_1.rst:17: WARNING: unknown document: ../../../service/api/verify_captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\change_password_step_2.rst:16: WARNING: unknown document: ../../../service/api/change_password
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\city.rst:18: WARNING: unknown document: ../../api/city_list
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\create_edit_address.rst:16: WARNING: unknown document: ../../api/create_edit_address
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\create_goods_comment.rst:18: WARNING: unknown document: ../../../service/api/picture_upload
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\create_goods_comment.rst:19: WARNING: unknown document: ../../api/create_goods_comment
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\feed_back.rst:16: WARNING: unknown document: ../../../service/api/picture_upload
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\feed_back.rst:17: WARNING: unknown document: ../../../service/api/feed_back
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\forgot_password.rst:16: WARNING: unknown document: ../../../service/api/captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\forgot_password.rst:17: WARNING: unknown document: ../../../service/api/change_password
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods.rst:18: WARNING: unknown document: ../../api/goods
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods.rst:19: WARNING: unknown document: ../../api/collect_goods
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods.rst:20: WARNING: unknown document: ../../api/create_edit_cart
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods.rst:21: WARNING: unknown document: ../../api/cart
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods_category.rst:16: WARNING: unknown document: ../../api/goods_category
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods_category.rst:17: WARNING: unknown document: ../../api/search
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods_comment.rst:16: WARNING: unknown document: ../../api/goods_comment
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods_detail.rst:18: WARNING: unknown document: ../../api/goods_detail
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods_detail.rst:19: WARNING: unknown document:
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods_list.rst:16: WARNING: unknown document: ../../api/goods_list
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\goods_picture.rst:18: WARNING: unknown document: ../../api/goods_picture
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\home_page.rst:16: WARNING: unknown document: ../../api/home
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\home_page.rst:22: WARNING: unknown document:
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\my_collection.rst:16: WARNING: unknown document: ../../api/my_collection
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\my_collection.rst:17: WARNING: unknown document: ../../api/delete_collection
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\order.rst:16: WARNING: unknown document: ../../api/order
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\order.rst:17: WARNING: unknown document: ../../api/cancel_order
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\order.rst:18: WARNING: unknown document: ../../api/pay
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\order.rst:19: WARNING: unknown document: ../../api/delete_order
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\order_detail.rst:16: WARNING: unknown document: ../../api/order_detail
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\place_order.rst:16: WARNING: unknown document: ../../api/my_order_behavior
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\place_order.rst:22: WARNING: unknown document:
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\setting.rst:16: WARNING: unknown document: ../../api/address_list
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\sign_in.rst:16: WARNING: unknown document: ../../../service/api/sign_in
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\sign_in.rst:17: WARNING: unknown document: ../../../service/api/third_account_bind
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\sign_up.rst:16: WARNING: unknown document: ../../../service/api/captcha
E:\Desktop\Workspace\gogo_doc\projects\bangnigo\ui\app\sign_up_profile.rst:18: WARNING: unknown document:
E:\Desktop\Workspace\gogo_doc\projects\common\auth.rst:10: WARNING: unknown document: ../service/api/request_token
E:\Desktop\Workspace\gogo_doc\projects\common\auth.rst:11: WARNING: unknown document: ../service/api/sign_in
WARNINGS;

$tpl = file_get_contents(__DIR__ . '/../projects/_tpl/api.txt');

$warningsArr = explode("\n", $warnings);

foreach ($warningsArr as $key => $item) {
    $parts = explode(':', $item);

    if (!$parts[5]) {
        continue;
    }

    $filePath = dirname($parts[0] . ':' . str_replace("\f", '\f', $parts[1])) . '/' . substr($parts[5], 1) . '.rst';

    if (!stream_resolve_include_path($filePath)) {
        echo $filePath , ' writing...', PHP_EOL;
        file_put_contents($filePath, $tpl);
    }
}
