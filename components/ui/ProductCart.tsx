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
  ShoppingBag,
} from "lucide-react";
import AddToWishListBtn from './AddToWishListBtn';
import CartIcon from './CartIcon';

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
  const rating = product?.rating || 0;
  const price =product?.price || 0;
  const discount =product?.discount || 0;
  const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price;
  const productName= product?.name || "Product Name";
  const inStock = product?.stock || 0;
  const productType = product?.productType || "Unknown Type";
  const totalDiscountAmount = price - discountedPrice;
  return (
    <div className='flex flex-col bg-light border-2 border-gray-200 rounded-sm gap-2 p-1'>
      
      <div className='relative group overflow-hidden h-60 items-center border-2 border-gray-200 flex item-center p-1 rounded-sm justify-center gap-2'>
        
          <AddToWishListBtn product={product}/>
        
        {config && (
  <Link href={`${product?.status}`}
    className={`absolute top-1 left-1 flex items-center gap-1 px-1 py-.5 rounded-md text-xs border-2 border-gray-600 text-white bg-success ${config.className}`}
  >
    {Icon && <Icon size={14} />}
    {config.text}
  </Link>
)}
        
        <div className='relative group overflow-hidden bg-light'>
          {product.image && product.image[0] && (
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.name || "product"}
          width={700}
          height={200}
          className='{`w-full h-64 object-contain overflow-hidden transition-transform bg-banner hoverEffect group-hover:scale-105`}'
        />
        
      )}
        </div>
      <div className='absolute bottom-0.5 left-0 flex  md:right-0 md:flex-row justify-around items-center gap-2 w-full px-2 py-1 backdrop-blur-xs rounded-tl-sm rounded-tr-sm'>
        <p className=' bg-dark text-white  text-xs border-2 border-gray-400 rounded-2xl px-1'>{discount}%OFF</p>
        <p className=' bg-dark text-white  text-xs border-2 border-gray-400 rounded-2xl px-1'>Save:{totalDiscountAmount.toFixed(2)}TK</p>
      </div>
        
      </div>
     
          <div className='flex flex-col px-0 text-nowrap justify-around gap-1'>
            <div className='flex items-center gap-2'>
              Product Type:
              <p className='text-bold text-gray-400 uppercase text-xs'>
                
              {productType.charAt(0).toUpperCase() + productType.slice(1)}
            </p> 
            
            </div>
            <h3 className='font-semibold textd-xl text-success text-start'>
              {productName.length > 20 ? `${productName.slice(0, 16)}` : productName}
            </h3>
            <p className='text-xs font-bold text-gray-400'>{rating ? `Rating: ${rating} /5.0` : "Rating: NAN"}</p>
            <div className='flex flex-col gap-2'>

              <p className='text-sm font-bold text-success'>Price: {discountedPrice.toFixed(2)}TK</p>
              <div className='flex text-xs items-center gap-1'>
                <span>Regular Price:</span>
              <p className=' text-red-500 line-through'> {discount > 0 ? ` ${price.toFixed(2)}TK` : ""}</p>
              </div>
            
            </div>
            
            <p className='text-sm text-gray-400'>
              {inStock > 0 ? `In Stock: ${inStock}` : "Out of Stock"}
            </p>
            
          <button className='w-8/12 mx-auto my-2 p-2 bg-success text-white  rounded-2xl flex items-center justify-start gap-2 font-bold hover:bg-warning hover:text-gray-600 disabled:bg-gray-400 disabled:cursor-not-allowed' disabled={inStock === 0}>
            <ShoppingBag />
            Add to Cart
          </button>
          </div>
    </div>
  )
}

export default ProductCart
