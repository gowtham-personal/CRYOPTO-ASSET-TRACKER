// Need to Implementing generic error handling based on error codes if applicable
import axios, { AxiosInstance, RawAxiosRequestHeaders } from 'axios';

import type {
  DeleteParams,
  GetParams,
  PatchParams,
  PostParams,
  PutParams,
} from '@/interfaces/http';

/**
 * Temporary class to handle external api calls and not affect the existing Http class.
 * This will be used as Http class once tested in the testing environment
 */
class ExternalHttp {
  #axiosInstance: AxiosInstance;

  constructor({ baseUrl, apiKey }: { baseUrl: string; apiKey?: string }) {
    const headers: RawAxiosRequestHeaders = {};
    // This is a temporary api key for the demo
    if (apiKey) headers['x-cg-demo-api-key'] = apiKey;
    this.#axiosInstance = axios.create({
      baseURL: baseUrl,
      headers,
    });
    this.initInterceptors();
  }

  initInterceptors() {
    this.#axiosInstance.interceptors?.response.use(
      response => response,
      error => {
        console.error(error);
        throw error;
      }
    );
  }

  async get<ResponseBodyType>({ path, queryParams }: GetParams) {
    return this.#axiosInstance.get<ResponseBodyType>(path, {
      params: queryParams,
    });
  }

  async post<ResponseBodyType>({ path, queryParams, requestBody, signal, options }: PostParams) {
    return this.#axiosInstance.post<ResponseBodyType>(path, requestBody, {
      params: queryParams,
      signal,
      ...options,
    });
  }

  async put<ResponseBodyType>({ path, queryParams, requestBody }: PutParams) {
    return this.#axiosInstance.put<ResponseBodyType>(path, requestBody, {
      params: queryParams,
    });
  }

  async patch<ResponseBodyType>({ path, queryParams, requestBody }: PatchParams) {
    return this.#axiosInstance.patch<ResponseBodyType>(path, requestBody, {
      params: queryParams,
    });
  }

  async delete<ResponseBodyType>({ path, queryParams, requestBody }: DeleteParams) {
    return this.#axiosInstance.delete<ResponseBodyType>(path, {
      data: requestBody,
      params: queryParams,
    });
  }
}

export default ExternalHttp;
