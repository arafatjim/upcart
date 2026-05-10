
"use client"

import { Category } from '@/sanity.types'
import { PRODUCT_BY_CATEGORY_QUERY_RESULT } from '@/sanity.types'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import { Button } from './button';
import { client } from '@/sanity/lib/client';
import { Loader2 } from 'lucide-react';
import { PRODUCT_BY_CATEGORY_QUERY } from '@/sanity/Queries/query';
import ProductCart from './ProductCart';
import NoProductAvailable from './NoProductAvailable';


interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [products, setProducts] = useState<PRODUCT_BY_CATEGORY_QUERY_RESULT>([]);
  const [loading, setLoading] = useState(false);
  const [currentSlug, setCurrentSlug] = useState(slug);
  const router = useRouter();

  useEffect(() => {
    setCurrentSlug(slug);
  }, [slug]);

  const fetchProductsByCategory = async (categorySlug: string) => {
    setLoading(true);
    try {
      const response = await client.fetch(PRODUCT_BY_CATEGORY_QUERY, { slug: categorySlug });
      setProducts(response);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentSlug) {
      fetchProductsByCategory(currentSlug);
    }
  }, [currentSlug]);

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    setCurrentSlug(newSlug);
    router.push(`/category/${newSlug}`, { scroll: false });
  };

  return (
    <div className='py-4 px-0.5 flex flex-col md:flex-row items-start gap-4'>
      {/* Category List */}
      <div className='rounded-xs flex-col p-.5 border-2 bg-white w-full md:w-1/4 lg:w-1/5'>
        {categories?.map((item) => (
          <Button
            key={item._id}
            onClick={() => handleCategoryChange(item.slug?.current || '')}
            className={`border-0 w-full p-2 rounded-none justify-start shadow-none font-semibold border-b-2 last:border-b-0 capitalize
              ${item?.slug?.current === currentSlug
                ? 'bg-success text-white hover:bg-warning hover:text-gray-600'
                : 'bg-white text-black hover:bg-warning hover:text-gray-600'
              }`}
          >
            <p>{item?.title}</p>
          </Button>
        ))}
      </div>

      {/* Products */}
      <div className='flex-1 '>
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-full gap-4 bg-light max-h-full mt-10">
            <Loader2 className="animate-spin flex mx-auto items-center justify-center my-auto w-10 h-10" size={30} />
            <p className='text-center text-gray-600 mt-2'>Products are loading...</p>
          </div>
        ) : products?.length > 0 ? (
          <div className="grid px-4 items-start rounded-md bg-white grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2.5 mt-0">
            {products?.map((product) => (
               <ProductCart key={product._id} product={product} />
            ))}
          </div>
        ) : (
          
          <NoProductAvailable selectedTab={currentSlug} className='mt-0 w-full h-full'/>
        )}
      </div>
    </div>
  )
}

export default CategoryProducts