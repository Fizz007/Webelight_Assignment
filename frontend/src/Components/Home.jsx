import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { baseUrl } from "../config/BaseUrl";

function Home() {
  const [prod, setProd] = useState([]);
  const [newprod, setNewprod] = useState([]);
  const [user] = useAuthState(auth);
  const [selectedoption, setselectedoption] = useState("");
  const [sortOrder, setSortOrder] = useState();

  const getProducts = async () => {
    try {
      const res = await axios.get(`${baseUrl}/products`);
      console.log(res.data.product);
      setProd(res.data.product);
      setNewprod(res.data.product);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const handleSortChange = (event) => {
    const selectedOrder = event.target.value;
    sortData(selectedOrder);
  };

  const sortData = (order) => {
    const sortedData =
      order === "lowToHigh"
        ? [...prod].sort((a, b) => a.price - b.price)
        : [...prod].sort((a, b) => b.price - a.price);

    setProd(sortedData);
    setSortOrder(order);
  };

  function handleByCategory(e) {
    setselectedoption(e.target.value);
  }

  const filterProduct = (cat) => {
    const updatedList = newprod.filter((x) => x.category === cat);
    setProd(updatedList);
  };

  function handleReset() {
    setProd(newprod);
    setselectedoption("");
    setSortOrder("")
  }

  return (
    <Container>
      <p classNameName="blackText">Sort By:</p>
      <div>
        <label htmlFor="lowToHigh">LowToHigh</label>
        <input
          type="radio"
          name="sort"
          value="lowToHigh"          
          className="m-2 px-2"
          checked={sortOrder === "lowToHigh"}
          onChange={handleSortChange}
        />

        <label htmlFor="highToLow">HighToLow</label>
        <input
          type="radio"
          name="sort"
          value="HighToLow"          
          className="m-2 px-2"
          checked={sortOrder === "HighToLow"}
          onChange={handleSortChange}
        />

        <label htmlFor="highToLow">Cap</label>
        <input
          type="radio"
          name="category"
          value="cap"
          className="m-2 px-2"
          checked={selectedoption === "cap"}
          onChange={handleByCategory}
          onClick={() => filterProduct("cap")}
        />
        <label htmlFor="highToLow">Mens-Clothing</label>
        <input
          type="radio"
          name="category"
          value="Mens-clothing"
          className="m-2 px-2"
          checked={selectedoption === "Mens-clothing"}
          onChange={handleByCategory}
          onClick={() => filterProduct("Mens-clothing")}
        />
        <label htmlFor="highToLow">Womens-Clothing</label>
        <input
          type="radio"
          name="category"
          value="Womens-clothing"
          className="m-2 px-2"
          checked={selectedoption === "Womens-clothing"}
          onChange={handleByCategory}
          onClick={() => filterProduct("Womens-clothing")}
        />

        <button
          type="button"
          class="btn btn-primary mx-2 px-4"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      {user ? (
        <Container classNameName="productContainer" fluid>
          <Row xs={1} md={3} lg={4}>
            {prod &&
              prod.map((item) => {
                return (
                  <Col>
                    <SingleProduct item={item} key={item._id} />
                  </Col>
                );
              })}
          </Row>
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            width: "80vw",
          }}
        >
          <h2>Please login</h2>
        </div>
      )}
    </Container>
  );
}

export default Home;
