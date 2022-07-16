import React from "react";
import NavLinks from "./NavLinks";
import styles from "./NavBar.module.scss";
import { MdMenu, MdClose } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { openMenu, closeMenu } from "../../../store/hamburgerSlice";

export default function MobileNavigation() {
  const iconSize = `40px`;

  const dispatch = useDispatch();
  const { menuIsOpen } = useSelector((state) => state.hamburger);

  function toggleHamburger() {
    if (menuIsOpen) {
      dispatch(closeMenu());
    }
    if (!menuIsOpen) {
      dispatch(openMenu());
    }
  }

  const openIcon = <MdMenu size={iconSize} className={styles.open_icon} />;
  const closeIcon = <MdClose size={iconSize} className={styles.close_icon} />;

  return (
    <nav className={styles.mobile_navigation}>
      <div className={styles.hamburger_icon} onClick={toggleHamburger}>
        {menuIsOpen ? closeIcon : openIcon}
      </div>
      {menuIsOpen && <NavLinks />}
    </nav>
  );
}
