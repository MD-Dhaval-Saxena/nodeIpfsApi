// Ipfs Desktop
const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const app = express();

const dataModel = require("./Models/Data");
try {
mongoose.connect("mongodb://127.0.0.1:27017/MyIpfs");
} catch (error) {
console.log(error);  
}
const Router = require("./Router/routes");

app.use(express.json());
app.use(Router);

app.listen(8000, () => {
  console.log("listing on http://127.0.0.1:8000");
});
