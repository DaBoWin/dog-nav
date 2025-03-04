'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/siteConfig';

export default function Header({ onSearch }: { onSearch: (term: string) => void }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--catppuccin-surface0)] bg-[var(--catppuccin-base)]/80 backdrop-blur-lg">
      <div className="mx-auto max-w-[1200px] p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-[#0d0c22]">
                {siteConfig.title}
              </h1>
              <p className="text-sm text-gray-600 self-end mb-1">
                {siteConfig.slogan}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#24292F] transition-colors"
            >
              <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0088CC] transition-colors"
            >
              <img src="/icons/telegram.svg" alt="Telegram" className="w-5 h-5" />
              <span className="hidden sm:inline">加入群组</span>
            </a>
            <div className="relative w-60">
              <input
                type="text"
                placeholder="搜索VPS资源..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-1.5 rounded-full border border-[#e7e7e9] focus:outline-none focus:ring-2 focus:ring-[var(--catppuccin-peach)] text-sm"
              />
              <svg className="absolute right-3 top-2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 