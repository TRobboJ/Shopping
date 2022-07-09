import Hero from "../components/layout/Hero";
import StoreView from "../components/layout/StoreView";
import styles from './index.module.scss'
import Footer from '../components/layout/Footer'

function HomePage(props) {
  
  

  return (
      <>
      {/* <div>Welcome to Next.js!</div>
      <p>{props.productData[1].title}</p>
      {props.productData.map((product)=> {
        <Product imageUrl={product.imageUrl} />
      })}
      <img src={props.productData[1].imageUrl} /> */}
        {/* <Hero /> */}
        <StoreView />
      </>
      
   
  );
}

export default HomePage;


// export async function getStaticProps() {


  
//     const response = await fetch(process.env.STORE_API)
//     const productData = await response.json()
    


//   return {
//     props: {      
//       productData: productData.map((product) => ({
//         id: product.id.toString(),
//         title: product.title,
//         price: product.price,
//         description: product.description,
//         category: product.category,
//         imageUrl: product.image,
//         rating: product.rating,
//       }))
//     }
//   }
    
// }

//Example of response from server
// {"id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}}