const express = require("express");
const app = express();
const fs = require("fs");
const IPFS = require("ipfs-api");
const ipfs = IPFS({
 
  //   QmcXFhb8U4BhTdNmF8dGUxrddxjZBsxP3hAQmxqYDiDbVr
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
});



app.get("/", async (req, res) => {
    // console.log(req.url);
    res.send("hello");
  });
  
  
  app.post("/upload/:file", async (req, res) => {
    let name = req.params.file;
    var file = fs.readFileSync(req.params.file);
    var data = new Buffer.from(file);
  
    ipfs.add(data, function (err, data) {
        console.log(data)
    //   if (err) {
    //     console.log(err);
    //   }
      res.send("data[0].hash");
    //   console.log(`https://ipfs.io/ipfs/${data[0].hash}`);
    });
  
  });
  
  app.listen(8000, () => {
    console.log("listing on http://127.0.0.1:8000");
  });
  
