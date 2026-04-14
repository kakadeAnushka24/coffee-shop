import React, { Children } from 'react'
import "./Home.css"
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import BodyContainer from '../../Components/BodyContainer/BodyContainer';
import { PRODUCTS } from '../../config';
import ProductCard from '../../Components/ProductCard/ProductCard';
import PageTitle from '../../Components/PageTitle/PageTitle';

// function Card({children}){
//   return(
//     <div className='Children-card'>{children}</div>
//   );
// }

function Home() {
  return (
    <div>
      <Navbar active = "home"/>
      
      <PageTitle title= "Welcome to Our Coffee House" subtitle={"Enjoy the best coffee in town! "}/>

      <BodyContainer>
        <div className='products-container'>

         {PRODUCTS.map((product ,index) => {
          return(
            <ProductCard product={product} key={product.id} />
          );
         }
         )}
      
        </div>
      </BodyContainer>
  
     <Footer/>
    </div>
  );
}

export default Home;