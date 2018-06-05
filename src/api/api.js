import {
    wxRequest
} from '../utils/wxRequest';

const api2 = 'https://mini3.pinecc.cn/';

//登录 注册

const login = (params) => wxRequest(params, api2+'/goods/users/login')
const register = (params) => wxRequest(params, api2+'/goods/users/register');
const disttrictList = (params) => wxRequest(params,api2 + 'api/Addr/disttrictList.html');
const blList = (params) => wxRequest(params,api2 + 'api/User/blList.html');



















//个人中心
const userInfo = (params) => wxRequest(params, api2+'api/User/userInfo.html');//个人资料
//评价
module.exports = {
    register, login,disttrictList,blList,
    userInfo
}
