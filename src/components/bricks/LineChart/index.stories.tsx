import { Meta, StoryObj } from '@storybook/react';

import LineChart, { LineChartProps } from '.';

const meta: Meta<typeof LineChart> = {
  title: 'Bricks/Common/LineChart',
  component: LineChart,
  tags: ['autodocs'],
  argTypes: {
    prices: {
      control: 'object',
      description: 'Array of [timestamp, price] pairs',
    },
    className: {
      control: 'text',
      description: 'Optional className for the chart container',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LineChart>;

const samplePrices: LineChartProps['prices'] = [
  [1717977600000, 100],
  [1717981200000, 110],
  [1717984800000, 105],
  [1717988400000, 120],
  [1717992000000, 115],
];

export const Default: Story = {
  args: {
    prices: samplePrices,
    className: 'w-full h-96',
  },
};
