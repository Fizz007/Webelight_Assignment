import React, {useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {increaseQuantity, removeProduct, removeAll, decreaseQuantity } from "../redux/cartRedux";
import { useNavigate } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';

function Cart() {
  const [stripeToken, setStripeToken] = useState(null);
     
 const navigate = useNavigate()
 const dispatch = useDispatch(); 
  const cartt = useSelector(state => state.cart);
  console.log(cartt)
  const KEY = process.env.REACT_APP_STRIPE;

  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken)

  const total = cartt.products.reduce((total, item) => {
    return (total + (item.price) * item.quantity );
  }, 0); 

  const handleCheckout = ()=> {
    dispatch(removeAll())
    toast.success("Please pay", {
      position: toast.POSITION.TOP_RIGHT,
    });
    navigate('/')
  }

  return (
    <Container className="home" fluid>
      <div className="productContainer">
        <ListGroup>
          {cartt.products?.map((item) => (
            <ListGroup.Item key={item._id}>
              <Row>
                <Col md={2}>
                  <Image src={item.img} alt={item.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{item.name}</span>
                </Col>
                <Col md={2}>₹ {item.price}</Col>
                <Col md={2}>
                 
                </Col>
                <Col md={2}>
                  
                  <p>{item.quantity}</p>
                 <div>
                   <button onClick={()=>  {
                    dispatch(increaseQuantity(item._id))
                   }}>+</button>
                    <button onClick={()=>   dispatch(decreaseQuantity(item._id))}>-</button>
                 </div>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    
                  >
                    <AiFillDelete fontSize="20px" onClick={()=> dispatch(removeProduct(item._id))}/>
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <Container className="filters summary d-flex justify-content-end align-items-center py-5">
    
        <span style={{ fontWeight: 700, fontSize: 20 }} className="p-2">
          Total :₹ {total}
        </span>
        
          <StripeCheckout
              name="Webelight Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${total}`}
              amount={total * 100}
              token={onToken}
              stripeKey={KEY}
            >
             <Button type="button" onClick={handleCheckout}>
          Proceed to Checkout
        </Button>
            </StripeCheckout>
      </Container>
    </Container>
  );
}

export default Cart;