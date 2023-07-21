import { createContext, useContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import { faker } from "@faker-js/faker";

const Cart = createContext();
faker.seed(99);
const Context = ({ children }) => {
  const products = [...Array(30)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    price: faker.commerce.price(),
    image: faker.image.city(640, 480, true),
    inStock: faker.datatype.number({ min: 0, max: 7 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.datatype.number({ min: 1, max: 5 }),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  console.log(productState);
  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
