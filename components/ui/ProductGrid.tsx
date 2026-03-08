"use client";
import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { client } from "@/sanity/lib/client";

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
  "brand": brand->title,
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

      {loading && <p>Loading...</p>}

      {!loading && products.length === 0 && <p>No products found</p>}

      <div className="grid grid-cols-2 gap-4 py-3  md:grid-cols-3 lg:grid-cols-4">
        {!loading &&
        products.map((product) => (
          <div key={product._id} className="border  p-2 bg-secondary rounded-md hover:border-gray-500 transition-colors duration-300 hover:shadow-lg hover:cursor-pointer hover:scale-095 hover:bg-success/10">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full  p-0.5 h-48 object-cover mb-2 rounded-md"
              />
            )}
            <h2>{product.name}</h2>
            <p>Price: TK {product.price}</p>
            <p>Type: {product.productType}</p>
            <p>Brand:{product.brand || "Unknown"} </p>
            <p>Discount:{product.discount || 0}%</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;