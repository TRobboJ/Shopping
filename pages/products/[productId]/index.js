import React from 'react'
import ProductCard from '../../../components/products/ProductCard'

export default function ProductDetail(props) {
  
  return (
    <ProductCard productData={props.productData} />
  )
}


export async function getStaticPaths() {

  // const {productId} = context.params
  const response = await fetch(process.env.STORE_API)
  const productData = await response.json()
  // const allProducts = productData.find({}, {id: 1}).toArray()

  return {
    fallback: true,
    paths: productData.map(product=> ({params: {productId: product.id.toString()}}))
    
    
  }


}


export async function getStaticProps(context) {


  const {productId} = context.params
  const response = await fetch(`${process.env.STORE_API}/${productId}`)
  const productData = await response.json()


return {
  props: {      
    productData: {...productData, imageUrl: productData.image}
  }
}
  
}