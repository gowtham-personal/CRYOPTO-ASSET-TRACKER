import { render, screen } from '@testing-library/react';
import React from 'react';

import CandleChart, { CandleChartProps } from '.';

describe('CandleChart', () => {
  it('should render the chart container', () => {
    const ohlc: CandleChartProps['ohlc'] = [
      [1717977600000, 100, 110, 95, 105],
      [1717981200000, 105, 115, 100, 110],
    ];
    render(<CandleChart ohlc={ohlc} />);
    const chart = screen.getByRole('img', { name: /cryptocurrency price candlestick chart/i });
    expect(chart).toBeInTheDocument();
  });

  it('should handle empty data gracefully', () => {
    render(<CandleChart ohlc={[]} />);
    const chart = screen.getByRole('img', { name: /cryptocurrency price candlestick chart/i });
    expect(chart).toBeInTheDocument();
  });
});
