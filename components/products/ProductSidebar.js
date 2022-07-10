import Link from "next/link";
import React from "react";
import styles from "./ProductSidebar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  openMenu,
  closeMenu,
  filterQuery,
  clearFilters,
} from "../../store/filterSlice";
import { FaRegWindowClose } from "react-icons/fa";

export default function ProductSidebar(props) {
  const dispatch = useDispatch();
  const { menuIsOpen, query } = useSelector((state) => state.filter);
  const iconSize = `25px`;

  const categories = getUniqueCategories(props.productData);
  const renderCategories = categories.map((category, i) => {
    return (
      <li key={i} onClick={filterQueryHandler}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </li>
    );
  });

  function toggleFilter() {
    if (menuIsOpen) {
      dispatch(closeMenu());
    }
    if (!menuIsOpen) {
      dispatch(openMenu());
    }
  }

  const sidebarCloseIcon = (
    <div className={styles.sidebar_close_icon}>
      <FaRegWindowClose size={iconSize} onClick={toggleFilter} />
    </div>
  );

  function filterQueryHandler(event) {
    let query = event.target.value;
    if (query === 0) query = event.target.innerText;
    console.log(query);
    dispatch(filterQuery(query));
  }

  function clearAllFiltersHandler() {
    dispatch(clearFilters());
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.search_content}>
        {sidebarCloseIcon}

        <div className={styles.header}>
          <label>Search</label>
        </div>
        <div className={styles.content}>
          <div className={styles.query_input}>
            <input
              type="text"
              placeholder="Search all products..."
              onChange={filterQueryHandler}
            />
          </div>
        </div>
        <div className={styles.header}>
          <label>Categories</label>
        </div>
        <div className={styles.content}>
          <ul>{renderCategories}</ul>
        </div>
        <div className={styles.header}>
          <label>Price</label>
        </div>
        <div className={styles.content}>
          <div className={styles.price_input}>
            <input type="number" placeholder="$" name="min" maxlength="6" />
            <span>~</span>
            <input type="number" placeholder="$" name="max" maxlength="6" />
          </div>
        </div>
        <div className={styles.header}>
          <label>Reset</label>
        </div>
        <div className={styles.content}>
          <div className={styles.reset}>
            <input
              type="reset"
              value="Reset"
              onClick={clearAllFiltersHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function getUniqueCategories(productData) {
  function getUniqueValues(value, index, self) {
    return self.indexOf(value) === index;
  }
  const productCategories = productData.map((product) => product.category);

  const uniqueCategories = productCategories.filter(getUniqueValues);
  return uniqueCategories;
}
