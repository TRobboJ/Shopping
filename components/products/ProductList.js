import React from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductList.module.scss";
import { useSelector } from "react-redux";

export default function ProductList(props) {
  const { query, minPrice, maxPrice, ratingQuery } = useSelector(
    (state) => state.filter
  );

  const queryLowerCase = query.toLowerCase();
  const categoryQuery = query.charAt(0).toUpperCase() + query.slice(1);

  const products = props.productData.map((product) => {
    const categoryToUpper =
      product.category.charAt(0).toUpperCase() + product.category.slice(1);
    const filteredTitle = product.title.toLowerCase().includes(queryLowerCase);
    const filteredCategory = categoryToUpper.includes(categoryQuery);
    const rateAsInt = parseInt(product.rating.rate);
    const { price } = product;
    if (!filteredTitle && !filteredCategory) return null;
    // if (!filteredCategory) return null // Doesn't work because I use the same query for search and category
    if (price < minPrice || price > maxPrice) return null;
    if (rateAsInt < ratingQuery) return null;
    return (
      <li key={product.id}>
        <ProductCard productData={product} />
      </li>
    );
  });

  if (products.every((el) => el === null))
    return <p className={styles.no_results}>No results found.</p>;
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
