'use client';

import { Loader2 } from 'lucide-react';
import React, { useEffect } from 'react';

import { Button } from '@/components/bricks';
import CryptoList from '@/components/coins-list/CryptoList';
import SearchBar from '@/components/coins-list/SearchBar';
import useCoinsList from '@/components/coins-list/useCoinsList';
import { PageErrorBoundary } from '@/components/common';

export default function CoinsListPage() {
  const { isLoading, fetchCoinsList, handleViewDetails } = useCoinsList();

  useEffect(() => {
    fetchCoinsList();
  }, []);

  return (
    <PageErrorBoundary>
      <div className="min-h-screen bg-[#181C17] flex flex-col">
        {/* Main Content */}
        <main className="flex flex-col items-center flex-1 w-full pt-12 gap-5">
          <h1 className="text-3xl font-bold text-white">Choose a cryptocurrency</h1>
          <SearchBar /> {/* TODO: Add debounce */}
          {isLoading ? (
            <div className="flex items-center justify-center h-full">
              <Loader2 className="w-8 h-8 animate-spin text-white" />
            </div>
          ) : (
            <CryptoList />
          )}
          <div className="w-1/4 flex justify-end mt-10">
            <Button
              variant="solid"
              size="md"
              color="blue"
              text="View Details"
              onClick={handleViewDetails}
            />
          </div>
        </main>
      </div>
    </PageErrorBoundary>
  );
}
