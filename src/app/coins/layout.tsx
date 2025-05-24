import { Compass } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Icon } from '@/components/bricks/Icon';

export default function HeaderLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#181C17] flex flex-col fixed w-full">
      {/* App Bar */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-[#232820]">
        <div className="flex items-center gap-2 text-white font-bold text-lg">
          <Icon icon={Compass} color="white" />
          <Link href="/coins">CoinTracker</Link>
        </div>
        <div className="flex items-center gap-4">
          <button className="w-8 h-8 rounded-full bg-[#232820] flex items-center justify-center text-white">
            ?
          </button>
          <button className="w-8 h-8 rounded-full bg-[#232820] flex items-center justify-center text-white">
            👤
          </button>
        </div>
      </header>
      {children}
    </div>
  );
}
