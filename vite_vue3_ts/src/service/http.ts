import axios, { AxiosRequestConfig } from 'axios';
// 设置默认全局的请求头和网关路径
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 15000;
// 请求拦截
axios.interceptors.request.use((config): AxiosRequestConfig<any> => {
  console.log(config, '请求拦截');
  return config;
});
// 响应拦截
axios.interceptors.response.use((res) => {
  console.log(res, '响应拦截');
  return res;
});
// 定义接口的出参类型
interface ResType<T> {
  code: number;
  data: any;
  msg: string;
  err: any;
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>;
  post<T>(url: string, params?: unknown): Promise<ResType<T>>;
  download(url: string): void;
}
const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  download(url) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = url;
    iframe.onload = function () {
      document.body.removeChild(iframe);
    };
    document.body.appendChild(iframe);
  },
};
export default http;
