import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SingleProduct({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [show, setShow] = useState(false);

  var qty = "quantity";
  var val = 1;
  item[qty] = val;

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
          <Card.Img variant="top" src={item.img} style={{height:'300px'}} alt={item.title} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle style={{ paddingBottom: 10 }}>{item.category}</Card.Subtitle>
            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <span>₹ {item.price}</span>    
             
              
            </Card.Subtitle>
          </Card.Body>
          
        </Card>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img variant="top" src={item.img} alt={item.name} />
          
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={()=> {
          dispatch(addProduct(item))
          }}>
            ADD
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
       
      </Modal>
    </>
  );
}

export default SingleProduct;
