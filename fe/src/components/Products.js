import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardImg, CardSubtitle,
  CardTitle, Col, Row, Spinner,
} from "reactstrap";
import {getFliters, getProducts} from "../redux/action/ProductsAction";

const Products = ({dispatch, products, filterData}) => {
  const [loading, setLoading] = useState(true);
  /**
	 * call products action to get all the products
	 * @type {Function}
	 */
  const getAllProducts = React.useCallback(async () => {
    try {
      const res = await getProducts(dispatch, filterData);
      if (res) {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }, [dispatch, filterData]);
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  /**
   * call filter action too get all the filters
   * @type {Function}
   */
  const getAllFilters = React.useCallback(async () => {
    try {
      await getFliters(dispatch);
    } catch (e) {
      console.log(e);
      // setLoading(false);
    }
  }, [dispatch]);
  useEffect(() => {
    getAllFilters();
  }, [getAllFilters]);
  /**
   * calculate percentage
   * @param num
   * @param percentage
   * @returns {number}
   */
  const percentage = (num, percentage) => {
    return (num / 100) * percentage;
  };

  /**
   * separate number with commas
   * @param x
   * @returns {string}
   */
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
		<Card>
			{!loading ? (
				<Row className="mt-5">
					{products.length ? products.map((product) => (
						<>
							<Col md="3">
								<Card>
									<CardImg className="img-height img-fluid" top width="100%" src={product.images[0].url} alt={product.name} />
									<CardBody>
										<CardTitle>{product.name}</CardTitle>
										<CardTitle>
                      <i className="fa fa-inr" aria-hidden="true" />
                      {numberWithCommas(product.price)} {' '}
											<s className="small">
                        <i className="fa fa-inr" aria-hidden="true" />
                        {`${numberWithCommas(Math.round(product.price + percentage(product.price, product.discount)))}`}
											</s> {' '}
											<span className="text-danger">
                        {product.discount}% off
											</span>
										</CardTitle>
										<CardSubtitle className="small text-truncate">{product.description}</CardSubtitle>
									</CardBody>
								</Card>
							</Col>
						</>
					)) : 'No Products available'}
				</Row>
			) : (
			  <>
          <Spinner animation="grow" className="position-middle" />
        </>
      )}
		</Card>
  );
};
export default Products;

Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
  filterData: PropTypes.objectOf(PropTypes.any).isRequired,
};
