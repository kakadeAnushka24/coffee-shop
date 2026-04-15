import React, { Children } from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BodyContainer from '../../components/BodyContainer/BodyContainer';
import { PRODUCTS } from '../../config';
import ProductCard from '../../components/ProductCard/ProductCard';
import PageTitle from '../../components/PageTitle/PageTitle';

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