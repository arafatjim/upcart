import { productType } from '@/Constants/data'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import { log } from 'console';
interface Props{
    selectedTab?: string;
    onTabSelect?: (tab: string) => void;
}

const HomeTabBar = ({selectedTab, onTabSelect}: Props) => {
  return (
    <div className='flex flex-row flex-nowrap justify-between items-baseline h-auto px-2 py-4 gap-5  border-2 bg-light rounded-md text-xs  font-semibold '>
      {/* left Tab-bar */}
      <div className='w-4/5 flex flex-wrap justify-start gap-6 font-semibold  items-center'>
        {/* {productType?.map((item)=>(
        <button onClick={()=> onTabSelect?.(item?.title)} key={item?.title} className={`border px-2 py-1.5 rounded-2xl bg-green-200/50 border-gray-400 cursor-pointer md:px-6 md:py-2  hover:bg-success hover:text-white transition-colors duration-300 ${selectedTab === item?.title ? 'bg-success text-white' : ''}`} >{item?.title}</button>
      ))} */}
      {productType?.map((item) => (
  <button
    key={item?.value}
    onClick={() => onTabSelect?.(item?.value)}
    className={`border px-2 py-1.5 rounded-2xl bg-green-200/50 border-gray-400 cursor-pointer md:px-6 md:py-2 hover:bg-warning hover:text-gray-600 transition-colors duration-300 ${
      selectedTab === item?.value ? "bg-success text-white" : ""
    }`}
  >
    {item?.title}
  </button>
))}
      </div>
      
        <div className='w-1/5 flex flex-nowrap justify-end items-center gap-4'>
          {/* right Tab-bar */}
        <Link href={'/shop'} className='border text-nowrap  justify-end px-2 py-1.5 bg-green-200/50 rounded-2xl border-gray-400  md:py-2  hover:bg-success hover:text-white transition-colors duration-300'>See All</Link>
        </div>
    </div>
  )
}

export default HomeTabBar
