import {
    wxRequest
} from '../utils/wxRequest';

const api2 = '';

//登录 注册

const login = (params) => wxRequest(params, api2+'/goods/users/login')
const register = (params) => wxRequest(params, api2+'/goods/users/register')


//评价
module.exports = {
    register, login

}
