import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Products from "../components/Products";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);
  return (
		<Products
  		dispatch={dispatch}
  		products={products}
		/>
  );
};

export default ProductContainer;
