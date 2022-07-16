import React from "react";
import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import {addItemToCart, removeItemFromCart} from '../../store/cartSlice'
import { shortenString } from "../../utils/utils";

export default function CartItem(props) {
  const { id, title, price, quantity, key, totalPrice, imageUrl, isTitleItem } =
    props;
    

  if (isTitleItem) {
    return (
      <div key={key} className={[styles.cart_item, styles.spacing].join(' ')}>
        <h4>Image</h4>
        <h4>Product</h4>
        <h4>Quantity</h4>
        <h4>Price</h4>
        <h4>Total</h4>
      </div>
    );
  }
  if (!isTitleItem) {
    const dispatch = useDispatch()
    function addItemHandler() {
      dispatch(addItemToCart({
          id: id,
          title: title,
          price: price,
          imageUrl: imageUrl
      }))
    }
    function removeItemHandler() {
      dispatch(removeItemFromCart(id))
    }
    const titleLength = 45
    const titleShortened = shortenString(title, titleLength)

    return (
      <div key={key} className={[styles.cart_item, styles.spacing].join(' ')}>
        <div className={styles.image_resize}>
          <img src={imageUrl} />
        </div>
        <p>{titleShortened}</p>
        <p>{`x${quantity}`}</p>
        <p>{price.toFixed(2)}</p>
        <p>{totalPrice.toFixed(2)}</p>
        <div className={styles.cart_buttons}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    );
  }
}
