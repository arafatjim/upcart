import { sanityFetch } from "../lib/live";
import { BRAND_QUERY } from "./query";

 const getCategories = async(quantity? : number)=>{
    try{
       const query = quantity ? `*[_type == "category"] | order(name asc) [0...${quantity}]{
       ..., 'productCount' : count(*[_type == "product" && references(^._id)])
       }` : `*[_type == "category"] | order(name asc){
        ..., 'productCount' : count(*[_type == "product" && references(^._id)])
       }`;
         const { data } = await sanityFetch({ query, params: quantity ? { quantity } : {} });
         return data;
    }
    catch(error){
        console.log('Error fetching getcategory',error);
        return [];
    }
}

const getAllBrands = async()=>{
    try{
        const {data} = await sanityFetch({query: BRAND_QUERY});
        return data ?? [];
    }
    catch(error){
        console.log('Error Fatching all brands', error);
        return [];
    }
}

export { getCategories, getAllBrands }; 