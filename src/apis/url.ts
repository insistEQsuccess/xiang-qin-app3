import { post } from './https-service'

// 列表接口
export const getList = (data: any) => post('/blindDateWall/visitingCard/list', data)
// 上传文件
export const uploadImg = (data: any) => post('/user/icon/upload', data)
// login
export const loginFun = (data: any) => post('/user/login', data)
// 获取验证码
export const getCodeFun = (data: any) => post('/sms/send', data)
