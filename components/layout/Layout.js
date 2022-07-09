import NavBar from './navigation/NavBar';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>{props.children}
      </main>
      
      <Footer />
    </div>
  );
}

export default Layout;
