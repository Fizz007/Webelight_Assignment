import React from "react";
import { Button, Form } from "react-bootstrap";
import { CartState } from "../Contexts/Context";

function Filters() {
  // const {
  //   productDispatch,
  //   productState: { byStock, byFastDelivery, byRating, sort },
  // } = CartState();
  return (
    <div className="filters p-2">
      {/* <p className="blackText">Sort By:</p>
      <span>
        <Form.Check
          inline
          label="Low Price"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span className=" mx-1">
        <Form.Check
          inline
          label="High Price"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>
      <span className=" mx-1">
        <Form.Check
          inline
          label="Include Out of Stock"
          name="group1"
          type="checkbox"
          id={`inline-3`}
          onChange={() => productDispatch({ type: "FILTER_BY_STOCK" })}
          checked={byStock}
        />
      </span>
      <span className=" mx-1">
        <Form.Check
          inline
          label="Fast Delivery Only"
          name="group1"
          type="checkbox"
          id={`inline-4`}
          onChange={() => productDispatch({ type: "FILTER_BY_DELIVERY" })}
          checked={byFastDelivery}
        />
      </span>
      {/* <span className=" mx-1">
        <label style={{ paddingRight: 10 }}>Rating: </label>
       
      </span> */}
      {/* <Button
        className=" mx-1"
        variant="light"
        onClick={() => productDispatch({ type: "CLEAR_FILTERS" })}
      >
        Clear Filters
      </Button> */}
    </div>
  );
}

export default Filters;
