import { Toast } from 'vant';
/*
 * @Author: Yandong Hu
 * @github: https://github.com/Mad-hu
 * @Date: 2021-12-03 11:44:22
 * @LastEditTime: 2021-12-03 16:56:56
 * @LastEditors: Yandong Hu
 * @Description: interceptor
 */

import axios from 'axios';

export class Interceptor {
  private static errorHandle(res: any) {
    // 状态码判断
    switch (res.status) {
      case 401:
        break;
      case 403:
        break;
      case 404:
        Toast.fail('请求的资源不存在');
        break;
      default:
        Toast.fail('连接错误');
    }
  }

  public instance: any;

  constructor() {
    // 创建axios实例
    this.instance = axios.create();
    // 初始化拦截器
    this.initInterceptors();
  }

  // 为了让http.ts中获取初始化好的axios实例
  public getInterceptors() {
    return this.instance;
  }

  // 初始化拦截器
  public initInterceptors() {
    this.instance.interceptors.request.use(
      (config: any) => {
        // 如果需要鉴权，可以从这里做
        // 'sign': localStorage.getItem('token') // 'ViS3Ox0QAksV+anIVBx0KSmorRkPUaUvvOCOF50YtQOIcFoyWV6VfwGbqPwABRRo5lvW2cjLpCVhJu9H/JALqcYoR52SpZQk8zGyKyx+5uOr/d9qhnNJj3+/uydDifPxD8YX6k3SzIiECr2QCWmOLBavnPDzqOmTuYAKe4Vn6eps+FUH0vgCiPLUQr6uzBGY26+WV4PW4sBtlJxpDit4YzCgYIJgXidrTnQ6VxiMg1U='
        // 'sign': 'ViS3Ox0QAksV+anIVBx0KSmorRkPUaUvvOCOF50YtQOIcFoyWV6VfwGbqPwABRRo5lvW2cjLpCVhJu9H/JALqcYoR52SpZQk8zGyKyx+5uOr/d9qhnNJj3+/uydDifPxD8YX6k3SzIiECr2QCWmOLBavnPDzqOmTuYAKe4Vn6eps+FUH0vgCiPLUQr6uzBGY26+WV4PW4sBtlJxpDit4YzCgYIJgXidrTnQ6VxiMg1U='
        console.log('sign sign sign：', config.sign)
        config.headers.sign = localStorage.getItem('token') || config.sign
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      // 请求成功
      (res: any) => {
        return res.data;
      },
      // 请求失败
      (error: any) => {
        if (error.response) {
          // 业务处理
          Interceptor.errorHandle(error.reponse)
          return Promise.reject(error.response);
        } else {
          return Promise.reject(new Error('服务器内部错误'));
        }
      });
  }
}
