require("dotenv").config();

const dataModel = require("../Models/Data");
const fs = require("fs");
const IPFS = require("ipfs-api");

const ipfs = IPFS({
  host: "127.0.0.1",
  port: 5001,
  protocol: "http",
  // host: "dweb.link",
  // // port: 8080,
  // protocol: "https",
});
module.exports = {
  getAllData: async (req, res) => {
    try {
      let model = await dataModel.find({});
      res.send(model);
    } catch (error) {
      next(error);
    }
  },
  getByName: async (req, res) => {
    try {
      let model = await dataModel.find({});
      res.send(model);
    } catch (error) {
      // next(error);
    }
  },
  UploadFile: async (req, res, next) => {
    let name = req.params.file;
    try {
      var file = fs.readFileSync(
        `${process.env.Public_path}/${req.params.file}`);
    } catch (error) {
      next(error);
    }
    // console.log(`${process.env.Public_path}/${req.params.file}`);
    var data = new Buffer.from(file);

    ipfs.add(data, async function (err, data) {
      if (err) {
        console.log(err);
      }
      // res.send(data[0].hash);

      let insert = {
        name: name,
        path: data[0].path,
        hash: data[0].hash,
        size: data[0].size,
      };
      console.log(insert);

      let model = new dataModel(insert);
      try {
        await model.save();
        res.send(insert);
      } catch (error) {
        next(error);
      }
      console.log(`https://ipfs.io/ipfs/${data[0].hash}`);
    });
  },
  UnpinFile:async (req,res,next)=>{
    let qId=req.params.pin

    ipfs.pin.rm(qId,(err,qId)=>{
      console.log(err,qId);
    })
    res.send(qId)
  }
};
