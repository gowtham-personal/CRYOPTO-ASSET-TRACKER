import { AxiosHeaders, AxiosResponse } from 'axios';

import { API_MODULES, API_VERSION_PATH, COINS_API_ROUTES } from '@/constants/coins';
import {
  ICoinCandlestickChartResponse,
  ICoinChartDetailsParams,
  ICoinChartDetailsResponse,
  ICoinDetailsParams,
  ICoinDetailsResponse,
  ICoinListResponse,
} from '@/interfaces/coins';
import useHttpApi from '@/services/rest-api-hooks/useHttpApi';

const useCoinsApi = () => {
  const http = useHttpApi(process.env.NEXT_PUBLIC_COIN_GECKO_BASE_URL);

  /**
   * Get the list of coins (with localStorage caching)
   * @returns {Promise<AxiosResponse<ICoinListResponse[]>>}
   */
  const getCoinsList = async (): Promise<AxiosResponse<ICoinListResponse[]>> => {
    const CACHE_KEY = 'coinsListCache';
    const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in ms
    try {
      // Check localStorage for cache
      const cached = typeof window !== 'undefined' ? localStorage.getItem(CACHE_KEY) : null;
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION) {
          // Return a mock AxiosResponse
          return {
            data,
            status: 200,
            statusText: 'OK',
            headers: new AxiosHeaders(),
            config: { headers: new AxiosHeaders() },
          };
        }
      }
      // No valid cache, fetch from API
      const response = await http.get<ICoinListResponse[]>({
        path: `${API_VERSION_PATH}${API_MODULES.coins}${COINS_API_ROUTES.list}`,
      });
      // Save to cache
      if (typeof window !== 'undefined') {
        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: response.data, timestamp: Date.now() })
        );
      }
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  /**
   * Get the details of a coin
   * @param {string} coinId - The ID of the coin
   * @param {ICoinDetailsParams} queryParams - The query parameters
   * @returns {Promise<AxiosResponse<ICoinDetailsResponse>>}
   */
  const getCoinDetails = async (
    coinId: string,
    queryParams: ICoinDetailsParams
  ): Promise<AxiosResponse<ICoinDetailsResponse>> => {
    try {
      const response = await http.get<ICoinDetailsResponse>({
        path: `${API_VERSION_PATH}${API_MODULES.coins}/${coinId}`,
        queryParams,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  /**
   * Get the chart details of a coin
   * @param {string} coinId - The ID of the coin
   * @param {ICoinChartDetailsParams} queryParams - The query parameters
   * @returns {Promise<AxiosResponse<ICoinChartDetailsResponse>>}
   */
  const getCoinChartDetails = async (
    coinId: string,
    queryParams: ICoinChartDetailsParams
  ): Promise<AxiosResponse<ICoinChartDetailsResponse>> => {
    try {
      const response = await http.get<ICoinChartDetailsResponse>({
        path: `${API_VERSION_PATH}${API_MODULES.coins}/${coinId}${COINS_API_ROUTES.marketChart}`,
        queryParams,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  /**
   * Get the candlestick chart data of a coin
   * @param {string} coinId - The ID of the coin
   * @param {ICoinCandlestickChartParams} queryParams - The query parameters
   * @returns {Promise<AxiosResponse<ICoinCandlestickChartResponse>>}
   */
  const getCoinCandlestickChart = async (
    coinId: string,
    queryParams: ICoinChartDetailsParams
  ): Promise<AxiosResponse<ICoinCandlestickChartResponse>> => {
    try {
      const response = await http.get<ICoinCandlestickChartResponse>({
        path:
          `${API_VERSION_PATH}${API_MODULES.coins}/` +
          `${coinId}${COINS_API_ROUTES.candlestickChart}`,
        queryParams,
      });
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    getCoinsList,
    getCoinDetails,
    getCoinChartDetails,
    getCoinCandlestickChart,
  };
};

export default useCoinsApi;
