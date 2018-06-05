import {
    wxRequest
} from '../utils/wxRequest';

const api2 = 'https://mini3.pinecc.cn/';

//登录 注册

const login = (params) => wxRequest(params, api2+'api/Login/login.html');
const workList = (params) => wxRequest(params, api2 + 'api/Work/workList.html');
const workTypeList = (params) => wxRequest(params, api2 + 'api/Work/workTypeList.html');
const disttrictList = (params) => wxRequest(params,api2 + 'api/Addr/disttrictList.html');
const blList = (params) => wxRequest(params,api2 + 'api/User/blList.html');
//评价
module.exports = {
  login,workList,workTypeList,disttrictList,blList

}
