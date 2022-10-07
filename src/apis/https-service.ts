/**
 * @Description: http request
 */
import { Interceptor } from './Interceptor.service';

const baseURL = process.env.VUE_APP_BASE_API

export class Http {
  public instance: any;
  private defConfig: any = {
    baseURL: baseURL,
    headers: {
      'content-type': 'application/json',
      },
    timeout: 60000,
  }
  constructor() {
    this.instance = new Interceptor().getInterceptors();
  }

  public post = (url: string, data: any, config = {}) => this.instance.post(url, data, {
    ...this.defConfig,
    ...config
  });
  public get = (url: string, params: any, config = {}) => this.instance.get(url, {
    params,
    ...this.defConfig,
    ...config
  });
  public del = (url: string, data: any, config = {}) => this.instance.delete(url, {
    data,
    ...this.defConfig,
    ...config
  });
  public put = (url: string, params: any, config = {}) => this.instance.put(url, params, {
    ...this.defConfig,
    ...config
  });
}

const http = new Http()

export const get = (url: string, data: any) => http.get(url, data)

export const post = (url: string, data: any, config?: any) => http.post(url, data, config)
