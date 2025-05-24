import { render, screen } from '@testing-library/react';
import React from 'react';

import LineChart, { LineChartProps } from '.';

describe('LineChart', () => {
  it('should render the chart container', () => {
    const prices: LineChartProps['prices'] = [
      [1717977600000, 100],
      [1717981200000, 110],
    ];
    render(<LineChart prices={prices} />);
    const chart = screen.getByRole('img', { name: /cryptocurrency price line chart/i });
    expect(chart).toBeInTheDocument();
  });

  it('should handle empty data gracefully', () => {
    render(<LineChart prices={[]} />);
    const chart = screen.getByRole('img', { name: /cryptocurrency price line chart/i });
    expect(chart).toBeInTheDocument();
  });
});
