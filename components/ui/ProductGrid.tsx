"use client"
import React, { useEffect, useState } from 'react'
import HomeTabBar from './HomeTabBar';
import { productType } from '@/Constants/data';
import { useParams } from 'next/navigation';
import { client } from '@/sanity/lib/client';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.value);
const query = `
*[_type == "product" && productType == $productType ]{
  _id,
  name,
  price,
  productType,
  "image": image[0].asset->url,
  "categories": categories[]->title,
  "brand": brand->title
}`;
const params = { productType: selectedTab.toLocaleLowerCase() };
useEffect(() => {
  
    
    const fetchProducts = async () => {
      setLoading(true);
      try{
        const response = await client.fetch(query, params);
        console.log("Product response is : ", response);
        setProducts(response);
    }
    catch(error){
      console.log("Error is : ",error);
  }
  finally{
    setLoading(false);
  }
    }
    fetchProducts();
},[selectedTab]);

  // const [error, setError] = useState(null);
  return (
    
    <div className='py-8 px-4'>
      <HomeTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  )
}

export default ProductGrid
