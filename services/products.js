
const Product = require('../model/products');

/**
 * call db to get all the filters
 * @param {*} req 
 * @param {*} res 
 */
exports.findFilters = async (req, res) => {
	try {
		const filters = {};
		 filters["brand"] = await Product.find().distinct("brand");
		 filters["color"] = await Product.find().distinct("color");
		 filters["category"] = await Product.find().distinct("category");
		res.json(filters);
	} catch (err){
		console.log(err.message);
		res.status(500).send({ msg: err.message });
	}
}
/**
 * return all the products with filter
 */
exports.findProducts = async (req, res)=> {
	try {
		const productDetails = {}
		const filters = JSON.parse(Buffer.from(req.params.filters, "base64").toString("ascii"));
		console.log(filters);
		const {filter, sort, pagination} = filters
		let filterData = []
		let query = {}
		if (filter.hasOwnProperty("name") && filter.name !== "") {
			filterData.push({$or : [{'name': {$regex: filter.name, $options: "i" }}]})
		}
		if (filter.hasOwnProperty("brand")) {
			const data = filterAppend(filter.brand, 'brand')
			console.log(data);
			if(data.length > 0) {
				filterData.push({$or : data})
			}
			
		}
		if (filter.hasOwnProperty("color")) {
			const data = filterAppend(filter.color, 'color')
			if(data.length > 0) {
				filterData.push({$or : data})
			}
		}
		if (filter.hasOwnProperty("category")) {
			const data = filterAppend(filter.category, 'category')
			if(data.length > 0) {
				filterData.push({$or : data})
			}
		}
		if(filterData.length){
			query = {$and: filterData}
		}
		productDetails.totalCount = await Product.count();
		productDetails.products = await Product.find(query, {}, pagination).sort(sort);
		res.json(productDetails);
	} catch (err){
		console.log(err.message);
		res.status(500).send({ msg: err.message });
	}
	return res;
}
/**
 * map filter with the filter key
 * @param {*} filter 
 * @param {*} keyValue 
 */
const filterAppend = (filter, keyValue) => {
	console.log(filter);
	return filter.map((data)=> {
		return {[keyValue]: data}
	})
}