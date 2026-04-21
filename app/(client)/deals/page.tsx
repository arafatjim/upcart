
import Container from '@/components/Container';
import ProductCart from '@/components/ui/ProductCart';
import { getDealProduct } from '@/sanity/Queries';
import React from 'react'

const page = async() => {
  const products = await getDealProduct();
  return (
    <Container>
      <div className='bg-bglight mx-2 p-2  md:my-4 lg:p-4 rounded-lg '>
        <p className=' my-2 text-xl  font-extrabold p-2 uppercase'>
          <span className='border-b-2 border-success'>Hot Deals of the Week</span>
          </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-2">
          {products?.map((product:any) => (
            
            <ProductCart key={product._id} product={product} />
        ))}
        </div>
    </div>
    </Container>
  )
}

export default page
