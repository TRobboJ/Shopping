import React from 'react'
import StoreView from "../../components/layout/StoreView";

export default function index(props) {
  return (
    <StoreView productData={props.productData}/>
  )
}
export async function getStaticProps() {


  
    const response = await fetch(process.env.STORE_API)
    const productData = await response.json()
 


  return {
    props: {      
      productData: productData.map((product) => ({
        id: product.id.toString(),
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        imageUrl: product.image,
        rating: product.rating,
      }))
    }
  }
    
}