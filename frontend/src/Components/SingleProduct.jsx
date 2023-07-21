import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { CartState } from "../Contexts/Context";
import Rating from "./Rating";

function SingleProduct({ item }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [show, setShow] = useState(false);
  function handleClose() {
    setShow(false);
  }
  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <div className="products p-2" onClick={handleShow}>
        <Card>
          <Card.Img variant="top" src={item.image} alt={item.name} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>₹ {item.price.split(".")[0]}</span>
             
              {item.fastDelivery ? (
                <div className="deliveryText">Fast Delivery 1-2 Days</div>
              ) : (
                <div className="deliveryText">4-5 Days Delivery</div>
              )}
              <Rating rating={item.ratings} />
            </Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={item.image} alt={item.name} />
          {/* <div className="buttonSizes">
            <p>Size Chart :</p>
            <Button className="mx-2">S</Button>
            <Button className="mx-2">M</Button>
            <Button className="mx-2">L</Button>
            <Button className="mx-2">XL</Button>
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          {cart.some((product) => product.id === item.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
              disabled={!item.inStock}
            >
              ADD TO CART
            </Button>
          )}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SingleProduct;
