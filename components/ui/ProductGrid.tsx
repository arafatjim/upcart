"use client"
import React, { useState } from 'react'
import HomeTabBar from './HomeTabBar';
import { productType } from '@/Constants/data';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '');
  return (
    
    <div className='py-8 px-4'>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  )
}

export default ProductGrid
