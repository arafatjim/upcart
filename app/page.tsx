import Container from '@/components/Container';
import { Button } from '@/components/ui/button';
import React from 'react';

const HomePage = () => {
  return (
    <div className='p-10 bg-banner bg-cover w-7xl mx-auto min-h-screen rounded-md justify-center items-center flex flex-col'>
      <h2>Home Page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur sit, iste nihil sunt recusandae, deleniti repellat harum quis quaerat vero eos officia excepturi? Maxime saepe repudiandae consequuntur numquam animi eos laudantium, facere nemo non ullam repellendus aperiam officiis consectetur!</p>
      <Button className='mr-2'>Click Me1</Button>
      <Button className='bg-success text-white font-bold hover:bg-dark ' variant='secondary'>Click Me</Button>
    </div>
  )
}

export default HomePage;

