import Container from '@/components/Container';
import HomeBanner from '@/components/ui/banner';
import HomeCategories from '@/components/ui/HomeCategories';
import ProductGrid from '@/components/ui/ProductGrid';
import ShopByBrands from '@/components/ui/ShopByBrands';
import { getCategories } from '@/sanity/Queries';


const HomePage = async () => {
  const categories = await getCategories();
  console.log('total categories : ',categories)
  return (
    <Container className='px-0 py-5 '>
      
        
          <HomeBanner />
        <ProductGrid/>
        <HomeCategories categories={categories} />
        <ShopByBrands/>
      
    </Container>
  )
}

export default HomePage;

