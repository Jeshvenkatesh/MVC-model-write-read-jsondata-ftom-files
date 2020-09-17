const express = require('express');

const ProductController = require("./controller/products");

const router = express.Router();

router.get("/",ProductController.getProduct);

router.post("/text",ProductController.postProducts);

module.exports = router;
