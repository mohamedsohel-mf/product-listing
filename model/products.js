const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			required: false,
			enum: ["S", "M", "L", "XL"],
			default: "M",
		},
		price: {
			type: Number,
			required: true,
		},
		images: [
			{
				url: {
					type: String,
					required: true,
				},
			},
		],
		brand: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		discount: {
			type: Number,
			default: 0
		},
		description:{
			type: String,
			required: true
		},
		countInStock: {
			type: Number,
			required: true,
			default: 1,
		},
		color:{
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);
const Product = mongoose.model("product", productSchema);
module.exports = Product;
