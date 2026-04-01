import { Product } from '@/sanity.types'
import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { useUser } from '@clerk/nextjs'

interface Props{
    product?: Product;
    className?: string;
}

const AddCartButton = ({ product, className }: Props) => {
    const { user } = useUser()
    const isOutOfStock = product?.stock === 0;
    const buttonClass = `${className} ${isOutOfStock ? 'w-full bg-gray-400  cursor-not-allowed' : 'bg-success w-full hover:text-gray-600 hover:bg-warning cursor-pointer'} flex font-bold items-center text-center justify-center rounded-md border-2 border-gray-400 text-nowrap gap-2 text-white text-xs mx-1 p-1 focus:shadow-outline transition duration-150 ease`;

    const addToLocalCart = () => {
        if (!product || isOutOfStock) return;
        const cartData = localStorage.getItem('upcart-cart');
        const cartItems = cartData ? (JSON.parse(cartData) as Array<any>) : [];
        const existingIndex = cartItems.findIndex((item) => item._id === product._id);

        if (existingIndex > -1) {
            cartItems[existingIndex].quantity += 1;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }

        localStorage.setItem('upcart-cart', JSON.stringify(cartItems));
        window.dispatchEvent(new Event('upcart:cart-updated'));
    }

    const addToBackendCart = async () => {
      if (!product || isOutOfStock) return;
      try {
        const response = await fetch('/api/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productId: product._id, quantity: 1 }),
        });

        if (!response.ok) {
          console.error('API cart add failed', await response.text());
          addToLocalCart();
          return;
        }

        const result = await response.json();
        window.dispatchEvent(new Event('upcart:cart-updated'));
        return result;
      } catch (err) {
        console.error(err);
        addToLocalCart();
      }
    }

    const handleClick = async () => {
      if (isOutOfStock) return;
      if (user?.id) {
        await addToBackendCart();
      } else {
        addToLocalCart();
      }
    }

  return (
    <div>
        <button className={buttonClass} onClick={handleClick}>
            <ShoppingBag size={14} />
            {isOutOfStock ?  "Out of Stock" : "Add to Cart"}
        </button>
    </div>
  )
}

export default AddCartButton
// 'bg-success flex font-bold items-center text-center justify-center rounded-2xl border-2 border-gray-400 text-nowrap gap-2 text-white text-xs mx-1 p-1 hover:bg-warning hover:text-gray-600 focus:shadow-outline transition duration-150 ease' id='addToCart' type='submit'