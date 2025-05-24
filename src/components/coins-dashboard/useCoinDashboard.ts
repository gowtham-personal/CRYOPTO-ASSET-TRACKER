import { useParams } from 'next/navigation';

import { TIMEFRAME_TO_DAYS } from '@/constants/coins';
import { ICoinChartDetailsParams, ICoinDetailsParams } from '@/interfaces/coins';
import useCoinsApi from '@/services/rest-api-hooks/coins/useCoinsApi';
import useCoinDashboardStore from '@/store/useCoinDashboardStore';

const useCoinDashboard = () => {
  // Get the coinId from the url params
  const { coinId } = useParams();

  const {
    chartType,
    chartTimeframe,
    coinDetails,
    coinChartDetails,
    coinCandlestickChartDetails,
    setCoinDetails,
    setCoinChartDetails,
    setCoinCandlestickChartDetails,
    setChartType,
    setChartTimeframe,
  } = useCoinDashboardStore();

  const { getCoinDetails, getCoinChartDetails, getCoinCandlestickChart } = useCoinsApi();

  /**
   * Fetch the coin details
   */
  const fetchCoinDetails = async () => {
    try {
      const queryParams: ICoinDetailsParams = {
        localization: false,
        tickers: false,
        community_data: false,
        developer_data: false,
        sparkline: false,
      };
      const response = await getCoinDetails(coinId as string, queryParams);
      if (response?.status === 200) {
        setCoinDetails(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Fetch the coin chart details
   */
  const fetchCoinChartDetails = async () => {
    try {
      const queryParams: ICoinChartDetailsParams = {
        vs_currency: 'usd',
        days: TIMEFRAME_TO_DAYS[chartTimeframe],
      };
      const response = await getCoinChartDetails(coinId as string, queryParams);
      if (response?.status === 200) {
        setCoinChartDetails(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * Fetch the coin candlestick chart details
   */
  const fetchCoinCandlestickChart = async () => {
    try {
      const queryParams: ICoinChartDetailsParams = {
        vs_currency: 'usd',
        days: TIMEFRAME_TO_DAYS[chartTimeframe],
      };
      const response = await getCoinCandlestickChart(coinId as string, queryParams);
      if (response?.status === 200) {
        setCoinCandlestickChartDetails(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    coinId,
    chartType,
    chartTimeframe,
    setChartType,
    setChartTimeframe,
    coinDetails,
    coinChartDetails,
    coinCandlestickChartDetails,
    fetchCoinDetails,
    fetchCoinChartDetails,
    fetchCoinCandlestickChart,
  };
};

export default useCoinDashboard;
