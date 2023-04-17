// Ipfs Desktop
require('dotenv').config()

const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const app = express();
const port=process.env.port || 3000;


const dataModel = require("../Models/Data");
try {
mongoose.connect(process.env.mongo_url);
} catch (error) {
console.log(error);  
}
const Router = require("../Router/routes");

app.use(express.json());
app.use(Router);

app.listen(port, () => {
  console.log(`listing on http://127.0.0.1:${port}`);
});
