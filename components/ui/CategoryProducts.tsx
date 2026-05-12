
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
import { AnimatePresence, motion } from 'motion/react';


interface Props {
  categories: Category[];
  slug: string;
}

const CategoryProducts = ({ categories, slug }: Props) => {
  const [products, setProducts] = useState<PRODUCT_BY_CATEGORY_QUERY_RESULT>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          console.log(`Fetching products for slug: ${slug}`);
          const response = await client.fetch<PRODUCT_BY_CATEGORY_QUERY_RESULT>(PRODUCT_BY_CATEGORY_QUERY, { slug });
          console.log(`Fetched ${response?.length || 0} products`);
          setProducts(response || []);
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.error("Error fetching products:", errorMessage);
          setError(errorMessage);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [slug]);

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === slug) return;
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
              ${item?.slug?.current === slug
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
        {error && (
          <div className="flex flex-col items-center justify-center py-10 gap-4 bg-red-50 text-red-700 rounded-md p-4">
            <p className='text-center font-semibold'>Error loading products</p>
            <p className='text-center text-sm'>{error}</p>
          </div>
        )}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-10 min-h-full gap-4 bg-light max-h-full mt-10">
            <Loader2 className="animate-spin flex mx-auto items-center justify-center my-auto w-10 h-10" size={30} />
            <p className='text-center text-gray-600 mt-2'>Products are loading...</p>
          </div>
        ) : products?.length > 0 ? (
          <div className="grid px-4 items-start rounded-md bg-white grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2.5 mt-0 w-full">
            <AnimatePresence mode="popLayout">
              {products?.map((product) => (
                <motion.div 
                  key={product._id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCart product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          
          <NoProductAvailable selectedTab={slug} className='mt-0 w-full h-full'/>
        )}
      </div>
    </div>
  )
}

export default CategoryProducts