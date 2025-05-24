import { create } from 'zustand';

import {
  ChartTimeframe,
  ChartType,
  ICoinCandlestickChartResponse,
  ICoinChartDetailsResponse,
  ICoinDetailsResponse,
} from '@/interfaces/coins';

interface ICoinDashboardState {
  coinDetails?: ICoinDetailsResponse;
  coinChartDetails?: ICoinChartDetailsResponse;
  coinCandlestickChartDetails?: ICoinCandlestickChartResponse;
  chartType: ChartType;
  chartTimeframe: ChartTimeframe;
  setCoinDetails: (details: ICoinDetailsResponse) => void;
  setCoinChartDetails: (details: ICoinChartDetailsResponse) => void;
  setCoinCandlestickChartDetails: (details: ICoinCandlestickChartResponse) => void;
  setChartType: (type: ChartType) => void;
  setChartTimeframe: (timeframe: ChartTimeframe) => void;
}

const useCoinDashboardStore = create<ICoinDashboardState>(set => ({
  chartType: 'line',
  chartTimeframe: '24h',
  setCoinDetails: details => set({ coinDetails: details }),
  setCoinChartDetails: details => set({ coinChartDetails: details }),
  setCoinCandlestickChartDetails: details => set({ coinCandlestickChartDetails: details }),
  setChartType: type => set({ chartType: type }),
  setChartTimeframe: timeframe => set({ chartTimeframe: timeframe }),
}));

export default useCoinDashboardStore;
