import React, {useState} from "react";
import {Navbar, Row, Col} from "reactstrap";
import Sort from "../Sort";
import FilterContainer from "../../container/FilterContainer";

const Footer = () => {
  const [sortModal, setSortModal] = useState(false);
  const [filterModal, setFilterModal] = useState(false);

  // toggle modals
  const toogleSortModal = () => {
    setSortModal(!sortModal);
    setFilterModal(false);
  };
  const toogleFilterModal = () => {
    setFilterModal(!filterModal);
    setSortModal(false);
  };
  return (
		<Navbar color="light" light fixed="bottom" className="custom-nav custom-nav-bg">
			<Row className="w-100 text-center">
				<Col md="6" className="curser-pointer" onClick={toogleSortModal}>
				<span className="text-uppercase">
					<i className="fa fa-sort-amount-asc" aria-hidden="true" />
					Sort
				</span>
				</Col>
				<Col md="6 filter-border" className="curser-pointer" onClick={toogleFilterModal}>
				<span className="text-uppercase ">
					<i className="fa fa-filter" aria-hidden="true" />
					Filter
				</span>
				</Col>
			</Row>
			{sortModal && <Sort toggle={toogleSortModal} />}
			{filterModal && <FilterContainer toggle={toogleFilterModal} />}
		</Navbar>
  );
};
export default Footer;
