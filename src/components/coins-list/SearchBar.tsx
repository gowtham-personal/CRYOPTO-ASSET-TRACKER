import React from 'react';

import useCoinsList from './useCoinsList';

const SearchBar = () => {
  const { onSearch } = useCoinsList();

  return (
    <div className="flex items-center bg-[#232820] rounded-lg px-4 py-2 w-full max-w-xl">
      {/* <Search className="mr-2 text-[#8A8F8A]" size={20} /> */}
      <span className="mr-2 text-[#8A8F8A]">🔍</span>
      <input
        className="bg-transparent outline-none text-white placeholder-[#8A8F8A] w-full"
        type="text"
        placeholder="Search"
        onChange={e => onSearch(e.target.value)}
        aria-label="Search cryptocurrency"
      />
    </div>
  );
};

export default SearchBar;
