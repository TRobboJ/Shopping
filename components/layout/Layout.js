import NavBar from './navigation/NavBar';
import Footer from './Footer';
import styles from './Layout.module.scss';

function Layout(props) {
  return (
    // <div className={styles.layout}>
    //   <NavBar />
    //   <main>{props.children}
    //   </main>
      
    //   <Footer />
    // </div>
    <>
    <NavBar />
    <main>{props.children}
    </main>
    
    <Footer />
    </>
  );
}

export default Layout;
