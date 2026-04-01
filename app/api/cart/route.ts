import { NextRequest, NextResponse } from 'next/server'
import { currentUser } from '@clerk/nextjs/server'
import { client } from '@/sanity/lib/client'

async function getPendingOrder(userId: string) {
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

  const loadedProducts = order.products?.map((entry: any) => ({
    ...entry,
    product: entry.productId?._ref ? null : entry.productId,
  }))

  return NextResponse.json({ cart: order.products || [], orderId: order._id })
}

export async function POST(request: NextRequest) {
  const user = await currentUser()

  if (!user?.id) {
    return NextResponse.json({ error: 'Authentication required' }, { status: 401 })
  }

  const body = await request.json()
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
  const existingProductIndex = (existingOrder.products || []).findIndex((item: any) => item.productId?._ref === productId)

  let updatedProducts = existingOrder.products || []

  if (existingProductIndex > -1) {
    updatedProducts = updatedProducts.map((item: any) => {
      if (item.productId?._ref === productId) {
        return { ...item, quantity: (item.quantity || 0) + quantity }
      }
      return item
    })
  } else {
    updatedProducts = [...updatedProducts, lineItem]
  }

  const totalPrice = updatedProducts.reduce((total: number, item: any) => {
    const productData = item.productId?._ref === productId ? productResult : null
    const itemPrice = productData?.price || 0
    return total + (item.quantity || 0) * itemPrice
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

  const products = (existingOrder.products || []).map((item: any) =>
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

  const filtered = (existingOrder.products || []).filter((item: any) => item.productId?._ref !== productId)

  const updatedOrder = await client.patch(existingOrder._id).set({ products: filtered }).commit()
  return NextResponse.json({ cart: updatedOrder.products })
}
