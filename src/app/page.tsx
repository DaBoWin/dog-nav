'use client';

import { useState } from 'react';
import { categories, navItems } from '@/config/siteConfig';
import NavCard from '@/components/NavCard';
import Header from '@/components/Header';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = searchTerm
    ? navItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <main className="max-w-[1200px] mx-auto p-4">
        {searchTerm ? (
          <div className="card-grid">
            {filteredItems.map((item) => (
              <NavCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          categories.map((category) => {
            const categoryItems = navItems.filter(
              (item) => item.categoryId === category.id
            );
            
            return (
              <section key={category.id} className="category-section">
                <h2 className="category-title">
                  <span className="inline-flex items-center">
                    <img 
                      src={category.icon} 
                      alt={category.name}
                      className="w-5 h-5 mr-2"
                    />
                    {category.name}
                  </span>
                  {category.description && (
                    <span className="ml-3 text-xs font-normal text-[var(--catppuccin-peach)]">
                      {category.description}
                    </span>
                  )}
                </h2>
                <div className="card-grid">
                  {categoryItems.map((item) => (
                    <NavCard key={item.id} item={item} />
                  ))}
                </div>
              </section>
            );
          })
        )}
      </main>
    </div>
  );
}