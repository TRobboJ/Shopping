import React from 'react'
import Link from 'next/link'
import CartButton from '../../cart/CartButton'
import Search from './Search'
import styles from './NavBar.module.scss';
import { useDispatch } from 'react-redux';
import {
  closeMenu,
} from "../../../store/hamburgerSlice";

export default function NavLinks() {
  const dispatch = useDispatch()

  function closeMenuHandler() {
    dispatch(closeMenu())
  }

  return (
    <div className={styles.navigation_wrapper}>
        <ul>
            <li>
            <Link href='/'>
              <a onClick={closeMenuHandler}>Home</a>
            
            </Link>
            </li>
            <li>
            <Link href='/products'>
            <a onClick={closeMenuHandler}>Shop</a>
            </Link>
            </li>
        </ul>
        <div className={styles.logo}>Shopping</div>  
        <ul>
            {/* <li>
            <Search />
            </li> */}
            {/* <li>
            <Login />
            </li> */}
            <li>
            <CartButton />
            </li>
        </ul>
  </div>
  )
}


// https://youtu.be/Et5tDPoU03c?t=1753
//framer-motion