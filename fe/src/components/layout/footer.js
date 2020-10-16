import React from "react";
import {Navbar, Row, Col} from "reactstrap";

const Footer = () => (
	<Navbar color="light" light fixed="bottom" className="custom-nav custom-nav-bg">
		<Row className="w-100 text-center">
			<Col md="6">
				<span className="text-uppercase">
					<i className="fa fa-sort-amount-asc" aria-hidden="true" />
					Sort
				</span>
			</Col>
			<Col md="6 filter-border">
				<span className="text-uppercase">
					<i className="fa fa-filter" aria-hidden="true" />
					Filter
				</span>
			</Col>
		</Row>
	</Navbar>
);
export default Footer;