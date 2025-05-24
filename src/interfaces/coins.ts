export interface ICoinListResponse {
  id: string;
  name: string;
  symbol: string;
}

export type ChartType = 'line' | 'candles';

export type ChartTimeframe = '24h' | '7d' | '1m' | '3m' | '1y';

export interface ICoinChartDetailsResponse {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
}

export type Candlestick = [
  timestamp: number,
  open: number,
  high: number,
  low: number,
  close: number,
];

export type ICoinCandlestickChartResponse = Candlestick[];

export interface ICoinChartDetailsParams {
  vs_currency: string;
  days: string;
}

export interface ICoinDetailsParams {
  localization?: boolean | string;
  tickers?: boolean | string;
  community_data?: boolean | string;
  developer_data?: boolean | string;
  sparkline?: boolean | string;
}

export interface ICoinDetailsResponse {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: string | null;
  platforms: Record<string, string>;
  detail_platforms: Record<
    string,
    {
      decimal_place: number;
      contract_address: string;
    }
  >;
  block_time_in_minutes: number;
  hashing_algorithm: string | null;
  categories: string[];
  preview_listing: boolean;
  public_notice: string | null;
  additional_notices: string[];
  description: Record<string, string>;
  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    snapshot_url: string | null;
    twitter_screen_name: string | null;
    facebook_username: string | null;
    bitcointalk_thread_identifier: number | null;
    telegram_channel_identifier: string | null;
    subreddit_url: string | null;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
  };
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  country_origin: string | null;
  genesis_date: string | null;
  contract_address: string;
  sentiment_votes_up_percentage: number | null;
  sentiment_votes_down_percentage: number | null;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: {
    current_price: Record<string, number>;
    total_value_locked: number | null;
    mcap_to_tvl_ratio: number | null;
    fdv_to_tvl_ratio: number | null;
    roi: unknown | null;
    ath: Record<string, number>;
    ath_change_percentage: Record<string, number>;
    ath_date: Record<string, string>;
    atl: Record<string, number>;
    atl_change_percentage: Record<string, number>;
    atl_date: Record<string, string>;
    market_cap: Record<string, number>;
    market_cap_rank: number;
    fully_diluted_valuation: Record<string, number>;
    market_cap_fdv_ratio: number;
    total_volume: Record<string, number>;
    high_24h: Record<string, number>;
    low_24h: Record<string, number>;
    price_change_24h: number;
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    price_change_24h_in_currency: Record<string, number>;
    price_change_percentage_1h_in_currency: Record<string, number>;
    price_change_percentage_24h_in_currency: Record<string, number>;
    price_change_percentage_7d_in_currency: Record<string, number>;
    price_change_percentage_14d_in_currency: Record<string, number>;
    price_change_percentage_30d_in_currency: Record<string, number>;
    price_change_percentage_60d_in_currency: Record<string, number>;
    price_change_percentage_200d_in_currency: Record<string, number>;
    price_change_percentage_1y_in_currency: Record<string, number>;
    market_cap_change_24h_in_currency: Record<string, number>;
    market_cap_change_percentage_24h_in_currency: Record<string, number>;
    total_supply: number;
    max_supply: number;
    max_supply_infinite: boolean;
    circulating_supply: number;
    last_updated: string;
  };
  status_updates: unknown[];
  last_updated: string;
}
