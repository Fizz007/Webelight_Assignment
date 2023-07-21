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
import { CartState } from "../Contexts/Context";
import { AiFillDelete } from "react-icons/ai";
import Rating from "./Rating";
function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((accu, curr) => accu + Number(curr.price) * curr.qty, 0),
    );
  }, [cart]);
  return (
    <Container className="home" fluid>
      <div className="productContainer">
        <ListGroup>
          {cart.map((item) => (
            <ListGroup.Item key={item.id}>
              <Row>
                <Col md={2}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col md={2}>
                  <span>{item.name}</span>
                </Col>
                <Col md={2}>₹ {item.price}</Col>
                <Col md={2}>
                  <Rating rating={item.ratings} />
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={item.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: { id: item.id, qty: e.target.value },
                      })
                    }
                  >
                    {[...Array(item.inStock).keys()].map((x) => (
                      <option key={x + 1}>{x + 1}</option>
                    ))}
                  </Form.Control>
                  <p>Max Quantity Available</p>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item })
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
      <Container className="filters summary d-flex justify-content-end align-items-center py-5">
        <span className="title p-2">Sub-Total : {cart.length} items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }} className="p-2">
          Total :₹ {total}{" "}
        </span>
        <Button type="button" disabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </Container>
    </Container>
  );
}

export default Cart;
