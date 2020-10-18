
const Product = require('../model/products');

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

exports.findProducts = async (req, res)=> {
	try {
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
		const products = await Product.find(query, {}, pagination).sort(sort);
		res.json(products);
	} catch (err){
		console.log(err.message);
		res.status(500).send({ msg: err.message });
	}
	return res;
}
const filterAppend = (filter, keyValue) => {
	console.log(filter);
	return filter.map((data)=> {
		return {[keyValue]: data}
	})
}