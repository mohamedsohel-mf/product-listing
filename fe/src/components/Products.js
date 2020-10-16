import React, {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import {
  Button, Card, CardBody,
  CardImg, CardSubtitle, CardText,
  CardTitle, Col, Row,
} from "reactstrap";
import {getProducts} from "../redux/action/ProductsAction";

const filterData = {
  sort: {
    createdAt: "DESC",
  },
  filter: {
		color: ["blue"],
	},
  pagination: {
    skip: 0,
    limit: 5,
  },
};
const Products = ({dispatch, products}) => {
  const [loading, setLoading] = useState(true);
  /**
	 * call tasks action too get all the tasks
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
  }, [dispatch]);
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);
  return (
		<Card>
			{products.length ? (
				<Row className="mt-5">
					{products.map((product) => (
						<>
							<Col md="3">
								<Card>
									<CardImg className="img-height img-fluid" top width="100%" src={product.images[0].url} alt={product.name} />
									<CardBody>
										<CardTitle>{product.name}</CardTitle>
										<CardTitle>
											{product.price} {' '}
											<s className="text-danger">{product.discount}% off</s>
										</CardTitle>
										<CardSubtitle className="small text-truncate">{product.description}</CardSubtitle>
									</CardBody>
								</Card>
							</Col>
						</>
					))}
					
					{/*<Col md="3">*/}
					{/*	<Card>*/}
					{/*		<CardImg className="img-fluid" top width="100%" src="https://stylishop.com/pub/media/catalog/product/8/0/80292913_1.jpg" alt="Card image cap" />*/}
					{/*		<CardBody>*/}
					{/*			<CardTitle>Patiala Blue</CardTitle>*/}
					{/*			<CardTitle>*/}
					{/*				$35*/}
					{/*				<s className="text-danger">70% off</s>*/}
					{/*			</CardTitle>*/}
					{/*			<CardSubtitle className="small text-truncate">Product Description</CardSubtitle>*/}
					{/*		</CardBody>*/}
					{/*	</Card>*/}
					{/*</Col>*/}
				</Row>
			) : 'Loading...'}
		</Card>
  );
};
export default Products;

Products.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};
