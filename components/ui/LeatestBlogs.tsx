import { getLatestBlogs } from '@/sanity/Queries';
import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { Post } from '@/sanity.types';
import { Button } from './button';
import Link from 'next/link';


const LatestBlogs = async() => {
    const posts= await getLatestBlogs();
    console.log('RAW BLOG DATA : ', JSON.stringify(posts[0], null, 2));
  return (
    <div className='my-10 lg:mb-20 py-4 gap-3 bg-bglight justify-between rounded-md px-4 w-full flex flex-col'>
      <p className='text-lg text-gray-600 font-extrabold pb-2 border-b-2'>Our Latest Blogs</p>

    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4'>
        {
            posts?.map((blog: Post)=>{
                return (
                    <Link href={`/blog/${blog?.slug?.current}`} key={blog._id} className='flex flex-col gap-2 rounded-md bg-white shadow-md overflow-hidden'>
                        <div key={blog?._id} className='flex flex-col gap-2 rounded-md bg-white shadow-md overflow-hidden p-2'>
                        
                        <Image
                                      src={blog?.mainImage ? urlFor(blog.mainImage).url() : '/placeholder-blog.png'}
                                      alt={blog?.title || 'Blog image'}
                                      width={250}
                                      height={250}
                                      className='w-full h-48 object-cover rounded-md'
                                    />

                        <div className='flex items-start justify-around gap-2 py-1 px-0 rounded-md text-xs'>
                            <p className='text-nowrap border-b-2 font-bold'>{blog?.title?.slice(0, 30)}</p>
                            <p className='text-nowrap border-b-2'>{blog?.publishedAt ? new Date(blog?.publishedAt).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                                // hour: '2-digit',
                                // minute: '2-digit'
                            }) : 'No date available'}</p>
                        </div>

                        <div className='flex flex-col items-start justify-start gap-2 py-1 px-0 rounded-md text-xs'>
                            <p className='text-black text-lg font-extrabold'>{(blog?.body?.[0] as { children?: { text?: string }[] })?.children?.[0]?.text || 'No description available'}</p>

                            

                        </div>

                    </div>
                    </Link>
                )
            })
        }
    </div>

    </div>
  )
}

export default LatestBlogs
