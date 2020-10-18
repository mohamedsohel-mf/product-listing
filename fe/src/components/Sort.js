import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector} from "react-redux";
import {
  Modal, ModalHeader, ModalBody,
} from 'reactstrap';
import {RadioButton} from "../common/RadioButton";
import {setSortFilter} from "../redux/action/ProductsAction";

const Sort = ({toggle, className}) => {
	const dispatch = useDispatch();
	const filterData = useSelector(state=> state.ProductsReducer.filterData);
	const handleChange = (e) => {
		dispatch(setSortFilter(e.target.value));
		toggle();
	};
	return (
		<div>
			<Modal isOpen toggle={toggle} className={className} backdrop="Static" centered>
				<ModalHeader toggle={toggle} className="pt-1">Sort</ModalHeader>
				<ModalBody>
					<div>
						<RadioButton
							id="exampleCustomRadio"
							label="Price -- Low to High"
							value={JSON.stringify({
								price: "ASC",
							})}
							checkedValue={filterData.sort}
							onChange={handleChange}
							name="sort"
							type="radio"
							fontClass="fa fa-sort-amount-asc"
						/>
						<hr />
						<RadioButton
							label="Price -- High to Low"
							value={JSON.stringify({price: "DESC"})}
							checkedValue={filterData.sort}
							name="sort"
							type="radio"
							fontClass="fa fa-sort-amount-desc"
							id="exampleCustomRadio2"
							onChange={handleChange}
						/>
						<hr />
						<RadioButton
							label="Discount -- High to Low"
							value={JSON.stringify({discount: "DESC"})}
							checkedValue={filterData.sort}
							name="sort"
							type="radio"
							fontClass="fa fa-percent"
							id="exampleCustomRadio3"
							onChange={handleChange}
						/>
						<hr />
					</div>
				</ModalBody>
			</Modal>
		</div>
  );
};

export default Sort;

Sort.propTypes = {
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Sort.defaultProps = {
  className: '',
};
