'use client';

import { CandlestickSeries, ColorType, createChart, IChartApi, Time } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export interface CandleChartProps {
  ohlc: [number, number, number, number, number][]; // [timestamp, open, high, low, close]
  className?: string;
}

interface CandlestickDataType {
  time: Time;
  open: number;
  high: number;
  low: number;
  close: number;
}

const CandleChart: React.FC<CandleChartProps> = ({ ohlc, className }) => {
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
    const candleSeries = chart.addSeries(CandlestickSeries);
    const data: CandlestickDataType[] = ohlc.map(([timestamp, open, high, low, close]) => ({
      time: (timestamp / 1000) as Time,
      open,
      high,
      low,
      close,
    }));
    candleSeries.setData(data);
    chart.timeScale().fitContent();
    return () => {
      chart.remove();
      chartRef.current = null;
    };
  }, [ohlc]);

  return (
    <div
      ref={chartContainerRef}
      className={className}
      style={{ width: '100%', height: '100%', minHeight: 320 }}
      aria-label="Cryptocurrency price candlestick chart"
      role="img"
    />
  );
};

export default CandleChart;
