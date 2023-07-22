import React from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/cartRedux";

function Header() {
  const cartt = useSelector(state => state.cart);
 const dispatch = useDispatch()
 
  
  return (
    <Navbar
      variant="dark"
      style={{ height: 80 }}
      className="lightNavBg d-flex m-auto bg-light"
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/G/01/zappos/melody/zapposPBS._CB1509642213_.svg"
              alt="logo"
              style={{ height: "70px", width: "190px" }}
            />
          </Link>
        </Navbar.Brand>
        {useLocation().pathname.split("/")[1] !== "cart" && (
          <Navbar.Text className="search">
            <FormControl
              type="search"
              placeholder="Search for a Product..."
              className="m-auto"
              aria-label="Search"
              // onChange={(e) => {
              //   productDispatch({
              //     type: "FILTER_BY_SEARCH",
              //     payload: e.target.value,
              //   });
              // }}
            />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown >
            <Dropdown.Toggle variant="primary">
              <FaShoppingCart color="white" fontSize="25px"/>
              <Badge>{cartt.totalQuantity ? cartt.totalQuantity : 0}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 150 }}>
              {cartt.totalQuantity > 0 ? (
                <>
                  {cartt.products?.map((item) => (
                    <span className="cartItem d-flex" key={item._id}>
                      <img
                        src={item.img}
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                        className="cartItemImg m-1"
                        alt={item.name}
                      />
                      <div className="cartItemDetail p-1">
                        <span>{item.name}</span>
                        <span className="m-1 bold">
                          ₹{item.price}
                        </span>
                      </div>
                      <AiFillDelete                        
                        size="30"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch(removeProduct(item._id))
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "90%", margin: "0 10px" }}>
                      Go to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 15 }}>Cart is Empty!!</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
