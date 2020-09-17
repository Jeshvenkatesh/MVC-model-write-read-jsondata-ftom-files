const express = require("express");

const ProductController = require("./controller/products");

const router = express.Router();

router.use("/user",ProductController.generateProducts);

module.exports = router;