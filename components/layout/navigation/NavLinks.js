import React from 'react'
import Link from 'next/link'
import CartButton from '../../cart/CartButton'
import Search from './Search'
import styles from './NavBar.module.scss';

export default function NavLinks() {
  return (
    <div className={styles.navigation_wrapper}>
        <ul>
            <li>
            <Link href='/'>Home</Link>
            </li>
            <li>
            <Link href='/products'>Shop</Link>
            </li>
        </ul>
        <div className={styles.logo}>Shopping</div>  
        <ul>
            <li>
            <Search />
            </li>
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