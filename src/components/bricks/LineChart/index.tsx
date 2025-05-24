'use client';

import { ColorType, createChart, IChartApi, LineData, LineSeries, Time } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export interface LineChartProps {
  prices: [number, number][]; // [timestamp, price]
  className?: string;
}

const LineChart: React.FC<LineChartProps> = ({ prices, className }) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;
    if (chartRef.current) {
      chartRef.current.remove();
    }
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.offsetWidth,
      height: chartContainerRef.current.offsetHeight,
      layout: {
        background: {
          type: ColorType.Solid,
          color: '#181C17',
        },
        textColor: '#fff',
      },
      grid: {
        vertLines: { color: '#232820' },
        horzLines: { color: '#232820' },
      },
      timeScale: {
        borderColor: '#232820',
        timeVisible: true,
        secondsVisible: false,
      },
      rightPriceScale: {
        borderColor: '#232820',
      },
      crosshair: {
        mode: 0,
      },
    });
    chartRef.current = chart;
    const lineSeries = chart.addSeries(LineSeries);
    const data: LineData[] = prices.map(([timestamp, price]) => ({
      time: (timestamp / 1000) as Time,
      value: price,
    }));
    lineSeries.setData(data);
    chart.timeScale().fitContent();
    return () => {
      chart.remove();
      chartRef.current = null;
    };
  }, [prices]);

  return (
    <div
      ref={chartContainerRef}
      className={className}
      style={{ width: '100%', height: '100%', minHeight: 320 }}
      aria-label="Cryptocurrency price line chart"
      role="img"
    />
  );
};

export default LineChart;
