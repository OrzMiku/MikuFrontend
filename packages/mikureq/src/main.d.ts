import type { AxiosRequestConfig, AxiosInstance, AxiosPromise } from "axios";
type mikureqPrimise<T = any> = AxiosPromise<T>;
type mikureqRequestConfig<D = any> = AxiosRequestConfig<D>;
type mikureqInstance = AxiosInstance;
declare class mikureq {
  instance: mikureqInstance;
  constructor(baseURL: any, timeout?: number);
  req<T = any>(config?: mikureqRequestConfig): mikureqPrimise<T>;
  get<T = any>(config?: mikureqRequestConfig): mikureqPrimise<T>;
  post<T = any>(config?: mikureqRequestConfig): mikureqPrimise<T>;
}
export default mikureq;
//# sourceMappingURL=main.d.ts.map
