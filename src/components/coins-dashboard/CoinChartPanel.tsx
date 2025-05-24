'use client';

import { BarChart, LineChart, Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import React from 'react';

import useCoinDashboard from '@/components/coins-dashboard/useCoinDashboard';
import { cn } from '@/components/shadcn/lib/utils';

const CandleChartComponent = dynamic(() => import('@/components/bricks/CandleChart'), {
  ssr: false,
});
const LineChartComponent = dynamic(() => import('@/components/bricks/LineChart'), {
  ssr: false,
});

const CoinChartPanel: React.FC = () => {
  const {
    chartType,
    chartTimeframe,
    coinChartDetails,
    coinCandlestickChartDetails,
    setChartType,
    setChartTimeframe,
  } = useCoinDashboard();

  return (
    <div className="w-full md:w-1/2 bg-[#232820] rounded-xl border border-[#232820] p-6 flex flex-col gap-6 mb-8 md:mb-0">
      {/* Segmented Control UI */}
      <div className="flex flex-row items-center justify-between w-full mb-4">
        {/* Left: Main Segments */}
        <div className={cn('flex flex-row bg-[#232820] rounded-xl shadow-sm p-1 gap-2')}>
          <button
            className={cn(
              'px-3 py-2 rounded-lg shadow-sm flex items-center justify-center',
              chartType === 'line'
                ? 'bg-white text-[#232820]'
                : 'text-neutral-300 hover:bg-[#3b4139]'
            )}
            onClick={() => setChartType('line')}
          >
            <LineChart className="w-5 h-5" />
          </button>
          <button
            className={cn(
              'px-3 py-2 rounded-lg shadow-sm flex items-center justify-center',
              chartType === 'candles'
                ? 'bg-white text-[#232820]'
                : 'text-neutral-300 hover:bg-[#3b4139]'
            )}
            onClick={() => setChartType('candles')}
          >
            <BarChart className="w-5 h-5" />
          </button>
        </div>
        {/* Right: Timeframes */}
        <div className={cn('flex flex-row bg-[#232820] rounded-xl shadow-sm p-1 gap-2')}>
          <button
            className={cn(
              'px-4 py-2 rounded-lg font-bold shadow-sm',
              chartTimeframe === '24h'
                ? 'bg-white text-[#232820]'
                : 'text-neutral-300 font-semibold hover:bg-[#3b4139]'
            )}
            onClick={() => setChartTimeframe('24h')}
          >
            24h
          </button>
          <button
            className={cn(
              'px-4 py-2 rounded-lg font-bold shadow-sm',
              chartTimeframe === '7d'
                ? 'bg-white text-[#232820]'
                : 'text-neutral-300 font-semibold hover:bg-[#3b4139]'
            )}
            onClick={() => setChartTimeframe('7d')}
          >
            7d
          </button>
          <button
            className={cn(
              'px-4 py-2 rounded-lg font-bold shadow-sm',
              chartTimeframe === '1m'
                ? 'bg-white text-[#232820]'
                : 'text-neutral-300 font-semibold hover:bg-[#3b4139]'
            )}
            onClick={() => setChartTimeframe('1m')}
          >
            1m
          </button>
          <button
            className={cn(
              'px-4 py-2 rounded-lg font-bold shadow-sm',
              chartTimeframe === '3m'
                ? 'bg-white text-[#232820]'
                : 'text-neutral-300 font-semibold hover:bg-[#3b4139]'
            )}
            onClick={() => setChartTimeframe('3m')}
          >
            3m
          </button>
          <button
            className={cn(
              'px-4 py-2 rounded-lg font-bold shadow-sm',
              chartTimeframe === '1y'
                ? 'bg-white text-[#232820]'
                : 'text-neutral-300 font-semibold hover:bg-[#3b4139]'
            )}
            onClick={() => setChartTimeframe('1y')}
          >
            1y
          </button>
        </div>
      </div>
      <div className="w-full max-w-3xl h-96 bg-gradient-to-b from-[#232820] to-[#181C17] rounded-xl border border-[#232820] flex items-end relative overflow-hidden">
        {coinChartDetails?.prices?.length && chartType === 'line' ? (
          <LineChartComponent
            prices={coinChartDetails.prices}
            className="absolute inset-0 w-full h-full"
          />
        ) : coinCandlestickChartDetails?.length && chartType === 'candles' ? (
          <CandleChartComponent
            ohlc={coinCandlestickChartDetails}
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white">
            loading...
            <Loader2 className="w-4 h-4 animate-spin text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinChartPanel;
