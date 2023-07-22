import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [prod, setProd] = useState([]);
  const [newprod, setNewprod] = useState([])
  const [user] = useAuthState(auth);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5400/products");
      console.log(res.data.product);
      setProd(res.data.product);
      setNewprod(res.data.product)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  function handleChangeLow() {
    setNewprod((prevProd) => {
      const lowPrice = prevProd.slice().sort((a, b) => a.price - b.price);
      return lowPrice;
    });
  }
  function handleChangeHigh() {
    setNewprod((prevProd) => {
      const highPrice = prevProd.slice().sort((a, b) => b.price - a.price);
      return highPrice;
    });
  }

  function handleByCategory(e) {
    const selectedCategory = e.target.value.toLowerCase();
    if (selectedCategory === 'cap') {
      const updatedList = newprod.filter((x) => x.category === 'cap');
      setNewprod(updatedList);
    } else if (selectedCategory === 'womens') {
      const updatedList = newprod.filter((x) => x.category === 'Womens-clothing');
      setNewprod(updatedList);
    } else if (selectedCategory === 'mens') {
      const updatedList = newprod.filter((x) => x.category === 'Mens-clothing');
      setNewprod(updatedList);
    }
  }
  
  

  return (
    <Container>
      <p classNameName="blackText">Sort By:</p>
      <div>
        <label htmlFor="lowToHigh">LowToHigh</label>
        <input
          type="radio"
          name="price"
          id="lowToHigh"
          className="m-2 px-2"
          onChange={handleChangeLow}
        />

        <label htmlFor="highToLow">HighToLow</label>
        <input
          type="radio"
          name="price"
          id="highToLow"
          className="m-2 px-2"
          onChange={handleChangeHigh}
        />
      <select name="category-sort" id="" onChange={handleByCategory}>
        <option value="">Select Category</option>
        <option value="cap">Cap</option>
        <option value="Womens-clothing">Womens</option>
        <option value="Mens-clothing">Mens</option>
      </select>
      <button type="button" class="btn btn-primary mx-2 px-4" onClick={()=>setNewprod(prod)}>Reset</button>
      </div>
      {user ? <Container classNameName="productContainer" fluid>
        <Row xs={1} md={3} lg={4}>

        {newprod.length > 0 ? 
         newprod.map((item)=> {
          return <Col>
          <SingleProduct item={item} key={item._id} />
        </Col>
         }) : prod.map((item)=> {
          return  <Col>
          <SingleProduct item={item} key={item._id} />
        </Col>
         })}          
        </Row>
      </Container> : <div style={{display:'flex', justifyContent:'center',
        alignItems:'center', height:'60vh', width:'80vw'}}><h2>Please login</h2></div>}
    </Container>
  );
}

export default Home;
