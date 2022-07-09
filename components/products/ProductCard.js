import React from 'react'
import styles from './ProductCard.module.scss'

export default function ProductCard(props) {

    const DUMMY_DATA = props.productData
  return (
        <div className={styles.product_card}>
            <div className={styles.product_img}>
                <img src={DUMMY_DATA[0].image}/>
            </div>
            <div className={styles.product_info}>
                <h3>{DUMMY_DATA[0].title}</h3>
                <p>{`$${DUMMY_DATA[0].price.toFixed(2)}`}</p>
                <div className={styles.tags}>
                    <span>{`★ ${DUMMY_DATA[0].rating.rate}`}</span>
                    <span>{`🗨 ${DUMMY_DATA[0].rating.count}`}</span>
                </div>
                
            </div>
            
            
            

        </div>
  )
}
