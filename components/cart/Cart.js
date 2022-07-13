import React from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/cartSlice";
import CartItem from "./CartItem";

export default function Cart() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  function cartCloseHandler() {
    dispatch(toggleCart());
  }

  let cartContent = []
  let totalCost = 0
  if (products.length !== 0) {
    cartContent.push(<CartItem isTitleItem={true} key={0}/>)
    cartContent.push(products.map((product) => {
      return (
        <li>
          <CartItem
            isTitleItem={false}
            key={product.id}
            title={product.title}
            totalPrice={product.totalPrice}
            quantity={product.quantity}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </li>
      );
    }));
    totalCost = products.reduce(getTotalCostOfCartItems, totalCost)
  }
  if (products.length === 0) {
    cartContent.push(<p>There is nothing in the cart!</p>);
  }

  return (
    <Modal className={styles.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartContent}
        {products.length !== 0 && (
          <div className={styles.total_cost}>
            <span>Total</span>
            <span>{`$${totalCost}`}</span>
          </div>
        )}
        <div className={styles.modal_actions}>
          <button className={styles.modal_close} onClick={cartCloseHandler}>
            Close
          </button>
          <button className={styles.modal_order}>Order</button>
        </div>
      </ul>
    </Modal>
  );
}

function getTotalCostOfCartItems(total, value) {
  return total += value.price * value.quantity
}