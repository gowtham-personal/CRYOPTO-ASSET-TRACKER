'use client';
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react';

import useCoinDashboard from '@/components/coins-dashboard/useCoinDashboard';
import { PageErrorBoundary } from '@/components/common';

const CoinChartPanelComponent = dynamic(
  () => import('@/components/coins-dashboard/CoinChartPanel'),
  {
    ssr: false,
  }
);

const CoinInfoPanelComponent = dynamic(() => import('@/components/coins-dashboard/CoinInfoPanel'), {
  ssr: false,
});

export default function CoinDashboardPage() {
  const {
    coinId,
    chartTimeframe,
    fetchCoinDetails,
    fetchCoinChartDetails,
    fetchCoinCandlestickChart,
  } = useCoinDashboard();

  useEffect(() => {
    fetchCoinDetails();
    fetchCoinChartDetails();
    fetchCoinCandlestickChart();
  }, [coinId, chartTimeframe]);

  return (
    <PageErrorBoundary>
      <div className="min-h-screen bg-[#181C17] flex flex-col">
        <main className="flex flex-row w-full pt-8 gap-8 justify-center">
          {/* Left Info Panel */}
          <CoinInfoPanelComponent />
          {/* Right Chart Panel */}
          <CoinChartPanelComponent />
        </main>
      </div>
    </PageErrorBoundary>
  );
}
