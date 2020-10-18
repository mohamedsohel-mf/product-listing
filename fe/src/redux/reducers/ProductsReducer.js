import initialState from "./initialState";
import {
  ALTER_FILTER_DATA,
  ALTER_PAGINATION_DATA,
  ALTER_SORT_FILTER,
  SET_ALL_FILTERS,
  SET_ALL_PRODUCTS
} from "../action/ActionTypes";

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    case SET_ALL_FILTERS: {
      return {
        ...state,
        filters: action.filters,
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
    case ALTER_FILTER_DATA: {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          filter: action.filterData,
        },
      };
    }
    case ALTER_PAGINATION_DATA: {
      return {
        ...state,
        filterData: {
          ...state.filterData,
          pagination: action.pagination,
        },
      };
    }
    default: return state;
  }
};
export default ProductsReducer;
