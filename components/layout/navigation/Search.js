import React from "react";
import Link from "next/link";
import { MdSearch } from "react-icons/md";
import styles from "./NavBar.module.scss";

export default function Search() {
  const iconSize = `40px`;

  return (
    <>
      <label>
        <Link href="/">
          <MdSearch size={iconSize} className={styles.search} />
        </Link>
      </label>
      {/* <input /> */}
    </>
  );
}
