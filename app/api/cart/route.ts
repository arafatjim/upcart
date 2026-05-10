import { NextRequest, NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { client } from '@/sanity/lib/client'

type OrderProductItem = {
  productId?: { _ref?: string }
  quantity?: number
}

type Order = {
  _id: string
  products?: OrderProductItem[]
}

type LineItem = {
  _key: string
  productId: { _type: 'reference'; _ref: string }
  quantity: number
}

async function getPendingOrder(userId: string): Promise<Order | null> {
  const order = await client.fetch(
    `*[_type == "order" && clarkUserId == $userId && status == "pending"][0]`,
    { userId }
  )
  return order
}

export async function GET() {
  const user = await currentUser()

  if (!user?.id) {
    return NextResponse.json({ cart: [] })
  }

  const order = await getPendingOrder(user.id)
  if (!order) {
    return NextResponse.json({ cart: [] })
  }

  return NextResponse.json({ cart: order.products || [], orderId: order._id })
}

export async function POST(request: NextRequest) {
  const user = await currentUser()

  if (!user?.id) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  const body = (await request.json()) as { productId?: string; quantity?: number }
  const { productId, quantity = 1 } = body

  if (!productId) {
    return NextResponse.json({ error: 'productId is required' }, { status: 400 })
  }

  const existingOrder = await getPendingOrder(user.id)

  const productResult = await client.fetch(`*[_type == "product" && _id == $id][0]`, {
    id: productId,
  })

  if (!productResult) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 })
  }

  const lineItem = {
    _key: productId,
    productId: { _type: 'reference', _ref: productId },
    quantity,
  }

  if (!existingOrder) {
    const orderNumber = `ORD-${Date.now()}`
    const totalPrice = (productResult.price || 0) * quantity

    const createdOrder = await client.create({
      _type: 'order',
      orderNumber,
      customerName: user.fullName || user.firstName || 'Unknown',
      clarkUserId: user.id,
      customerEmail: user.emailAddresses?.[0]?.emailAddress ?? '',
      stripeCustomerId: '',
      products: [lineItem],
      totalPrice,
      currency: 'BDT',
      amountDiscount: 0,
      status: 'pending',
      orderDate: new Date().toISOString(),
    })

    return NextResponse.json({ cart: createdOrder.products, orderId: createdOrder._id })
  }

  // update existing order
  const existingProductIndex = (existingOrder.products || []).findIndex((item) => item.productId?._ref === productId)

  let updatedProducts: Array<OrderProductItem | LineItem> = existingOrder.products || []

  if (existingProductIndex > -1) {
    updatedProducts = updatedProducts.map((item) => {
      if (item.productId?._ref === productId) {
        return { ...item, quantity: (item.quantity || 0) + quantity }
      }
      return item
    })
  } else {
    updatedProducts = [...updatedProducts, lineItem]
  }

  const productPrice = typeof productResult.price === 'number' ? productResult.price : 0
  const totalPrice = updatedProducts.reduce((total, item) => {
    const quantityValue = item.quantity || 0
    return total + quantityValue * productPrice
  }, 0)

  const updatedOrder = await client.patch(existingOrder._id)
    .set({ products: updatedProducts, totalPrice })
    .commit()

  return NextResponse.json({ cart: updatedOrder.products, orderId: updatedOrder._id })
}

export async function PUT(request: NextRequest) {
  const user = await currentUser()
  if (!user?.id) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  const body = await request.json()
  const { productId, quantity } = body

  if (!productId || typeof quantity !== 'number' || quantity < 1) {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }

  const existingOrder = await getPendingOrder(user.id)
  if (!existingOrder) {
    return NextResponse.json({ error: 'Cart not found' }, { status: 404 })
  }

  const products = (existingOrder.products || []).map((item) =>
    item.productId?._ref === productId ? { ...item, quantity } : item
  )

  const updatedOrder = await client.patch(existingOrder._id).set({ products }).commit()
  return NextResponse.json({ cart: updatedOrder.products })
}

export async function DELETE(request: NextRequest) {
  const user = await currentUser()
  if (!user?.id) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')

  if (!productId) {
    return NextResponse.json({ error: 'productId is required' }, { status: 400 })
  }

  const existingOrder = await getPendingOrder(user.id)
  if (!existingOrder) {
    return NextResponse.json({ error: 'Cart not found' }, { status: 404 })
  }

  const filtered = (existingOrder.products || []).filter((item) => item.productId?._ref !== productId)

  const updatedOrder = await client.patch(existingOrder._id).set({ products: filtered }).commit()
  return NextResponse.json({ cart: updatedOrder.products })
}
