import React from "react";
import styles from "./ProductDetail.module.scss";
import Product from "./Product";
import Card from "../UI/Card";

export default function ProductDetail(props) {
  const { id, imageUrl } = props.productData;
  const renderInfo = {
    link: "",
    linkText: "Return to product list",
    showDescription: true,
  };

  const content = (
    <div className={styles.product_card} key={id}>
      <Card className={styles.product_img}>
        <img src={imageUrl} />
      </Card>

      <Product productData={props.productData} renderInfo={renderInfo} />
    </div>
  );

  return content;
}
