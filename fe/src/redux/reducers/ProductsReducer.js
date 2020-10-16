import initialState from "./initialState";
import {ALTER_SORT_FILTER, SET_ALL_PRODUCTS} from "../action/ActionTypes";

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    case ALTER_SORT_FILTER: {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          sort: JSON.parse(action.sortData),
        },
      };
    }
    default: return state;
  }
};
export default ProductsReducer;
