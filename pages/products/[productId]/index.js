import React from 'react'
import ProductCard from '../../../components/products/ProductCard'

export default function ProductDetail(props) {
  
  return (
    <ProductCard productData={props.productData} />
  )
}


export async function getStaticPaths() {



  return {
    fallback: true,
    paths: [
      {params: {
        productId: '1'
      }},
      {params: {
        productId: '2'
      }}
    ]
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