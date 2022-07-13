import React from "react";
import styles from "./ProductCard.module.scss";
import { useSelector } from "react-redux";

import Product from "./Product";

export default function ProductCard(props) {
  const { menuIsOpen } = useSelector((state) => state.filter);
  const { id, imageUrl } = props.productData;
  const renderInfo = {
    link: id,
    linkText: "See more...",
    showDescription: false,
  };

  return (
    <div className={styles.product_card} key={id}>
      <div
        className={
          menuIsOpen
            ? [styles.product_img, styles.show_img].join(" ")
            : styles.product_img
        }
      >
        <img src={imageUrl} />
      </div>
      <Product productData={props.productData} renderInfo={renderInfo} />
    </div>
  );
}
