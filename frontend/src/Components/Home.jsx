import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartState } from "../Contexts/Context";
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
  // const {
  //   state: { products },
  //   productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  // } = CartState();
 
  // const transformProducts = () => {
  //   let sortedProducts = products;
  //   if (sort) {
  //     sortedProducts = sortedProducts.sort((a, b) =>
  //       sort === "lowToHigh" ? a.price - b.price : b.price - a.price,
  //     );
  //   }
  //   if (!byStock) {
  //     sortedProducts = sortedProducts.filter((item) => item.inStock);
  //   }
  //   if (byFastDelivery) {
  //     sortedProducts = sortedProducts.filter((item) => item.fastDelivery);
  //   }
  //   if (byRating) {
  //     sortedProducts = sortedProducts.filter(
  //       (item) => item.ratings >= byRating,
  //     );
  //   }
  //   if (searchQuery) {
  //     sortedProducts = sortedProducts.filter((item) =>
  //       item.name.toLowerCase().includes(searchQuery),
  //     );
  //   }
  //   return sortedProducts;
  // };
  return (
    <Container>
      <Filters />
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
