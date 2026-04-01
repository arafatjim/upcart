'use client'

import React, { useEffect, useState } from 'react'
import { Product } from '@/sanity.types'
import { useUser } from '@clerk/nextjs'

type CartItem = Product & { quantity: number }

const CartPage = () => {
  const { user } = useUser()
  const [items, setItems] = useState<CartItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCart = async () => {
      if (user?.id) {
        try {
          const res = await fetch('/api/cart')
          if (!res.ok) {
            throw new Error(await res.text())
          }
          const { cart } = await res.json()
          const normalized = cart.map((item: any) => ({
            _id: item.productId?._ref ?? item.productId?._id ?? item._id,
            name: item.productId?.name ?? item.productId?.title ?? '',
            price: item.productId?.price ?? 0,
            quantity: item.quantity ?? 1,
            image: item.productId?.image ?? [],
            stock: item.productId?.stock ?? 0,
            discount: item.productId?.discount ?? 0,
            productType: item.productId?.productType ?? 'other',
          }))
          setItems(normalized)
          setLoading(false)
          return
        } catch (error) {
          console.error('Failed to load backend cart', error)
        }
      }

      const stored = localStorage.getItem('upcart-cart')
      if (stored) {
        try {
          setItems(JSON.parse(stored))
        } catch {
          setItems([])
        }
      } else {
        setItems([])
      }
      setLoading(false)
    }

    fetchCart()
  }, [user?.id])

  const persist = async (nextItems: CartItem[]) => {
    setItems(nextItems)
    localStorage.setItem('upcart-cart', JSON.stringify(nextItems))
    window.dispatchEvent(new Event('upcart:cart-updated'))

    if (user?.id) {
      for (const item of nextItems) {
        try {
          await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId: item._id, quantity: item.quantity ?? 1 }),
          })
        } catch (error) {
          console.error('Failed sync cart to API', error)
        }
      }
    }
  }

  const removeItem = (_id: string) => {
    const updated = items.filter((item) => item._id !== _id)
    persist(updated)
  }

  const changeQty = (_id: string, delta: number) => {
    const updated = items.map((item) => {
      if (item._id === _id) {
        const qty = Math.max(1, (item.quantity ?? 1) + delta)
        return { ...item, quantity: qty }
      }
      return item
    })
    persist(updated)
  }

  const total = items.reduce((sum, item) => sum + (item.quantity || 1) * (item.price || 0), 0)

  return (
    <div className='p-4 md:p-8'>
      <h1 className='text-2xl font-bold mb-4'>Your Cart</h1>
      {loading ? (
        <p className='text-gray-500'>Loading cart...</p>
      ) : items.length === 0 ? (
        <p className='text-gray-500'>Cart is empty. Add products to cart from shop.</p>
      ) : (
        <div className='space-y-4'>
          {items.map((item) => (
            <div key={item._id} className='border rounded p-4 flex flex-col md:flex-row gap-4 items-start md:items-center'>
              <div className='flex-1'>
                <h2 className='font-semibold'>{item.name}</h2>
                <p className='text-sm text-gray-600'>Price: {item.price?.toFixed(2) ?? 0} TK</p>
                <p className='text-sm text-gray-600'>Qty: {item.quantity ?? 1}</p>
              </div>
              <div className='flex gap-2'>
                <button className='btn' onClick={() => changeQty(item._id, -1)}>-</button>
                <button className='btn' onClick={() => changeQty(item._id, 1)}>+</button>
                <button className='btn bg-red-500 text-white px-2 rounded' onClick={() => removeItem(item._id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className='text-lg font-bold'>Total: {total.toFixed(2)} TK</div>
        </div>
      )}
    </div>
  )
}

export default CartPage
