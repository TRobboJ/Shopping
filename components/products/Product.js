import React from "react";
import styles from "./Product.module.scss";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import ProductForm from "./ProductForm";
import { addItemToCart } from "../../store/cartSlice";
import { useDispatch } from "react-redux";
import { shortenString } from "../../utils/utils";

export default function Product(props) {
  const dispatch = useDispatch();
  const { link, linkText, showDescription } = props.renderInfo;
  const { id, title, description, price, rating, category, imageUrl } =
    props.productData;

  const priceFormatted = `$${price.toFixed(2)}`;
  const categoryFormatted =
    category.charAt(0).toUpperCase() + category.slice(1);

  function addItemToCartHandler(event) {
    event.preventDefault();
    dispatch(
      addItemToCart({
        id,
        price,
        title,
        imageUrl,
      })
    );
  }
  const titleLength = 45;
  const titleShortened = shortenString(title, titleLength);
  return (
    <div className={styles.product_info}>
      <h3>{showDescription ? title : titleShortened}</h3>
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
        <ProductForm buttonHandler={addItemToCartHandler} />
        <Link href={`/products/${link}`}>
          <a className={styles.product_detail}>{linkText}</a>
        </Link>
      </div>
    </div>
    
  );
}
