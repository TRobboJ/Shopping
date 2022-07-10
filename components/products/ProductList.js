import React from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";

export default function ProductList(props) {
  const { query, minPrice, maxPrice } = useSelector((state) => state.filter);

  const queryLowerCase = query.toLowerCase()

  const products = props.productData.map((product) => {
    const filteredTitle = product.title.toLowerCase().includes(queryLowerCase)
    const filteredCategory = product.category.toLowerCase().includes(queryLowerCase)
    const {price} = product
    if (!filteredTitle && !filteredCategory || (price < minPrice || price > maxPrice)) return null
    return (
      <li>
        <Product productData={product} />
      </li>
    );
  });
  
  if (products.every(el=> el === null)) return <p className={styles.no_results}>No results found.</p>;
  return (
    <>
      {
        <div className={styles.product_list}>
          <ul>{products}</ul>
        </div>
      }
    </>
  );
}
