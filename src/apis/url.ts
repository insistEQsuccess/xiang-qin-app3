import { post } from './https-service'
import { encrypt} from '@/util/index'
// const enStr = encrypt()
// console.log('看看加密结果-----')
// console.log(enStr)
// console.log('查看解密结果：---')
// console.log(JSON.parse(decropt(enStr)))

// 列表接口
export const getList = (data: any) => post('/blindDateWall/visitingCard/list', data, { sign: encrypt() })
// 上传文件
export const uploadImg = (data: any) => post('/user/icon/upload', data, { sign: encrypt() })
// login
export const loginFun = (data: any, config: any) => post('/user/login', data, config)
// 获取验证码
export const getCodeFun = (data: any, config: any) => post('/sms/send', data, config)
// 注册用户
export const registerUser = (data: any) => post('/user/register', data, { sign: encrypt() })
// 用户详情
export const getDetails = (data: any) => post('/user/h5/details', data, { sign: encrypt() })
// 查询相亲群
export const getGroupsList = (data: any) => post('/dating/circle/group/list', data, { sign: encrypt() })
// 解锁相亲群
export const deblocking = (data: any) => post('/dating/circle/group/deblocking', data, { sign: encrypt() })
