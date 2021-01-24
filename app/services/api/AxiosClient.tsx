import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {apiConfig} from './config';
import {LocalStorage} from '../local-storage/LocalStorage';

class AxiosClient {
  public readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({
      baseURL: apiConfig.baseUrl,
      timeout: apiConfig.timeout,
      responseType: 'json'
    });

    this._initializeResponseInterceptor();
    this._authInterceptor();
    this._logger();
    this._customHeader();
  }

  protected _handleError = (error: any) => {
    return Promise.reject(error.toString());
  };

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _authInterceptor = () => {
    this.instance.interceptors.request.use(
      (config) => {
        const token = LocalStorage.getInstance().getAPiKey();
        if (token.length > 0) {
          config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  };

  private _customHeader = () => {
    this.instance.interceptors.request.use(
      (config) => {
        config.headers.account = LocalStorage.getInstance().getAccount();
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  };

  private _logger = () => {
    this.instance.interceptors.request.use((request) => {
      return request;
    });
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;
}

export default AxiosClient;
