"use client";
import React, { useCallback, useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from '@/Constants/data';
import { client } from "@/sanity/lib/client";
import {AnimatePresence, motion} from "framer-motion";
import { Loader2 } from "lucide-react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCart from "./ProductCart";
import { Product } from "@/sanity.types";

const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>(productType[0]?.value || "gadget");

  const query = `
  *[_type == "product" && productType == $variant] {
  _id,
  name,
  price,
  productType,
  discount,
  status,
  brand->{name},
  image,
  rating,
  stock,
  reviews[]{
    rating,
    comment
  }
}
  `;

  const fetchProducts = useCallback(async (variant: string) => {
    setLoading(true);
    try {
      const response = await client.fetch(query, {
        variant:selectedTab // dynamic value (gadget, accessory etc.)
      });

      console.log("Product response:", response);
      setProducts(response);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedTab]);

  useEffect(() => {
    if (selectedTab) {
      fetchProducts(selectedTab);
    }
  }, [selectedTab, fetchProducts]);

  return (
    <div className="py-4 px-auto flex flex-col gap-2">
      <HomeTabBar  selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-light w-full mt-10">
          <div className="space-y-2 gap-2 flex flex-col items-center text-gray-600">
            <Loader2 className="animate-spin flex mx-auto items-center justify-center w-10 h-10" size={24} />
            <span>Product is loading....</span>
          </div>
        </div>
      ): 
        products?.length ? (
          <div className="grid p-4 rounded-md bg-white grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {products?.map((product) =>(
            <AnimatePresence key={product?._id}>
              <motion.div layout initial={{opacity: 0.2}} animate={{opacity: 1}} exit={{opacity:0}} >
                <ProductCart product={product}/>
              </motion.div>
            </AnimatePresence>
          ))}
          </div>
        ) : (
          <NoProductAvailable selectedTab={selectedTab}/>
          )
      }
    </div>
  );
};

export default ProductGrid;