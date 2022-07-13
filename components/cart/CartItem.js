import React from "react";
import styles from "./CartItem.module.scss";

export default function CartItem(props) {
  const { title, price, quantity, key, totalPrice, imageUrl, isTitleItem } =
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

    const titleLength = 50
    const titleShortened = title.length > titleLength ? title.substring(0, titleLength - 3) + "..." :                     title;

    return (
      <div key={key} className={[styles.cart_item, styles.spacing].join(' ')}>
        <div className={styles.image_resize}>
          <img src={imageUrl} />
        </div>
        <p>{titleShortened}</p>
        <p>{`x${quantity}`}</p>
        <p>{price}</p>
        <p>{totalPrice}</p>
      </div>
    );
  }
}
