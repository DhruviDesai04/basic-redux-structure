import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("add called", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.log("remove called", action);
      // data.length = data.length ? data.length - 1 : [];
      // return [...data];
      const newData = data.slice(0, -1);
      return newData;
    case EMPTY_CART:
      console.log("EMPTY_CART called", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
