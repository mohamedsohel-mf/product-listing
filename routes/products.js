const express = require('express');

const productController = require('../controller/products');

const router = express.Router();

router.get('/products/:filters', productController.getProducts);

module.exports = router;