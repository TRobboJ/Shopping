import React from 'react'
import Modal from '../UI/Modal'
import styles from './Cart.module.scss'
import { useDispatch } from "react-redux";
import { toggleCart } from '../../store/cartSlice'

export default function Cart() {
  const dispatch = useDispatch()
  

  function cartCloseHandler() {
    dispatch(toggleCart())
  }
  //const cartItems = <li></li>

  return (
    <Modal className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        
        {/* {cartItems.map(item=> <CartItem key={item.id} id={item.id} title={item.name} total={item.totalPrice} quantity={item.quantity} price={item.price}/>)} */}
          <div className={styles.total_cost}>
            <span>Total</span>
            <span>$168.99</span>
          </div>
          <div className={styles.modal_actions}>
            <button className={styles.modal_close} onClick={cartCloseHandler}>Close</button>
            <button className={styles.modal_order}>Order</button>
          </div>
        
      </ul>
    </Modal>
  )
}
