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
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Header() {
  const cartt = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  function handleUser() {
    if (!user) {
      const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
      };
      signInWithGoogle();
    } else {
      const signUserOut = async () => {
        await signOut(auth);
      };
      signUserOut();
    }
  }
  return (
    <Navbar
      variant="dark"
      style={{ height: 80 }}
      classNameNameNameName="lightNavBg d-flex m-auto bg-light"
    >
      <Container classNameNameNameName="d-flex justify-content-between">
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
          <Navbar.Text classNameNameNameName="search">
            <FormControl
              type="search"
              placeholder="Search for a Product..."
              classNameNameNameName="m-auto"
              aria-label="Search"
            />
          </Navbar.Text>
        )}
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="primary">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cartt.totalQuantity ? cartt.totalQuantity : 0}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: '150' }}>
              {cartt.totalQuantity > 0 ? (
                <>
                  {cartt.products?.map((item) => (
                    <span className="cartItem d-flex align-items-center" key={item._id}>
                      <img
                        src={item.img}
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                        className="cartItemImg m-1"
                        alt={item.name}
                      />
                      <div className="cartItemDetail p-1">
                        <span>{item.name}</span>
                        <span className="m-1 bold">₹{item.price}</span>
                      </div>
                      <AiFillDelete
                        size="30"
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(removeProduct(item._id))}
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

        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
             {user ? user.displayName : "Register"}
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="#" onClick={handleUser}>
                {user ? "Logout" : "Login"}
                <FcGoogle size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
