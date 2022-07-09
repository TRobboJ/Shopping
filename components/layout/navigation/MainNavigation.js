import styles from './NavBar.module.scss'
import NavLinks from './NavLinks';

function MainNavigation() {

  return (
    
      <nav className={styles.navigation}>
        <NavLinks />
      </nav>
    
  );
}

export default MainNavigation;
