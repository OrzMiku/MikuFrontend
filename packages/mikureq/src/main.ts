import axios from "axios";
import type { AxiosRequestConfig, AxiosInstance, AxiosPromise } from "axios";

export type mikureqPrimise<T = any> = AxiosPromise<T>;
export type mikureqRequestConfig<D = any> = AxiosRequestConfig<D>;
export type mikureqInstance = AxiosInstance;

class mikureq {
  instance: mikureqInstance;

  constructor(baseURL?: string, timeout: number = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });
  }

  req<T = any>(config?: mikureqRequestConfig): mikureqPrimise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config as AxiosRequestConfig)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  get<T = any>(config?: mikureqRequestConfig): mikureqPrimise<T> {
    return this.req({ ...config, method: "get" });
  }
  post<T = any>(config?: mikureqRequestConfig): mikureqPrimise<T> {
    return this.req({ ...config, method: "post" });
  }
}

export default mikureq;
