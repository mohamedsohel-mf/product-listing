import ProductService from "../../services/ProductService";
import {
  ALTER_SORT_FILTER,
  SET_ALL_PRODUCTS,
  SET_ALL_FILTERS,
  ALTER_FILTER_DATA,
  ALTER_PAGINATION_DATA,
} from "./ActionTypes";

const getALlProducts = (products) => ({
  type: SET_ALL_PRODUCTS,
  products,
});

const getAllFilters = (filters) => ({
  type: SET_ALL_FILTERS,
  filters,
});

export const setSortFilter = (sortData) => ({
  type: ALTER_SORT_FILTER,
  sortData,
});

export const setFilter = (filterData) => ({
  type: ALTER_FILTER_DATA,
  filterData,
});

export const setPagination = (pagination) => ({
  type: ALTER_PAGINATION_DATA,
  pagination,
});
export const getProducts = async (dispatch, filter) => {
  try {
    const allProductResponse = await ProductService.getAllProducts(filter);
    if (allProductResponse.status === 200 || allProductResponse.statusText === 'OK') {
      dispatch(getALlProducts(allProductResponse.data));
      return true;
    }
  } catch (e) {
    console.log(e);
    throw e.response.data;
  }
  return false;
};
export const getFliters = async (dispatch) => {
  try {
    const allFilterResponse = await ProductService.getAllFilters();
    if (allFilterResponse.status === 200 || allFilterResponse.statusText === 'OK') {
      dispatch(getAllFilters(allFilterResponse.data));
      return true;
    }
  } catch (e) {
    console.log(e);
    throw e.response.data;
  }
  return false;
};
