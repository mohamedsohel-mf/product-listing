import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {RadioButton} from "../common/RadioButton";

const Sort = (props) => {
	const {
		buttonLabel,
		className
	} = props;
	const [modal, setModal] = useState(false);
	
	const toggle = () => setModal(!modal);
	return (
		<div>
			<Button color="danger" onClick={toggle}>Open Modal</Button>
			<Modal isOpen toggle={toggle} className={className} backdrop="Static" centered>
				<ModalHeader toggle={toggle} className="pt-1">Sort</ModalHeader>
				<ModalBody>
					<div>
						<RadioButton label={`Price -- Low to High`} onClick={() =>{}} name="sort" type={`radio`} fontClass="fa fa-sort-amount-asc" />
						<hr />
						<RadioButton label={`Price -- High to Low`} onClick={() =>{}} name="sort" type={`radio`} fontClass="fa fa-sort-amount-desc"/>
						<hr />
						<RadioButton label={`Discount -- High to Low`} onClick={() =>{}} name="sort" type={`radio`} fontClass="fa fa-percent" />
						<hr />
					</div>
				</ModalBody>
			</Modal>
		</div>
	);
}

export default Sort;