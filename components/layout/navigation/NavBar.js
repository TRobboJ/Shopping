import React from "react";
import Cart from "../../cart/Cart";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import styles from "./NavBar.module.scss";

import { useSelector } from "react-redux";
import LoginForm from "../../user/LoginForm";

export default function NavBar() {
  const { cartIsOpen } = useSelector((state) => state.cart);
  const { menuIsOpen } = useSelector((state) => state.user);
  return (
    <header className={styles.header}>
      {cartIsOpen && <Cart />}
      {!cartIsOpen && menuIsOpen && <LoginForm />}
      <MobileNavigation />
      <MainNavigation />
    </header>
  );
}
