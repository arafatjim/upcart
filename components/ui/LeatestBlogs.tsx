import { getLatestBlogs } from '@/sanity/Queries';
import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { LATEST_BLOGS_QUERY_RESULT } from '@/sanity.types';
import Link from 'next/link';
import AuthorButton from './AuthorButton';
import { Calendar1Icon } from 'lucide-react';
import { Title } from './Title';

type BlogPost = LATEST_BLOGS_QUERY_RESULT[number];

const LatestBlogs = async() => {
    const posts: LATEST_BLOGS_QUERY_RESULT = await getLatestBlogs();

  return (
    <div className='my-10 lg:mb-20 py-8 gap-3 bg-bglight justify-between rounded-md px-6 w-full flex flex-col'>
      <p className='font-extrabold text-2xl border-b-2 py-4 mb-3'>Our Latest Blogs</p>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full'>
        {
            posts?.map((blog: BlogPost)=>{
                return (
                    <div key={blog?._id} className='flex flex-col bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 w-full h-full'>                        
                        <Link href={`/blog/${blog?.slug?.current}`} className='w-full'>
                          <div className='cursor-pointer'>
                            <Image
                                src={blog?.mainImage ? urlFor(blog?.mainImage).url() : '/placeholder-blog.png'}
                                alt={blog?.title || 'Blog image'}
                                width={250}
                                height={250}
                                className='w-full h-48 object-cover rounded-t-md'
                            />

                            <div className='p-4 flex justify-between gap-2'>
                                <p className='font-bold text-lg border-b-2'>{blog?.title?.slice(0, 30)}</p>
                                
                                <div className='flex gap-2 items-center justify-center'>
                                    <Calendar1Icon size={18} className='text-gray-500' />
                                <p className='text-sm text-gray-500'>{blog?.publishedAt ? new Date(blog?.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                }) : 'No date available'}</p>
                                </div>
                            </div>
                          </div>
                        </Link>

                        {/* author */}
                        <div className='px-4 flex items-center gap-1 justify-start'>
                            <div className='flex items-center gap-3'>
                                <Image
                                    src={blog?.author?.image ? urlFor(blog.author.image).url() : '/placeholder-author.png'}
                                    alt={blog?.author?.name || 'Author image'}
                                    width={50}
                                    height={50}
                                    className='w-10 h-10 rounded-full object-cover border-2  border-blue-800'
                                />
                                <p className='text-sm text-gray-600'><span className='text-md font-extrabold text-black'>{blog?.author?.name || 'Unknown Author'}</span></p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-2 mt-auto mb-4 text-dark'>
                           <div className='text-black px-3 py-1 rounded-md  text-md'>
                            {blog?.body && (() => {
                                const plainText = blog?.body
                                    .map((block) => {
                                        if (block._type === 'block' && 'children' in block) {
                                            return block.children?.map((child) => child.text).join('');
                                        }
                                        return '';
                                    })
                                    .join(' ');
                                
                                return (
                                    <p className='text-md '>
                                        {plainText.slice(0, 50)}{plainText.length > 100 ? '...' : ''}
                                    </p>
                                );
                            })()}
                           </div>
                                
                            <AuthorButton slug={blog?.author?.slug?.current} />
                        </div>
                    </div>
                )
            })
        }
        
    </div>

    </div>
  )
}

export default LatestBlogs