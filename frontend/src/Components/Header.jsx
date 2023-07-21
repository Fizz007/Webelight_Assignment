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
import { CartState } from "../Contexts/Context";
import myntraLogo from "../assets/myntraLogo.png";
import "./styles.css";

function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
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
              src={myntraLogo}
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
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 150 }}>
              {cart.length > 0 ? (
                <>
                  {cart.map((item) => (
                    <span className="cartItem d-flex" key={item.id}>
                      <img
                        src={item.image}
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                        className="cartItemImg m-1"
                        alt={item.name}
                      />
                      <div className="cartItemDetail p-1">
                        <span>{item.name}</span>
                        <span className="m-1 bold">
                          ₹{item.price.split(".")[0]}
                        </span>
                      </div>
                      <AiFillDelete
                        fontSize="50px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: item })
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
