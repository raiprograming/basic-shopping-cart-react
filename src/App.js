import logo from './logo.svg';
import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer, toast } from 'react-toastify';
import BuyPage from "./components/Buypage"
import {Container,
        Row,Col,
        } from "reactstrap"
import Cart from './components/Cart';
import "./App.css";

function App() {

  const [cartItem,setCartItem] = useState([]);

  const addItemInCart = item=>{
    let index=cartItem.findIndex(itm=> itm.id===item.id)
       
    if(index !=-1){
      return toast("item is already there in cart!",{
        type:"error"
      });
    }

    setCartItem([...cartItem,item]);
  }

  const buyItem=()=>{
    setCartItem([]);

    toast("shopping complete",{
      type:"success"
    })
  }

  const removeItem=item=>{
    setCartItem(cartItem.filter(itm=> itm.id!=item.id))

  }




  return (
    <Container fluid>
      <ToastContainer>
      </ToastContainer>
      <Row>
        <Col md="8">
          <BuyPage addInCart={addItemInCart} />
        </Col>
        <Col md="4">
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyItem} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
