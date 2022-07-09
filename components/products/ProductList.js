import React from 'react'
import Product from './Product'
import styles from './ProductList.module.css'


export default function ProductList() {
  return (
    <>
    <div className={styles.product_list}>
    <ul>
        <li>
        <Product />
        </li>
        <li>
        <Product />
        </li>
        <li>
        <Product />
        </li>
        <li>
        <Product />
        </li>
        <li>
        <Product />
        </li>
        <li>
        <Product />
        </li>
    </ul>
    </div>
    </>
  )
}
