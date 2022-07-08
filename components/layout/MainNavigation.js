import styles from './MainNavigation.module.css';
import Link from 'next/link'
import CartButton from '../cart/CartButton'
import Search from './Search'

function MainNavigation() {

  return (
    <header className={styles.header}>  
        
      <nav>
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
      </nav>
    </header>
  );
}

export default MainNavigation;
