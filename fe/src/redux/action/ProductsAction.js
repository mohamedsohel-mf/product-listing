import ProductService from "../../services/ProductService";
import {SET_ALL_PRODUCTS} from "./ActionTypes";

export const getALlProducts = (products) => ({
  type: SET_ALL_PRODUCTS,
  products,
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
