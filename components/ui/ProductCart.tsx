import { Product } from '@/sanity.types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import React from 'react'
import Link from 'next/link';
import {
  Flame,
  CheckCircle,
  XCircle,
  Zap,
  Star,
  Clock,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import AddToWishListBtn from './AddToWishListBtn';

const statusConfig: Record<string, { text: string; className: string; icon: React.ElementType }> = {
  sale_product: { text: "Sale", className: "hover:bg-warning hover:text-gray-600", icon : Flame },
  available: { text: "Available", className: "hover:bg-warning hover:text-gray-600", icon: CheckCircle },
  out_of_stock: { text: "Out of Stock", className: "hover:bg-warning hover:text-gray-600", icon: XCircle },
  hot_deal: { text: "Hot Deal", className: "hover:bg-warning hover:text-gray-600", icon: Zap },
  best_seller: { text: "Best Seller", className: "hover:bg-warning hover:text-gray-600", icon: Star },
  pre_order: { text: "Pre Order", className: "hover:bg-warning hover:text-gray-600", icon: Clock},
  limited_edition: { text: "Limited Edition", className: "hover:bg-warning hover:text-gray-600", icon:Sparkles },
};

const ProductCart = ({product}:{product: Product}) => {
  const status = product?.status || "";
  const config = statusConfig[status];
  const Icon = config?.icon;
  return (
    <div className='text-sm border-2 p-1 border-dark/20  rounded-md grid grid-col-1 items-center justify-around gap-2 relative w-auto h-auto hover:shadow-lg hover:shadow-success'>
      
      <div className='relative group overflow-hidden w-full h-60 items-center border-2 border-gray-200 flex item-center p-1 rounded-sm justify-center gap-4'>
        
          <AddToWishListBtn product={product}/>
        
        {config && (
  <Link href={`${product?.status}`}
    className={`absolute top-1 left-1 flex items-center gap-1 px-1 py-.5 rounded-md text-xs border-2 border-gray-600 text-white bg-success ${config.className}`}
  >
    {Icon && <Icon size={14} />}
    {config.text}
  </Link>
)}
        
        {product.image && product.image[0] && (
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.name || "product"}
          width={700}
          height={200}
        />
      )}
        
      </div>
     
          <div className='flex text-nowrap justify-around gap-2 items-center'>
            <button className='px-2 py-1 w-1/2 bg-success text-white text-sm rounded-sm hover:bg-warning hover:text-gray-600'>View</button>
          <button className='px-2 py-1 bg-success text-white text-sm rounded-sm hover:bg-warning hover:text-gray-600'>Add to Cart</button>
          </div>
    </div>
  )
}

export default ProductCart
