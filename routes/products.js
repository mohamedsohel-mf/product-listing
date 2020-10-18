const express = require('express');

const productController = require('../controller/products');

const router = express.Router();

router.get('/products/:filters', productController.getProducts);

router.get('/filters', productController.getFilters)

module.exports = router;