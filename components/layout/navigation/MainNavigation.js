import styles from './MainNavigation.module.scss'
import NavLinks from './NavLinks';

function MainNavigation() {
  
  return (
    <header className={styles.header}> 
      <nav>
        <NavLinks />
      </nav>
    </header>
  );
}

export default MainNavigation;
