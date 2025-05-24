import { FileText, Globe, Info, Star } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/bricks';
import { Icon } from '@/components/bricks/Icon';
import { Text } from '@/components/bricks/Text';

import useCoinDashboard from './useCoinDashboard';

const CoinInfoPanel: React.FC = () => {
  const { coinDetails } = useCoinDashboard();

  return (
    <div className="w-full md:w-1/3 bg-[#232820] rounded-xl border border-[#232820] p-6 flex flex-col gap-6 mb-8 md:mb-0">
      {/* Coin Header */}
      <div className="flex items-center gap-3">
        {coinDetails?.image?.thumb && (
          <img
            src={coinDetails.image.thumb}
            alt={coinDetails.name}
            className="w-8 h-8 rounded-full"
          />
        )}
        <Text text={coinDetails?.name || '...'} size="lg" weight="bold" color="white" />
        <span className="text-neutral-400 text-base font-medium">
          {coinDetails?.symbol?.toUpperCase()}
        </span>
        {coinDetails?.market_cap_rank && (
          <span className="ml-auto bg-[#181C17] text-xs text-white px-2 py-1 rounded font-semibold">
            #{coinDetails.market_cap_rank}
          </span>
        )}
      </div>
      {/* Price & Change */}
      <div className="flex items-end justify-between">
        <Text
          text={
            coinDetails?.market_data?.current_price?.usd?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            }) || '...'
          }
          size="lg"
          weight="bold"
          color="white"
        />
        <span
          className={`text-base font-semibold ${coinDetails?.market_data?.price_change_percentage_24h && coinDetails.market_data.price_change_percentage_24h > 0 ? 'text-green-400' : 'text-red-400'}`}
        >
          {coinDetails?.market_data?.price_change_percentage_24h !== undefined
            ? `${coinDetails.market_data.price_change_percentage_24h.toFixed(2)}%`
            : ''}
        </span>
      </div>
      {/* 1 BTC = ... USD */}
      <div className="flex items-center gap-2">
        <Text text={`1.0000 ${coinDetails?.symbol?.toUpperCase()}`} size="sm" color="white" />
        <span className="text-neutral-400 text-xs">
          =
          {coinDetails?.market_data?.current_price?.usd?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
          }) || '...'}
        </span>
      </div>
      {/* 24h Range Bar */}
      <div className="flex flex-col gap-1 mt-2">
        <div className="flex justify-between text-xs text-neutral-400">
          <span>
            {coinDetails?.market_data?.low_24h?.usd?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            }) || '...'}
          </span>
          <span>24h Range</span>
          <span>
            {coinDetails?.market_data?.high_24h?.usd?.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
              maximumFractionDigits: 0,
            }) || '...'}
          </span>
        </div>
        {/* Range Bar */}
        <div className="relative h-2 bg-[#181C17] rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-2 bg-green-400 rounded-full"
            style={{
              width:
                coinDetails?.market_data?.low_24h?.usd &&
                coinDetails?.market_data?.high_24h?.usd &&
                coinDetails?.market_data?.current_price?.usd
                  ? `${(
                      ((coinDetails.market_data.current_price.usd -
                        coinDetails.market_data.low_24h.usd) /
                        (coinDetails.market_data.high_24h.usd -
                          coinDetails.market_data.low_24h.usd)) *
                      100
                    ).toFixed(1)}%`
                  : '0%',
            }}
          />
        </div>
      </div>
      {/* Add to Portfolio */}
      <Button
        variant="outline"
        color="grey"
        size="md"
        leftIcon={<Icon icon={Star} size="sm" />}
        text={`Add to Portfolio${coinDetails?.watchlist_portfolio_users ? ` · ${coinDetails.watchlist_portfolio_users.toLocaleString()}` : ''}`}
      />
      {/* Market Stats */}
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex items-center justify-between">
          <Text text="Market Cap" size="sm" color="white" />
          <Text
            text={
              coinDetails?.market_data?.market_cap?.usd?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }) || '...'
            }
            size="sm"
            color="white"
          />
        </div>
        <div className="flex items-center justify-between">
          <Text text="Fully Diluted Valuation" size="sm" color="white" />
          <Text
            text={
              coinDetails?.market_data?.fully_diluted_valuation?.usd?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }) || '...'
            }
            size="sm"
            color="white"
          />
        </div>
        <div className="flex items-center justify-between">
          <Text text="24 Hour Trading Vol" size="sm" color="white" />
          <Text
            text={
              coinDetails?.market_data?.total_volume?.usd?.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0,
              }) || '...'
            }
            size="sm"
            color="white"
          />
        </div>
        <div className="flex items-center justify-between">
          <Text text="Circulating Supply" size="sm" color="white" />
          <Text
            text={coinDetails?.market_data?.circulating_supply?.toLocaleString() || '...'}
            size="sm"
            color="white"
          />
        </div>
        <div className="flex items-center justify-between">
          <Text text="Total Supply" size="sm" color="white" />
          <Text
            text={coinDetails?.market_data?.total_supply?.toLocaleString() || '...'}
            size="sm"
            color="white"
          />
        </div>
        <div className="flex items-center justify-between">
          <Text text="Max Supply" size="sm" color="white" />
          <Text
            text={coinDetails?.market_data?.max_supply?.toLocaleString() || '...'}
            size="sm"
            color="white"
          />
        </div>
      </div>
      {/* Info Links */}
      <div className="flex flex-col gap-2">
        <Text text="Info" size="sm" color="white" className="mb-1" />
        <div className="flex flex-wrap gap-2">
          {coinDetails?.links?.homepage?.[0] && (
            <a
              href={coinDetails.links.homepage[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 bg-[#181C17] text-xs text-white rounded border border-[#232820] hover:bg-[#232820]"
            >
              <Icon icon={Globe} size="xs" />
              Website
            </a>
          )}
          {coinDetails?.links?.whitepaper && (
            <a
              href={coinDetails.links.whitepaper}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 bg-[#181C17] text-xs text-white rounded border border-[#232820] hover:bg-[#232820]"
            >
              <Icon icon={FileText} size="xs" />
              Whitepaper
            </a>
          )}
          {coinDetails?.links?.blockchain_site?.[0] && (
            <a
              href={coinDetails.links.blockchain_site[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2 py-1 bg-[#181C17] text-xs text-white rounded border border-[#232820] hover:bg-[#232820]"
            >
              <Icon icon={Info} size="xs" />
              Explorer
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinInfoPanel;
