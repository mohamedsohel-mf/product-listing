const productService = require('../services/products');
/*
	get all the products according to the filters
	Filters are json stringified object
 */
exports.getProducts = (req, res) => {
	return productService.findProducts(req, res);
}

exports.getFilters = (req, res)=>{
	return productService.findFilters(req, res)
}