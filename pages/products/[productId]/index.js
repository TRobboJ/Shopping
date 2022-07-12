import React from 'react'
import ProductDetail from '../../../components/products/ProductDetail'

export default function index(props) {
  
  return (
    <ProductDetail productData={props.productData} />
  )
}


export async function getStaticPaths() {

  const response = await fetch(process.env.STORE_API)
  const productData = await response.json()

  return {
    fallback: false,
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