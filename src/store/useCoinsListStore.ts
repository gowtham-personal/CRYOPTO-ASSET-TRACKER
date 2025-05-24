import { create } from 'zustand';

import { ICoinListResponse } from '@/interfaces/coins';

interface ICoinsListState {
  coinsList: ICoinListResponse[];
  filteredCoinsList: ICoinListResponse[];
  selectedCoinId: string;
  isLoading: boolean;
  setCoinsList: (coins: ICoinListResponse[]) => void;
  setFilteredCoinsList: (coins: ICoinListResponse[]) => void;
  setSelectedCoinId: (id: string) => void;
  setIsLoading: (loading: boolean) => void;
}

const useCoinsListStore = create<ICoinsListState>(
  (set: (partial: Partial<ICoinsListState>) => void) => ({
    coinsList: [],
    filteredCoinsList: [],
    selectedCoinId: '',
    isLoading: false,
    setCoinsList: (coins: ICoinListResponse[]) => set({ coinsList: coins }),
    setFilteredCoinsList: (coins: ICoinListResponse[]) => set({ filteredCoinsList: coins }),
    setSelectedCoinId: (id: string) => set({ selectedCoinId: id }),
    setIsLoading: (loading: boolean) => set({ isLoading: loading }),
  })
);

export default useCoinsListStore;
