import React from 'react'
import Link from 'next/link'
import CartButton from '../../cart/CartButton'
import Search from './Search'
import styles from './NavLinks.module.scss';

export default function NavLinks() {
  return (
    <>
    <ul>
        <li>
        <Link href='/'>Home</Link>
        </li>
        <li>
        <Link href='/products'>Shop</Link>
        </li>
    </ul>
    <div className={styles.logo}>Smarter Shopping</div>  
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
  </>
  )
}
