import React,{useState} from 'react'
import {Container,Navbar, NavbarBrand,FormControl, Nav,Dropdown,Badge,Button} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from "react-router-dom";
import { useStateValue } from '../StateProvider';
import './style.css';
import { AiFillDelete } from "react-icons/ai";
import { Product } from '../product';

function Header() {

    const [{basket,searchQuery},dispatch]=useStateValue();
    const [search,setSearch]=useState("");

    console.log(searchQuery)
  return (
      <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
            <NavbarBrand>
                <Link to='/'>SHOP_CART</Link>
            </NavbarBrand>
            <Navbar.Text className="search">
                <FormControl
                style={{width:500}}
                type="text"
                placeholder="search for product"
                className="m-auto"
                value={search}
                onChange={(e)=>{
                    setSearch(e.target.value);
                    dispatch({
                        type:"FILTER_BY_SEARCH",
                        payload:search
                    })
                }}
                />
            </Navbar.Text>
            <Nav style={{margin:10+"px"}}>
                <Dropdown alignleft>
                    <Dropdown.Toggle variant="success">
                    <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge bg="success">{basket.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        {
                            basket.length>0?(
                                <>
                               {basket.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_BASKET",
                            payload: prod.id,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
      </Navbar>
  )
}

export default Header