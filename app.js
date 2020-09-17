const express = require('express');

const path = require('path');

const ProductController = require("./controller/products");

const bodyParser = require('body-parser');

const formRouter = require("./home");

const userRouter = require('./user');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.urlencoded({extended:false}));

app.set("view engine", 'ejs');

app.set("views","pages");

app.use(userRouter);

app.use(formRouter);

app.use(ProductController.error404);

app.listen(3000);