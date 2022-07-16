import React, {useState} from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../store/cartSlice";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
export default function Cart() {
  const [showOrder, setShowOrder] = useState(false)
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
            id={product.id}
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
    totalCost = products.reduce(getTotalCostOfCartItems, totalCost).toFixed(2)
  }
  if (products.length === 0) {
    cartContent.push(<p>There is nothing in the cart!</p>);
  }
  function orderHandler() {
  setShowOrder(true)

  }
  const cartButtons = <div className={styles.modal_actions}>
  <button className={styles.modal_close} onClick={cartCloseHandler}>
    Close
  </button>
  <button className={styles.modal_order} onClick={orderHandler}>Order</button>
</div>

  return (
    <Modal className={styles.cart}>
      {!showOrder && <h2>Your Shopping Cart</h2> }
      <ul>
      {!showOrder && cartContent}
        {products.length !== 0 && (
          <div className={styles.total_cost}>
            <span>Total</span>
            <span>{`$${totalCost}`}</span>
          </div>
        )}
       {showOrder && <Checkout onClose={cartCloseHandler}/>}
        {!showOrder && cartButtons}
       </ul>
    </Modal>
  );
}

function getTotalCostOfCartItems(total, value) {
  return total += value.price * value.quantity
}