import { productType } from '@/Constants/data'
import Link from 'next/link'
import React from 'react'
// import { Button } from './button'
// import { log } from 'console';

interface Props{
  selectedTab?: string;
  onTabSelect?: (tab: string) => void;
}

const HomeTabBar = ({selectedTab, onTabSelect}: Props) => {
  return (
    <div className='bg-bglight flex flex-row whitespace-nowrap justify-between items-baseline h-auto px-2 py-4 gap-5 border-2 rounded-md text-xs font-semibold'>
      {/* left Tab-bar */}
      <div className='w-4/5 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7'>
        {productType?.map((item) => (
          <button
            key={item?.value}
            onClick={() => onTabSelect?.(item?.value)}
            className={`grid place-items-center border px-2 py-1.5 rounded-2xl bg-green-200/65 duration-300 hover:bg-warning hover:text-gray-800 ${
              selectedTab === item?.value ? "bg-success text-white" : ""
            }`}
          >
            {item?.title}
          </button>
        ))}
      </div>

      {/* RIGHT BUTTON */}
      <div className="w-1/5 flex justify-end">
        <Link
          href="/products"
          className="px-4 py-1.5 rounded-2xl border bg-green-200/50 hover:bg-green-500 hover:text-white transition-all duration-300"
        >
          View All
        </Link>
      </div>
    </div>
  )
}

export default HomeTabBar