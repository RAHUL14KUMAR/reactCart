import React from 'react'
import Filters from './Filter';
import { Product } from '../product';
import SingleProduct from './SingleProduct';
import {useStateValue} from '../StateProvider'

function Home() {
    const[{basket,searchQuery,sort,onlyElectric},dispatch]=useStateValue();

    const transformProduct=()=>{
      let sortproduct=Product;

      if (sort) {
        sortproduct = sortproduct.sort((a, b) =>
          sort === "lowtohigh" ? a.price - b.price : b.price - a.price
        );
      }
      if(onlyElectric){
        sortproduct=sortproduct.filter((item)=>{
          return(item.type==="electric")
        })
      }
      return sortproduct
    }

  return (
    <div className="home">
     <Filters/>
     <div className="productContainer">
        {
            transformProduct().filter((item)=>{
                return (searchQuery === ''
                ? item
                : item.title.includes(searchQuery));
            })
            .map((prod)=>{
            return (<SingleProduct title={prod.name} id={prod.id} price={prod.price} image={prod.image} key={prod.id} type={prod.type} quantity={prod.quantity} />)
            
            })
        }
      </div>
    </div>
  )
}

export default Home
