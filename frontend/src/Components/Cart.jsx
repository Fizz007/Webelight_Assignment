import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {removeProduct } from "../redux/cartRedux";

function Cart() {
 
  const [total, setTotal] = useState();
  const cartt = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
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
                  
                  <p>{quantity}</p>
                 <div>
                   <button onClick={()=>  handleQuantity("inc")}>+</button>
                    <button onClick={()=>  handleQuantity("dec")}>-</button>
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
          Total :₹ {cartt.totalPrice * quantity}
        </span>
        <Button type="button" >
          Proceed to Checkout
        </Button>
      </Container>
    </Container>
  );
}

export default Cart;
