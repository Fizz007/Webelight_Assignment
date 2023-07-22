import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import axios from "axios";

function Home() {

  const [prod, setProd] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5400/products");
      console.log(res.data.product)
      setProd(res.data.product);
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(()=>{
    getProducts();
  },[]) 
 
  return (
    <Container>
      <Filters prod={prod}/>
      <Container className="productContainer" fluid>
        <Row xs={1} md={3} lg={4}>
          {prod && prod?.map((item) => (
            <Col>
              <SingleProduct item={item} key={item._id} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
