import React from "react";
import PropTypes from 'prop-types';
import {CustomInput, Row, Col} from "reactstrap";

export const RadioButton = ({
		fontClass, label, onChange,
		value, className, name,
		type, id, checkedValue
}) => (
	<>
		<Row>
			<Col md="8">
				<span>
					<i className={fontClass} aria-hidden="true" />
					{' '} {label}
				</span>
			</Col>
			<Col className="text-right">
				<CustomInput type={type} id={id} name={name} label="" value={value} onChange={onChange} checked={value === JSON.stringify(checkedValue)} />
			</Col>
		</Row>
	</>
)
RadioButton.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	checkedValue: PropTypes.objectOf(PropTypes.any),
	className: PropTypes.string,
};
RadioButton.defaultProps = {
	className: '',
	isLoading: false,
	checkedValue: {},
};
