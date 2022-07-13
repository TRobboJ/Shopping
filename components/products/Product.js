import React from "react";
import styles from "./Product.module.scss";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import ProductForm from "./ProductForm";

export default function Product(props) {
  const { link, linkText, showDescription } = props.renderInfo;
  const { title, description, price, rating, category } = props.productData;

  const priceFormatted = `$${price.toFixed(2)}`;
  const categoryFormatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className={styles.product_info}>
      <h3>{title}</h3>
      <p>{categoryFormatted}</p>
      <p className={styles.price}>{priceFormatted}</p>
      <div className={styles.tags}>
        <AiFillStar />
        <span>{`${rating.rate} (${rating.count})`}</span>
      </div>
      <div>
        {showDescription && (
          <p className={styles.product_description}>{description}</p>
        )}
        <ProductForm />
        <Link href={`/products/${link}`}>
          <a className={styles.product_detail}>{linkText}</a>
        </Link>
      </div>
    </div>
  );
}
