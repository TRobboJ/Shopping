import React from 'react'
import Card from '../UI/Card'
import styles from './Cart.module.css'

export default function Cart() {
  return (
    <Card className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        
          {/* {cartItems.map(item=> <CartItem key={item.id} id={item.id} title={item.name} total={item.totalPrice} quantity={item.quantity} price={item.price}/>)} */}
          
        
      </ul>
    </Card>
  )
}
