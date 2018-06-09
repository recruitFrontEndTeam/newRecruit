import {
    wxRequest
} from '../utils/wxRequest';

const api2 = 'https://mini3.pinecc.cn/';

//登录 注册

const login = (params) => wxRequest(params, api2+'api/Login/login.html');//登录
const getUserInfo = (params) => wxRequest(params,api2 + 'api/Login/getUserInfo.html');//获取用户信息接口
const disttrictList = (params) => wxRequest(params,api2 + 'api/Addr/disttrictList.html');//筛选城市
const blList = (params) => wxRequest(params,api2 + 'api/User/blList.html');//伯乐
const workList = (params) => wxRequest(params, api2 + 'api/Work/workList.html');//职位列表
const recWorkList = (params) => wxRequest(params, api2 + 'api/Work/recWorkList.html');//职位列表
const workTypeList = (params) => wxRequest(params, api2 + 'api/Work/workTypeList.html');//职位分类列表
const workDetail = (params) => wxRequest(params, api2 + 'api/Work/workDetail.html');//职位详情
const userInfo = (params) => wxRequest(params, api2 + 'api/User/userInfo.html');//个人资料
const updateUserInfo = (params) => wxRequest(params, api2 + 'api/User/updateUserInfo.html');//完善信息
const sendProfileSms = (params) => wxRequest(params, api2 + 'api/Sms/sendProfileSms.html');//短信验证码
const advance = (params) => wxRequest(params, api2 + 'api/Salary/advance.html');//预支工资
const cityList = (params) => wxRequest(params,api2 + 'api/Addr/cityList.html');//在招城市
const applyWork = (params) => wxRequest(params, api2 + 'api/Work/applyWork.html');//申请工作
const collectWork = (params) => wxRequest(params,api2 +'api/Work/collectWork');//收藏工作
const applyWorkList = (params) => wxRequest(params, api2 + 'api/Work/applyWorkList.html');//申请工作记录
const collectWorkList = (params) => wxRequest(params, api2 + 'api/Work/collectWorkList.html');//收藏的工作记录
const trainList = (params) => wxRequest(params, api2 + 'api/Train/trainList.html');//培训列表
const trainDetail = (params) => wxRequest(params, api2 + 'api/Train/trainDetail.html');//培训详情
const addArainWill = (params) => wxRequest(params, api2 + 'api/Train/addArainWill.html');//培训需求申请
const Cashdetail = (params) => wxRequest(params, api2 + 'api/Cash/detail.html');//资金明细
const CashnewIn = (params) => wxRequest(params, api2 + 'api/Cash/newIn.html');//新进款项
//投诉建议  我的二维码
const complain = (params) => wxRequest(params, api2 + 'api/User/complain.html');//投诉建议

const CashWillIn = (params) => wxRequest(params, api2 + 'api/Cash/WillIn.html');//带入款项
const teamUserList = (params) => wxRequest(params, api2 + 'api/User/teamUserList.html');//我的邀请
const UserTeamPrizeList = (params) => wxRequest(params, api2 + 'api/User/teamPrizeList.html');//我的奖励
const SalaryTeamPrizeList = (params) => wxRequest(params, api2 + 'api/Salary/teamPrizeList.html');//薪资组成
const salaryList = (params) => wxRequest(params, api2 + 'api/Salary/salaryList.html');//薪资列表
const withdraw = (params) => wxRequest(params, api2 + 'api/User/withdraw.html');//申请提现
const withdrawList = (params) => wxRequest(params, api2 + 'api/User/withdrawList.html');//提现记录
//评价
module.exports = {
  login,getUserInfo,workList,workTypeList,disttrictList,blList,workDetail,userInfo,
    updateUserInfo,sendProfileSms,advance,applyWork,applyWorkList,collectWorkList,trainList,
    trainDetail,addArainWill,Cashdetail,CashnewIn,CashWillIn,teamUserList,
    UserTeamPrizeList,SalaryTeamPrizeList,salaryList,complain,recWorkList,withdraw,withdrawList,
    collectWork,cityList

}
