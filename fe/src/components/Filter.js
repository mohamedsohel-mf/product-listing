import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, Row, Col, CustomInput, FormGroup, Navbar} from 'reactstrap';
import Footer from "./layout/footer";

const Filter = (props) => {
	const {
		buttonLabel,
		className
	} = props;
	const [modal, setModal] = useState(false);
	
	const toggle = () => setModal(!modal);
	return (
		<div>
			<Button color="danger" onClick={toggle}>Open Modal</Button>
			<Modal isOpen toggle={toggle} className={className} backdrop="Static" centered size="lg">
				<ModalHeader toggle={toggle} className="py-1">Filter</ModalHeader>
				<ModalBody className="pt-0">
					<Row>
						<Col md={4} className="bg-light overflow-filter">
							<div className="py-1">
								Brand
							</div>
							<hr className="w-100 "/>
							<div className="py-1">
								Color
							</div>
						</Col>
						<Col md={8} className="overflow-filter pt-1">
								<div>
									<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Oppo" />
									<CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Pocco" className="mt-2" />
								</div>
						</Col>
					</Row>
					<div className="bg-white fixed-bottom custom-filter custom-nav-bg">
						<Button className="w-100 bg-dark text-white my-1"> Apply Filter</Button>
					</div>
				</ModalBody>
			</Modal>
		</div>
	);
};
export default Filter;