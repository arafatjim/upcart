'use client'
import { useRouter } from 'next/navigation';
import { Button } from './button';

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
      className='bg-success text-sm text-white font-bold hover:bg-warning hover:text-gray-700'
    >
      View Author
    </Button>
  );
};

export default AuthorButton;
