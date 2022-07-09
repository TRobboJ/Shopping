import MainNavigation from './navigation/MainNavigation';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
