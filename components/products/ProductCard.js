import React from 'react'
import styles from './ProductCard.module.scss'
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function ProductCard(props) {
    const {menuIsOpen} = useSelector(state=>state.filter)
    const { productData } = props;
    const { id, title, description, price, imageUrl, rating, category } = productData

    const priceFormatted = `$${price.toFixed(2)}`
    const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1)

    

    const content = (
        <div className={styles.product_card} key={id}>
            <div className={menuIsOpen ? [styles.product_img, styles.show_img].join(' ') : styles.product_img}>
                <img src={imageUrl}/>
            </div>
            <div className={styles.product_info}>
                <h3>{title}</h3>
                <p>{categoryFormatted}</p>
                <p className={styles.price}>{priceFormatted}</p>
                <div className={styles.tags}>
                    <span>{`★ ${rating.rate} (${rating.count})`}</span>
                </div>
                <div>
                <Link href={`/products/${id}`}>
                <p className={styles.product_detail}>See more...</p>
                </Link>
            </div>
            </div>
            
            
            

        </div>)
        

  return (
    content
        
  )
}
