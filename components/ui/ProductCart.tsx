// import { Product } from '@/sanity.types'
// import Image from 'next/image'
// import { urlFor } from '@/sanity/lib/image'
// import React from 'react'
// import Link from 'next/link';
// import {
//   Flame,
//   CheckCircle,
//   XCircle,
//   Zap,
//   Star,
//   Clock,
//   AlertTriangle,
//   Sparkles,
//   ShoppingBag,
//   StarIcon,
// } from "lucide-react";
// import AddToWishListBtn from './AddToWishListBtn';
// import CartIcon from './CartIcon';
// import AddCartButton from './AddCartButton';

// const statusConfig: Record<string, { text: string; className: string; icon: React.ElementType }> = {
//   sale_product: { text: "Sale", className: "hover:bg-warning hover:text-gray-600", icon : Flame },
//   available: { text: "Available", className: "hover:bg-warning hover:text-gray-600", icon: CheckCircle },
//   out_of_stock: { text: "Out of Stock", className: "hover:bg-warning hover:text-gray-600", icon: XCircle },
//   hot_deal: { text: "Hot Deal", className: "hover:bg-warning hover:text-gray-600", icon: Zap },
//   best_seller: { text: "Best Seller", className: "hover:bg-warning hover:text-gray-600", icon: Star },
//   pre_order: { text: "Pre Order", className: "hover:bg-warning hover:text-gray-600", icon: Clock},
//   limited_edition: { text: "Limited Edition", className: "hover:bg-warning hover:text-gray-600", icon:Sparkles },
// };

// const ProductCart = ({product}:{product: Product}) => {
//   const status = product?.status || "";
//   const config = statusConfig[status];
//   const Icon = config?.icon;
//   const rating = product?.rating || 0;
//   const price =product?.price || 0;
//   const discount =product?.discount || 0;
//   const discountedPrice = discount > 0 ? price - (price * discount) / 100 : price;
//   const productName= product?.name || "Product Name";
//   const inStock = product?.stock || 0;
//   const productType = product?.productType || "Unknown Type";
//   const totalDiscountAmount = price - discountedPrice;
//   return (
//     <div className='bg-light rounded-md border p-2 flex flex-col hover:shadow-lg shadow-gray-400 transition-shadow duration-300'>
      
//       <div className='relative group flex items-center justify-center'>
        
          
        
//         {config && (
//   <Link href={`${product?.status}`}
//     className={`absolute flex top-1 left-1 items-center gap-1 px-1 p-1 rounded-full text-xs border-2 border-gray-600 text-white bg-success ${config.className}`}
//   >
//     {Icon && <Icon size={14} />}
//     {/* {config?.text} */}
    

//   </Link>
  
// )}
//     <div>
//       <AddToWishListBtn product={product}/>
//     </div>
        
//         <div className='w-full h-48 sm:h-56 md:h-64 overflow-hidden items-center'>
//             {product.image && product.image[0] && (
//             <Image
//               src={urlFor(product.image[0]).url()}
//               alt={product.name || "product"}
//               loading='lazy'
//               width={300}
//               height={300}
//               className=' w-full h-full  object-cover group-hover:scale-105 transition-transform duration-300'
//             />
//             )}
//         </div>
//       <div className='absolute top-1 right-1 flex flex-col items-end gap-1'>
//         <p className=' bg-dark text-white  text-xs border-2 border-gray-400 rounded-2xl px-1'>{discount}%OFF</p>
//         <p className=' bg-dark text-white  text-xs border-2 border-gray-400 rounded-2xl px-1'>Save:{totalDiscountAmount.toFixed(2)}TK</p>
//       </div>
        
//       </div>
     
//           <div className='flex flex-col gap-1 px-2 py-1'>
//             <div className='flex items-center gap-2 text-xs font-bold text-gray-400 uppercase'>
//               Type:
//               <p className=''>
                
//               {productType.charAt(0).toUpperCase() + productType.slice(1)}
//             </p> 
            
//             </div>
//             {/* Review and Rating */}
//             <div className='flex gap-0.5 text-xs'>
//               <div className='flex items-center gap-.5 text-xs'>
//               {
//                 [...Array(5)].map((_, index)=>{
//                   const starFilled = index < Math.round(rating);
//                   return <StarIcon key={index} size={12} className={starFilled ? 'text-yellow-600' : 'text-success'} fill={starFilled ? 'currentColor' : '#0dcaf0'} />
//                 })
//               }
              
//             </div>
            
//             <div className="reviews  font-bold text-gray-400 text-nowrap tracking-wide pl-1">
//                5 reviews
//             </div>
//             </div>
//             <h3 className='font-semibold textd-xl text-success text-start'>
//               {productName?.length > 20 ? `${productName.slice(0, 16)}` : productName}
//             </h3>
//             <p className='text-xs font-bold text-gray-400'>{rating ? `Rating: ${rating} /5.0` : "Rating: NAN"}</p>
//             <div className='flex  gap-2'>

//               <p className='text-xs font-bold text-success'>{discountedPrice.toFixed(2)}TK</p>
//               <div className='flex text-xs items-center gap-1 font-bold text-gray-400'>
                
