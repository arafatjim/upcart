"use client"
import React, { useEffect, useState } from "react";
import HomeTabBar from "./HomeTabBar";
import { productType } from "@/Constants/data";
import { client } from "@/sanity/lib/client";

const ProductGrid = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(
    productType[0]?.value || ""
  );

  const query = `
*[_type == "product"]{
  _id,
  ...,
  productType
}`;

  useEffect(() => {
    if (!selectedTab) return;

    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, {
          productType: selectedTab, // no toLowerCase needed
        });

        console.log("Product response is:", response);
        setProducts(response);
      } catch (error) {
        console.error("Error is:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedTab]);

  return (
    <div className="py-8 px-4">
      <HomeTabBar
        selectedTab={selectedTab}
        onTabSelect={setSelectedTab}
      />

      {loading && <p>Loading...</p>}

      {!loading &&
        products.map((product) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductGrid;