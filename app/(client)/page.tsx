import Container from '@/components/Container';
import HomeBanner from '@/components/ui/banner';
import HomeCategories from '@/components/ui/HomeCategories';
import LeatestBlogs from '@/components/ui/LeatestBlogs';
import ProductGrid from '@/components/ui/ProductGrid';
import ShopByBrands from '@/components/ui/ShopByBrands';
import { getCategories } from '@/sanity/Queries';


const HomePage = async () => {
  const categories = await getCategories();
  console.log('total categories : ',categories)
  return (
    <Container className='px-0 py-2 md:py-4 lg:py-6 '>
      
        
        <HomeBanner />
        <ProductGrid/>
        <HomeCategories categories={categories} />
        <ShopByBrands/>
        <LeatestBlogs/>
      
    </Container>
  )
}

export default HomePage;

