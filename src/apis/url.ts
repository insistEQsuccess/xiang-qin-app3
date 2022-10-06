import { post } from './https-service'

// 列表接口
export const getList = (data: any) => post('/blindDateWall/visitingCard/list', data)
// 上传文件
export const uploadImg = (data: any) => post('/user/icon/upload', data)
// login
export const loginFun = (data: any) => post('/user/login', data)
// 获取验证码
export const getCodeFun = (data: any) => post('/sms/send', data)
// 注册用户
export const registerUser = (data: any) => post('/user/register', data)
// 用户详情
export const getDetails = (data: any) => post('/user/h5/details', data)
