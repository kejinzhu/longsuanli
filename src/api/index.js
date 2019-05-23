import request from '@/api/request';

// 登录
export function doLogin(datas) {
  return request({
    url: '/login/do_login',
    data: datas,
  });
}

// 获取实时btc难度
export function difficulty() {
  return request({
    url: '/difficulty',
  });
}
// 产品信息，回报率
export function contractFind() {
  return request({
    method: 'get',
    url: '/notice/contract_find',
  });
}
// 获取商品详情
export function goodsInfo(datas) {
  return request({
    url: '/goods/goods_info',
    data: datas,
  });
}
// 用户
export function userInfo() {
  return request({
    url: '/user/user_info',
  });
}
// 获取是否可以下单
export function getMiningGoods() {
  return request({
    url: '/order/3/get-mining-goods',
    method: 'get',
  });
}
// 登出
export function loginOut() {
  return request({
    url: '/login/login_out',
  });
}
// 修改个人信息
export function updateUser(datas) {
  return request({
    url: '/user/update_user',
    data: datas,
  });
}
// 修改密码
export function updatePwd(datas) {
  return request({
    url: '/register/update_pwd',
    data: datas,
  });
}
// 发送验证码
export function sendCode(datas) {
  return request({
    url: '/register/send_code',
    data: datas,
  });
}
// 算力列表
export function orderList() {
  return request({
    url: '/user/order_list',
  });
}
export function addOrder(datas) {
  return request({
    url: 'order/add_order',
    data: datas,
  });
}
// 注册
export function doReg(datas) {
  return request({
    url: '/register/doreg',
    data: datas,
  });
}

// 订单信息
export function getMining(datas) {
  return request({
    url: '/order/mining-find',
    data: datas,
  });
}

// 用户统计 总收益
export function statistics() {
  return request({
    url: '/user/statistics',
  });
}
// 取消订单
export function delOrder(datas) {
  return request({
    url: '/user/del_order',
    data: datas,
  });
}

// 用户余额
export function userAccount() {
  return request({
    url: '/user/useraccount',
  });
}
// 资金流水
export function stream(datas) {
  return request({
    url: '/user/stream',
    data: datas,
  });
}
// 提币
export function addExt(datas) {
  return request({
    url: '/extract/add_ext',
    data: datas,
  });
}
// 提币列表
export function extList(datas) {
  return request({
    url: '/extract/ext_list',
    data: datas,
  });
}

// 分销邀请收益列表
export function inviteList(datas) {
  return request({
    url: '/user/invite-list',
    data: datas,
  });
}

// 分销邀请加密获取
export function inviteEncrypt() {
  return request({
    url: '/user/invite-encrypt',
  });
}
// 被邀请的用户奖励收益
export function inviteUserData() {
  return request({
    url: '/user/invite-user-data',
  });
}
// 分销邀请解密获取邀请人信息
export function inviteDecrypt(datas) {
  return request({
    url: '/user/invite-decrypt',
    data: datas,
  });
}
// 绑定、修改绑定的电话以及邮箱
export function bindUserInfo(datas) {
  return request({
    url: '/user/bind-user-info',
    data: datas,
  });
}
// 上一个订单信息
export function rederInfo() {
  return request({
    url: '/user/prev-order-info',
  });
}
// 活动产品数量
export function receiveNumber(datas) {
  return request({
    url: '/user/receive-number',
    data: datas,
  });
}
// 活动产品数量6807
export function receiveIncome(datas) {
  return request({
    url: '/user/receive-income',
    data: datas,
  });
}
// 活动产品数量6800
export function statusNumber(datas) {
  return request({
    url: '/order/status-number',
    data: datas,
  });
}







