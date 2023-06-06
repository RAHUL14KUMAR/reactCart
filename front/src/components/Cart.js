import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import {getBasketTotal} from '../reducer'
import { useStateValue } from "../StateProvider";

const Cart = () => {
    const [{ basket},dispatch]=useStateValue();

    const [total,setTotal]=useState();
    useEffect(() => {
        setTotal(
            basket.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
          );
      }, [basket]);
    const increment=(id)=>{
        dispatch({
            type:"INCREMENT_ITEM",
            payload:id
        })
    }
    const decrement=(id)=>{
         dispatch({
            type:'DECREMENT_ITEM',
            payload:id
        })
     }
  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {basket.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image src={prod.image} alt={prod.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{prod.title}</span>
                </Col>
                <Col md={2}>₹ {prod.price}</Col>
                <Col md={6}>
                <div className='add-minus-quantity'>
                    <i class='fas fa-plus' style={{background:"green",padding:8+"px",color:"white",borderRadius:5+"px"}}onClick={()=>increment(prod.id)}></i>
                    <input type='text' placeholder={prod.quantity} style={{width:15+"px",border:0+"px",margin:15+"px"}}/>
                    <i class='fas fa-minus' style={{background:"green",padding:8+"px",color:"white",borderRadius:5+"px"}} onClick={()=>decrement(prod.id)}></i>
                </div>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_BASKET",
                        payload: prod.id,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button type="button" disabled={basket.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;