import React from 'react'
import styles from './Product.module.css'
import Card from '../UI/Card'
import Link from 'next/link'
import ProductCard from './ProductCard'



const DUMMY_DATA = [
    {id:1,
    title:"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price:109.95,
    description:"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category:"men's clothing",
    image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rating:{rate:3.9,count:120}}

]


export default function Product(props) {
    
  return (
    <Card className={styles.card}>
        <Link href={`/products/[${DUMMY_DATA[0].id}]`}>
            <ProductCard productData={DUMMY_DATA}/>
        
        
        </Link>
        
    </Card>
  )
}


