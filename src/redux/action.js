import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const addToCart = (data) => {
  console.log("*addaction", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeFromCart = (data) => {
  console.log("*removeaction", data);
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};

export const emptyCart = () => {
  console.log("*emptyaction");
  return {
    type: EMPTY_CART,
  };
};
