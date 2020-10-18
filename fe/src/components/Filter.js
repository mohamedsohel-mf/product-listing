import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useImmer } from "use-immer";
import {
  Button, Modal, ModalHeader, ModalBody, Row, Col, CustomInput,
} from 'reactstrap';
import {setFilter} from "../redux/action/ProductsAction";

const Filter = ({
  toggle, className, dispatch, filters, filterData,
}) => {
  const [activeTab, setActiveTab] = useState("brand");
  const [filterValue, setFilterValue] = useImmer(filterData);

  const handleChange = (e) => {
    e.persist();
    // used useimmer for immutable state change
    setFilterValue((data) => {
      if (!data[e.target.name]) {
        data[e.target.name] = [e.target.value];
      } else if (data[e.target.name].indexOf(e.target.value) > -1) {
        data[e.target.name].splice(e.target.value, 1);
      } else {
        data[e.target.name] = [...data[e.target.name], e.target.value];
      }
    });
    // commented using usestate
    // const data = {...filterValue};
    // if (!data[e.target.name]) {
    //   data[e.target.name] = [e.target.value];
    // } else if (data[e.target.name].indexOf(e.target.value) > -1) {
    //   data[e.target.name].splice(e.target.value, 1);
    // } else {
    //   data[e.target.name] = [...data[e.target.name], e.target.value];
    // }
    // console.log(data);
    // setFilterValue(data);
  };

  const applyFilter = () => {
    dispatch(setFilter(filterValue));
    toggle();
  };

  const setFilterTag = (filterKey) => {
    setActiveTab(filterKey);
  };
  return (
		<div>
			<Modal isOpen toggle={toggle} className={className} backdrop="Static" centered size="lg">
				<ModalHeader toggle={toggle} className="py-1">Filter</ModalHeader>
				<ModalBody className="pt-0">
					<Row>
						<Col md={4} className="bg-light overflow-filter">
							{Object.keys(filters).map((filterKey) => (
								<>
									<div
										className={`py-1 text-capitalize filter-bar pt-1 curser-pointer ${filterKey === activeTab ? `filter-bar-active` : ``}`}
										onClick={() => { setFilterTag(filterKey); }}
									>
										{filterKey}
									</div>
									<hr />
								</>
							))}
						</Col>
						<Col md={8} className="overflow-filter pt-1">
							<div>
								{filters[activeTab] && filters[activeTab].map((value) => (
									<>
										<CustomInput
											id={`${activeTab}_${value}`}
											onClick={handleChange}
											type="checkbox"
											name={activeTab}
											label={value}
											value={value}
											className="mt-2"
											checked={filterValue[activeTab] ? filterValue[activeTab].includes(value) : false}
										/>
									</>
								))}
							</div>
						</Col>
					</Row>
					<div className="bg-white fixed-bottom custom-filter custom-nav-bg">
						<Button className="w-100 bg-dark text-white my-1" onClick={applyFilter}> Apply Filter</Button>
					</div>
				</ModalBody>
			</Modal>
		</div>
  );
};
export default Filter;

Filter.propTypes = {
  toggle: PropTypes.func.isRequired,
  className: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  filters: PropTypes.objectOf(PropTypes.any).isRequired,
  filterData: PropTypes.objectOf(PropTypes.any).isRequired,
};

Filter.defaultProps = {
  className: '',
};
