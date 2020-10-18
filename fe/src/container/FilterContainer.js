import React from "react";
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import Filter from "../components/Filter";

const FilterContainer = ({toggle, className}) => {
  const dispatch = useDispatch();
  const filterData = useSelector((state) => state.ProductsReducer.filterData.filter);
  const filters = useSelector((state) => state.ProductsReducer.filters);
  return (
		<Filter
			toggle={toggle}
			className={className}
			dispatch={dispatch}
			filters={filters}
			filterData={filterData}
		/>
  );
};

export default FilterContainer;

FilterContainer.propTypes = {
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
};

FilterContainer.defaultProps = {
  className: '',
};
