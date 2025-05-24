import { Meta, StoryObj } from '@storybook/react';

import CandleChart, { CandleChartProps } from '.';

const meta: Meta<typeof CandleChart> = {
  title: 'Bricks/Common/CandleChart',
  component: CandleChart,
  tags: ['autodocs'],
  argTypes: {
    ohlc: {
      control: 'object',
      description: 'Array of [timestamp, open, high, low, close] tuples',
    },
    className: {
      control: 'text',
      description: 'Optional className for the chart container',
    },
  },
};

export default meta;

type Story = StoryObj<typeof CandleChart>;

const sampleOhlc: CandleChartProps['ohlc'] = [
  [1717977600000, 100, 110, 95, 105],
  [1717981200000, 105, 115, 100, 110],
  [1717984800000, 110, 120, 105, 115],
  [1717988400000, 115, 125, 110, 120],
  [1717992000000, 120, 130, 115, 125],
];

export const Default: Story = {
  args: {
    ohlc: sampleOhlc,
    className: 'w-full h-96',
  },
};
