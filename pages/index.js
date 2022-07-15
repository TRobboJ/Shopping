import Hero from "../components/layout/Hero";
import Info from '../components/layout/Info'
import Loading from "../components/UI/Loading";


function HomePage(props) {

  return (

      <> 
        <Loading />
        <Hero />
        <Info />
      </>
      
   
  );
}

export default HomePage;





