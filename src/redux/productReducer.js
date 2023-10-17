import { PRODUCT_LIST } from "./constant";

export const productData = (data = [], action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      console.log("PRODUCT_LIST called", action);
      return [action.data];
    default:
      return data;
  }
};
