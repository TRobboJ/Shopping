import React from "react";
import Product from "./Product";
import styles from "./ProductList.module.css";
import { useSelector } from "react-redux";

export default function ProductList(props) {
  const { query } = useSelector((state) => state.filter);

  // const noResultsFound = <p className={styles.no_results}>No results found.</p>;

  const products = props.productData.map((product) => {
    const filteredTitle = product.title.toLowerCase().includes(query)
    if (!filteredTitle) return null
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
