import { useState } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import type { NavItem } from '../config/siteConfig';

export default function NavCard({ item }: { item: NavItem }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleCopyCode = (e: React.MouseEvent, code: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
    alert('优惠码已复制到剪贴板！');
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.bottom + window.scrollY
    });
    setShowTooltip(true);
    // 5秒后自动隐藏
    setTimeout(() => setShowTooltip(false), 5000);
  };

  return (
    <div className="block w-full group">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full mb-2"
        >
          <div className="
            bg-white
            rounded-xl
            transition-all duration-300
            hover:translate-y-[-4px]
            p-4
            h-auto
            min-h-[80px]
            hover:shadow-[0_8px_16px_rgba(0,0,0,0.08)]
            relative
            border border-gray-100
            group-hover:border-gray-200
          ">
            <div className="flex items-start gap-3">
              <div className="shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <h3 className="font-semibold text-[15px] text-gray-900 mb-1 truncate">
                  {item.title}
                </h3>
                <p className="text-[13px] text-gray-500 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </a>

        {/* Telegram 链接样式优化 */}
        {(item.telegram?.group || item.telegram?.channel) && (
          <div className="flex gap-3 px-1">
            {item.telegram?.group && (
              <a
                href={item.telegram.group}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[12px]
                  text-blue-600
                  hover:text-blue-700
                  flex items-center gap-1.5
                  bg-blue-50
                  px-2.5
                  py-1
                  rounded-full
                  transition-colors
                "
              >
                <img src="/icons/telegram.svg" alt="Telegram" className="w-3.5 h-3.5" />
                TG群组
              </a>
            )}
            {item.telegram?.channel && (
              <a
                href={item.telegram.channel}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-[12px]
                  text-blue-600
                  hover:text-blue-700
                  flex items-center gap-1.5
                  bg-blue-50
                  px-2.5
                  py-1
                  rounded-full
                  transition-colors
                "
              >
                <img src="/icons/telegram.svg" alt="Telegram" className="w-3.5 h-3.5" />
                TG频道
              </a>
            )}
          </div>
        )}
      </div>

      {/* 产品信息 Tabs 样式优化 */}
      {item.products && (
        <div className="mt-3">
          <div className="flex flex-wrap gap-2">
            {item.products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(activeTab === product.location ? null : product.location)}
                className={`
                  text-[12px] px-3 py-1.5 rounded-full transition-all
                  font-medium whitespace-nowrap
                  ${activeTab === product.location 
                    ? 'bg-[var(--catppuccin-green)] text-white shadow-sm' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                {product.location}
              </button>
            ))}
          </div>
          
          {/* 产品详情 */}
          {item.products.map((product, index) => (
            <div
              key={index}
              className={`
                mt-1.5 bg-[var(--catppuccin-surface1)] rounded-lg overflow-hidden transition-all duration-200
                ${activeTab === product.location ? 'max-h-[500px]' : 'max-h-0'}
              `}
            >
              {activeTab === product.location && (
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[11px] mb-3">
                    {product.productName && (
                      <div className="col-span-2 flex items-center gap-1 mb-1">
                        <span className="text-gray-500 min-w-[36px]">产品</span>
                        <span className="font-medium text-[var(--catppuccin-text)]">{product.productName}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 min-w-[36px]">CPU</span>
                      <span>{product.cpu}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 min-w-[36px]">内存</span>
                      <span>{product.memory}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 min-w-[36px]">硬盘</span>
                      <span>{product.disk}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 min-w-[36px]">流量</span>
                      <span>{product.traffic}</span>
                    </div>
                    <div className="col-span-2 flex items-center gap-1">
                      <span className="text-gray-500 min-w-[36px]">备注</span>
                      <span className="text-[var(--catppuccin-teal)]">{product.additional}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 min-w-[36px]">价格</span>
                      <span className="text-[var(--catppuccin-peach)] font-medium">{product.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-500 min-w-[36px]">库存</span>
                      <span className={product.stock > 0 ? 'text-[var(--catppuccin-green)]' : 'text-[var(--catppuccin-red)]'}>
                        {product.stock > 0 ? '有货' : '缺货'}
                      </span>
                    </div>
                    {product.couponCode && (
                      <div className="col-span-2 flex items-center gap-1 mt-1">
                        <span className="text-gray-500 min-w-[36px]">优惠</span>
                        <span 
                          onClick={(e) => handleCopyCode(e, product.couponCode!)}
                          className="cursor-pointer inline-flex items-center gap-1 text-[var(--catppuccin-blue)] hover:text-[var(--catppuccin-peach)]"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                          {product.couponCode}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-1.5 mt-2">
                    <a
                      href={product.urls.normal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-1 bg-[var(--catppuccin-green)] text-white rounded-full text-[11px] hover:opacity-90 transition-opacity"
                    >
                      直接购买
                    </a>
                    {product.urls.aff && (
                      <a
                        href={product.urls.aff}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-1 bg-[var(--catppuccin-green)] text-white rounded-full text-[11px] hover:opacity-90 transition-opacity"
                      >
                        返利购买
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Tooltip 样式优化 */}
      {showTooltip && typeof document !== 'undefined' && createPortal(
        <div 
          style={{
            position: 'absolute',
            top: `${tooltipPosition.y + 8}px`,
            left: `${tooltipPosition.x}px`,
            transform: 'translateX(-50%)',
          }}
          className="
            bg-gray-900
            text-white 
            text-sm 
            p-3
            rounded-lg
            w-[300px]
            z-[9999]
            shadow-xl
            backdrop-blur-sm
            bg-opacity-90
          "
        >
          <div className="
            absolute 
            top-[-6px] 
            left-1/2 
            -translate-x-1/2 
            border-solid 
            border-b-black/80
            border-b-4 
            border-x-transparent 
            border-x-4 
            border-t-0
          "></div>
          <div className="text-xs leading-relaxed">
            {item.description}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}