//               <p className=' text-red-500 line-through'> {discount > 0 ? ` ${price.toFixed(2)}TK` : '' }</p>
//               </div>
            
//             </div>
            
//             <p className={`${inStock > 0 ? 'text-sm font-semibold text-green-600' : 'text-sm font-semibold text-gray-400'}`}>
//               {inStock > 0 ? `In Stock: ${inStock}` : "Out of Stock"}
//             </p>
            
//           <AddCartButton product={product} />
//           </div>
//     </div>
//   )
// }

// export default ProductCart
import { Product, PRODUCT_QUERY_RESULT } from '@/sanity.types'
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
  Sparkles,
  StarIcon,
} from "lucide-react";
import AddToWishListBtn from './AddToWishListBtn';
import AddCartButton from './AddCartButton';

const statusConfig: Record<string, { text: string; className: string; icon: React.ElementType }> = {
  sale_product: { text: "Sale", className: "hover:bg-warning hover:text-gray-600", icon : Flame },
  available: { text: "Available", className: "hover:bg-warning hover:text-gray-600", icon: CheckCircle },
  out_of_stock: { text: "Out of Stock", className: "hover:bg-warning hover:text-gray-600", icon: XCircle },
  hot_deal: { text: "Hot Deal", className: "hover:bg-warning hover:text-gray-600", icon: Zap },
  best_seller: { text: "Best Seller", className: "hover:bg-warning hover:text-gray-600", icon: Star },
  pre_order: { text: "Pre Order", className: "hover:bg-warning hover:text-gray-600", icon: Clock},
  limited_edition: { text: "Limited Edition", className: "hover:bg-warning hover:text-gray-600", icon:Sparkles },
};

type ProductCartItem = Product | PRODUCT_QUERY_RESULT[number];

const ProductCart = ({product}:{product: ProductCartItem}) => {
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
    <div className='bg-light rounded-md border p-2 flex flex-col hover:shadow-lg shadow-gray-400 transition-shadow duration-300'>
      
      <div className='relative group flex items-center justify-center'>
        
          
        
        {config && (
  <Link href={`${product?.status}`}
    className={`absolute flex top-1 left-1 items-center gap-1 px-1 p-1 rounded-full text-xs border-2 border-gray-600 text-white bg-success ${config.className}`}
  >
    {Icon && <Icon size={14} />}
    {/* {config?.text} */}
    

  </Link>
  
)}
    <div>
      <AddToWishListBtn />
    </div>
        
        <div className='w-full h-48 sm:h-30 md:h-64 overflow-hidden items-center'>
            {product.image && product.image[0] && (
            <Image
              src={urlFor(product.image[0]).url()}
              alt={product.name || "product"}
              loading='lazy'
              width={300}
              height={300}
              className=' w-full h-full rounded-md object-cover group-hover:scale-105 transition-transform duration-300'
            />
            )}
        </div>
      <div className='absolute top-1 right-1 flex flex-col items-end gap-1'>
        <p className=' bg-dark text-white  text-xs border-2 border-gray-400 rounded-2xl px-1'>{discount}%OFF</p>
        <p className=' bg-dark text-white  text-xs border-2 border-gray-400 rounded-2xl px-1'>-{totalDiscountAmount.toFixed(2)}TK</p>
      </div>
        
      </div>
     
          <div className='flex flex-col gap-1 px-1 py-1'>
            <div className='flex items-center gap-2 text-xs font-bold text-gray-400 uppercase'>
              Type:
              <p className=''>
                
              {productType ? productType.charAt(0).toUpperCase() + productType.slice(1) : "Unknown Type"}
            </p> 
            
            </div>
            {/* Review and Rating */}
            <div className='flex gap-0.5 text-xs'>
              <div className='flex items-center gap-.5 text-xs'>
              {
                [...Array(5)].map((_, index)=>{
                  const starFilled = index < Math.round(rating);
                  return <StarIcon key={index} size={12} className={starFilled ? 'text-yellow-600' : 'text-success'} fill={starFilled ? 'currentColor' : '#0dcaf0'} />
                })
              }
              
            </div>
            
            <div className="reviews  font-bold text-gray-400 text-nowrap tracking-wide pl-1">
                5 reviews
            </div>
            </div>
            <a className='font-semibold textd-sm text-success text-start'>
              {productName?.length > 20 ? `${productName.slice(0, 16)}...` : productName}
            </a>
            <p className='text-xs font-bold text-gray-400'>{rating ? `Rating: ${rating} /5.0` : "Rating: NAN"}</p>
            <div className='flex  gap-2'>

              <p className='text-xs font-bold text-success'>{discountedPrice.toFixed(2)}TK</p>
              <div className='flex text-xs items-center gap-1 font-bold text-gray-400'>
                
              <p className=' text-red-500 line-through'> {discount > 0 ? ` ${price.toFixed(2)}TK` : '' }</p>
              </div>
            
            </div>
            
            <p className={`${inStock > 0 ? 'text-sm font-semibold text-green-600' : 'text-sm font-semibold text-gray-400'}`}>
              {inStock > 0 ? `In Stock: ${inStock}` : "Out of Stock"}
            </p>
            
          <AddCartButton product={product} />
          </div>
    </div>
  )
}

export default ProductCart