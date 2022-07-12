import React from 'react'
import styles from './ProductDetail.module.scss'
import ProductForm from './ProductForm';
import Card from '../UI/Card'

export default function ProductDetail(props) {
    const { productData } = props;
    const { id, title, description, price, imageUrl, rating, category } = productData

    const priceFormatted = `$${price.toFixed(2)}`
    const categoryFormatted = category.charAt(0).toUpperCase() + category.slice(1)

    

    const content = (
        <div className={styles.product_card} key={id}>
            <Card className={styles.product_img}>
                <img src={imageUrl}/>
            </Card>
            <div className={styles.product_info}>
                <h3>{title}</h3>
                <p>{categoryFormatted}</p>
                <p className={styles.price}>{priceFormatted}</p>
                <div className={styles.tags}>
                    <span>{`★ ${rating.rate} (${rating.count})`}</span>
                </div>
                <div>
                
                
                <p className={styles.product_description}>{description}</p>
                
                <ProductForm />
            </div>
            </div>
            
            
            

        </div>)
        

  return (
    content
        
  )
}
