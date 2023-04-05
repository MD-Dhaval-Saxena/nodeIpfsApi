// Ipfs Desktop
const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const app = express();

const dataModel = require("./Models/Data");
mongoose.connect("mongodb://127.0.0.1:27017/MyIpfs");
const Router=require("./Router/routes")


app.use(express.json());
app.use(Router);

// app.get("/view/:name",async (req,res)=>{
//     let model=await dataModel.find({})
//     res.send(model)

// })
// app.get("/getAll",async (req,res)=>{
//     let model=await dataModel.find({})
    
//     res.send(model)

// })
// app.post("/upload/:file", async (req, res) => {
//   let name = req.params.file;
//   var file = fs.readFileSync(req.params.file);
//   var data = new Buffer.from(file);

//   ipfs.add(data, function (err, data) {
//     if (err) {
//       console.log(err);
//     }
//     res.send(data[0].hash);

//     let insert = {
//       name: name,
//       path: data[0].path,
//       hash: data[0].hash,
//       size: data[0].size,
//     };
//     console.log(insert);

//     let model = new dataModel(insert);
//     try {
//       model.save();
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(`https://ipfs.io/ipfs/${data[0].hash}`);
//   });

// });

app.listen(8000, () => {
  console.log("listing on http://127.0.0.1:8000")
});
