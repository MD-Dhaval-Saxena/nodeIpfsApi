require("dotenv").config();

const dataModel = require("../Models/Data");
const fs = require("fs");
const IPFS = require("ipfs-api");

const ipfs = IPFS({
  host: "127.0.0.1",
  port: 5001,
  protocol: "http",
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
      next(error);
    }
  },
  UploadFile: async (req, res) => {
    let name = req.params.file;
    // var file = fs.readFileSync(req.params.file);
    var file = fs.readFileSync(`${process.env.Public_path}/${req.params.file}`);
    // console.log(`${process.env.Public_path}/${req.params.file}`);
    var data = new Buffer.from(file);

    ipfs.add(data, function (err, data) {
      if (err) {
        console.log(err);
      }
      res.send(data[0].hash);

      let insert = {
        name: name,
        path: data[0].path,
        hash: data[0].hash,
        size: data[0].size,
      };
      console.log(insert);

      let model = new dataModel(insert);
      try {
        model.save();
      } catch (error) {
        next(error)
      }
      console.log(`https://ipfs.io/ipfs/${data[0].hash}`);
    });
  },
};
