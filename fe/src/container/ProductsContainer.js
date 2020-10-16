import React from "react";
import {useDispatch, useSelector} from "react-redux";
import Products from "../components/Products";

const ProductContainer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);
  const filterData = useSelector((state) => state.ProductsReducer.filterData);
  return (
		<Products
  		dispatch={dispatch}
  		products={products}
  		filterData={filterData}
		/>
  );
};

export default ProductContainer;
