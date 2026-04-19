'use client'
import { useRouter } from 'next/navigation';
import { Button } from './button';
import { UserIcon } from 'lucide-react';

interface AuthorButtonProps {
  slug?: string | null;
}

const AuthorButton = ({ slug }: AuthorButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (!slug) return;
    router.push(`/author/${slug}`);
  };

  return (
    <Button
      type='button'
      onClick={handleClick}
      className='bg-success mx-8 py-2 text-md text-white font-extrabold hover:bg-warning hover:text-gray-700'
    >
      <UserIcon size={20} className='mr-2' />
      View Author
    </Button>
  );
};

export default AuthorButton;
