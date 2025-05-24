'use client';

import { useRouter } from 'next/navigation';

import { ICoinListResponse } from '@/interfaces/coins';
import useCoinsApi from '@/services/rest-api-hooks/coins/useCoinsApi';
import useCoinsListStore from '@/store/useCoinsListStore';

const useCoinsList = () => {
  const {
    coinsList,
    filteredCoinsList,
    selectedCoinId,
    isLoading,
    setCoinsList,
    setFilteredCoinsList,
    setSelectedCoinId,
    setIsLoading,
  } = useCoinsListStore();

  const { getCoinsList } = useCoinsApi();
  const router = useRouter();

  /**
   * Fetch the list of coins with localStorage caching
   */
  const fetchCoinsList = async () => {
    try {
      setIsLoading(true);
      const response = await getCoinsList();
      if (response?.status === 200) {
        setCoinsList(response.data);
        setFilteredCoinsList([...response.data]);
      }
    } catch (error) {
      // Optionally handle error
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Search for a coin
   * @param value - The value to search for
   */
  const onSearch = (value: string) => {
    if (value.length > 0) {
      setFilteredCoinsList(
        coinsList.filter(
          (c: ICoinListResponse) =>
            c.symbol.toLowerCase().includes(value.toLowerCase()) ||
            c.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredCoinsList(coinsList);
    }
  };

  /**
   * View the details of a coin
   */
  const handleViewDetails = () => {
    if (selectedCoinId) {
      router.push(`/coins/${selectedCoinId}/dashboard`);
    }
  };

  return {
    coinsList,
    filteredCoinsList,
    selectedCoinId,
    setSelectedCoinId,
    isLoading,
    fetchCoinsList,
    onSearch,
    handleViewDetails,
  };
};

export default useCoinsList;
