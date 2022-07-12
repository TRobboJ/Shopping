import React from 'react'
import Cart from '../../cart/Cart'
import MainNavigation from './MainNavigation'
import MobileNavigation from './MobileNavigation'
import styles from './NavBar.module.scss'

import { useSelector } from "react-redux";

export default function NavBar() {
  const  {cartIsOpen}  = useSelector(state=>state.cart)
  return (
    <header className={styles.header}> 
        {cartIsOpen && <Cart /> }
        <MobileNavigation />
        <MainNavigation />
    </header>
  )
}
