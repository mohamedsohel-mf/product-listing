import React from "react";
import PropTypes from 'prop-types';
import {CustomInput, Row, Col} from "reactstrap";

export const RadioButton = ({
		fontClass, label, onClick,
		value, className, name,
		type,
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
				<CustomInput type={type} id={name} name={name} label="" value={value} />
			</Col>
		</Row>
	</>
)
RadioButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
};
RadioButton.defaultProps = {
	className: '',
	isLoading: false,
};
