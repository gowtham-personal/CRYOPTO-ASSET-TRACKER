import React from 'react';

import { cn } from '@/components/shadcn/lib/utils';

import useCoinsList from './useCoinsList';

const CryptoList: React.FC = () => {
  const { filteredCoinsList, selectedCoinId, setSelectedCoinId } = useCoinsList();
  console.log('filteredCoinsList', filteredCoinsList);
  return (
    <ul className="flex flex-col gap-4 max-h-[30rem] min-h-[30rem] overflow-y-auto w-1/3">
      {filteredCoinsList.map(coin => (
        <li
          key={coin.id}
          className={cn(
            'flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors',
            selectedCoinId === coin.id ? 'bg-[#232820]' : 'hover:bg-[#232820]'
          )}
          onClick={() => setSelectedCoinId(coin.id)}
          tabIndex={0}
          aria-label={coin.name}
        >
          <div className="text-2xl w-10 h-10 flex items-center justify-center bg-[#e9f0e5] rounded-md">
            {coin.name.slice(0, 1)}
          </div>
          <div className="flex flex-col">
            <span className="text-white font-medium">{coin.symbol}</span>
            <span className="text-[#8A8F8A] text-sm">{coin.name}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CryptoList;
