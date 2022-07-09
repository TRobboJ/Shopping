import React from 'react'
import ProductList from '../products/ProductList'
import ProductSidebar from '../products/ProductSidebar'
import styles from './StoreView.module.css'


export default function StoreView() {
  return (
    <div className={styles.store_view}>
        <ProductSidebar />
        <ProductList />
    </div>
  )
}
