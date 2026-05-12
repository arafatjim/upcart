import { client } from '@/sanity/lib/client'
import { PRODUCT_BY_CATEGORY_QUERY } from '@/sanity/Queries/query'
import { PRODUCT_BY_CATEGORY_QUERY_RESULT } from '@/sanity.types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl.searchParams.get('slug')
    
    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter is required' },
        { status: 400 }
      )
    }

    const products = await client.fetch<PRODUCT_BY_CATEGORY_QUERY_RESULT>(
      PRODUCT_BY_CATEGORY_QUERY,
      { slug }
    )

    return NextResponse.json(products, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
