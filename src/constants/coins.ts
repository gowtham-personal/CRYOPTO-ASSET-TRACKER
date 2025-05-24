export const API_MODULES = {
  coins: '/coins',
};

export const API_VERSION_PATH = '/v3';

export const COINS_API_ROUTES = {
  list: '/list',
  marketChart: '/market_chart',
  candlestickChart: '/ohlc',
};

export const TIMEFRAME_TO_DAYS: Record<string, string> = {
  '24h': '1',
  '7d': '7',
  '1m': '30',
  '3m': '90',
  '1y': '365',
};
