import { post } from './https-service'

// 列表接口
export const getList = (data: any) => post('/blindDateWall/visitingCard/list', data)
// 上传文件
export const uploadImg = (data: any) => post('/user/icon/upload', data)