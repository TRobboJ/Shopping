import React, { useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart, clearCart } from "../../store/cartSlice";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { useSession } from "next-auth/react";
import LoadingSpinner from "../UI/LoadingSpinner";

export default function Cart() {
  const [showOrder, setShowOrder] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const { data: session } = useSession();
  function cartCloseHandler() {
    dispatch(toggleCart());
  }

  let cartContent = [];
  let totalCost = 0;
  if (products.length !== 0) {
    cartContent.push(<CartItem isTitleItem={true} key={0} />);
    cartContent.push(
      products.map((product) => {
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
      })
    );
    totalCost = products.reduce(getTotalCostOfCartItems, totalCost).toFixed(2);
  }
  if (products.length === 0) {
    cartContent.push(<p>There is nothing in the cart!</p>);
  }
  function orderHandler() {
    setShowOrder(true);
  }
  const cartButtons =
    products.length !== 0 ? (
      <div className={styles.modal_actions}>
        <button className={styles.modal_close} onClick={cartCloseHandler}>
          Close
        </button>
        <button className={styles.modal_order} onClick={orderHandler}>
          Order
        </button>
      </div>
    ) : (
      <div className={styles.modal_actions}>
        <button className={styles.modal_close} onClick={cartCloseHandler}>
          Close
        </button>
      </div>
    );

  //receives userData from Checkout.js
  async function submitOrderToServer(userData) {
    setIsSubmitting(true);

    const res = await fetch("https://portfolio-shopping-project-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        order: products,
      }),
    });
    setIsSubmitting(false);

    if (res.ok) {
      setSuccessfulSubmit(true);
      dispatch(clearCart());
    } else {
      alert("Error submitting order.");
    }
  }

  const modalCartContent = (
    <>
      {!showOrder && <h2>Your Shopping Cart</h2>}
      <ul>
        {!showOrder && cartContent}
        {products.length !== 0 && (
          <div className={styles.total_cost}>
            <span>Total</span>
            <span>{`$${totalCost}`}</span>
          </div>
        )}
        {showOrder && (
          <Checkout
            onConfirm={submitOrderToServer}
            onClose={cartCloseHandler}
          />
        )}
        {!showOrder && cartButtons}
      </ul>
    </>
  );
  return (
    <Modal className={styles.cart}>
      {!isSubmitting && !successfulSubmit && modalCartContent}
      {isSubmitting && !successfulSubmit && (
        <>
          <p>Please wait while your order data is submitted.</p>{" "}
          <LoadingSpinner />
        </>
      )}
      {!isSubmitting && successfulSubmit && (
        <>
          <p>Successfully submitted your order!</p>
          {cartButtons}
        </>
      )}
    </Modal>
  );
}

function getTotalCostOfCartItems(total, value) {
  return (total += value.price * value.quantity);
}
