import initialState from "./initialState";
import {SET_ALL_PRODUCTS} from "../action/ActionTypes";

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    default: return state;
  }
};
export default ProductsReducer;
