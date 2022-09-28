import { post } from './https-service'

export const getList = (data: any) => post('/blindDateWall/visitingCard/list', data)
