const mongoose = require("mongoose");

const connectDB= require("./config/db");
const products = require('./data/products');
const Products = require('./model/products');

connectDB();

const importData = async () => {
	try {
		await Products.deleteMany();
		
		await Products.insertMany(products);
		
		console.log("Data Imported!");
		process.exit();
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

const removeData = async () => {
	try {
		await Products.deleteMany();
		
		console.log("Data Removed succesfully!");
		process.exit();
	} catch (error) {
		console.log(`${error}`);
		process.exit(1);
	}
};

if (process.argv[2] === "-d") {
	removeData();
} else {
	importData();
}