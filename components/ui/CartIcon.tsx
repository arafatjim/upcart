'use client'
import { useUser } from '@clerk/nextjs'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type CartCountItem = { quantity?: number }

type CartApiResponse = { cart?: CartCountItem[] }

const CartIcon = () => {
  const { user } = useUser()
  const [count, setCount] = React.useState<number>(0)

  React.useEffect(() => {
    const updateCount = async () => {
      if (user?.id) {
        try {
          const res = await fetch('/api/cart')
          if (!res.ok) {
            console.error('Failed to fetch cart count', await res.text())
            setCount(0)
            return
          }
          const data = (await res.json()) as CartApiResponse
          const total = (data.cart || []).reduce((acc, item) => acc + (item.quantity || 0), 0)
          setCount(total)
          return
        } catch (error) {
          console.error(error)
          setCount(0)
          return
        }
      }

      const cartData = localStorage.getItem('upcart-cart')
      if (!cartData) {
        setCount(0)
        return
      }

      try {
        const cartItems = JSON.parse(cartData) as CartCountItem[]
        const total = cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)
        setCount(total)
      } catch {
        setCount(0)
      }
    }

    updateCount()
    window.addEventListener('upcart:cart-updated', updateCount)
    return () => window.removeEventListener('upcart:cart-updated', updateCount)
  }, [user?.id])

  return (
    <Link href="/cart" className="group relative">
      <ShoppingBag className='w-4 h-4 md:w-5 md:h-5 text-primary-foreground group-hover:text-warning transition-colors duration-300 ease-in-out group hoverEffect '/>
      <span className='absolute font-mono -top-2 -right-2 text-white w-4 h-4 p-2 rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform duration-300 ease-in-out hoverEffect'>{count}</span>
    </Link>
  )
}

export default CartIcon
