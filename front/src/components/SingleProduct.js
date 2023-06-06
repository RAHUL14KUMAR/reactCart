import React from 'react'
import {Card,Button} from "react-bootstrap"
import styled from "styled-components";

import { useStateValue } from "../StateProvider";

function SingleProduct({id,title,price,image,type,quantity}) {
  const [{ basket },dispatch]=useStateValue();
    

  const addToBasket=(e)=>{
    e.preventDefault();
    dispatch({
      type:"ADD_TO_BASKET",
      payload:{
        id,
        title,
        price,
        image,
        quantity
      }
    })
  }
  return (
    <div className='products'>
        <Card>
          <Image>
          <Card.Img variant="top" src={image}/>
          </Image>
            <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>{type}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {price}</span>
          </Card.Subtitle>
            <Button variant="success" onClick={addToBasket}>
              Add to Cart
            </Button>
        </Card.Body>
        </Card>
    </div>
  )
}

const Image = styled.div`
  
  margin-left:5px:
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 120px;
    height: 250px;
  }
`;
export default SingleProduct
