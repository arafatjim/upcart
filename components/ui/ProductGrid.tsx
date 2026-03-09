"use client";
import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { client } from "@/sanity/lib/client";
import {AnimatePresence, motion} from "motion/react";
import { Loader2 } from "lucide-react";
import NoProductAvailabel from "./NoProductAvailabel";
import ProductCart from "./ProductCart";

const ProductGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState<string>("");

  const query = `
  *[_type == "product" && productType == $variant] {
  _id,
  name,
  price,
  productType,
  discount,
  "brand": brand->name,
  "imageUrl": image[0].asset->url
}
  `;

  const fetchProducts = async (variant: string) => {
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
  };

  useEffect(() => {
    if (selectedTab) {
      fetchProducts(selectedTab);
    }
  }, [selectedTab]);

  return (
    <div className="py-4 px-auto flex flex-col gap-4">
      <HomeTabBar  selectedTab={selectedTab} onTabSelect={setSelectedTab} />

      
      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 gap-4 bg-green-600 w-full mt-10">
          <div className="space-y-2 flex items-center text-gray-600">
            <Loader2 className="animate-spin flex mx-auto items-center justify-center w-5 h-6" size={24} />
            <span>Product is loading</span>
          </div>
        </div>
      ): 
        products?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          {products?.map ((products) =>(
            <AnimatePresence key={products?._id}>
              <motion.div>
                <ProductCart  />
              </motion.div>
            </AnimatePresence>
          ))}
          </div>
        ) : (
          <NoProductAvailabel selectedTab={selectedTab}/>
          )
      }
    </div>
  );
};

export default ProductGrid;