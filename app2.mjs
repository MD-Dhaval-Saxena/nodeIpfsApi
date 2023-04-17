  import * as dotenv from 'dotenv'
  dotenv.config()
  import express from 'express'
  const app = express();
  import fs from 'fs';
  import { create } from 'ipfs-http-client'

  // const ipfs=create("http://127.0.0.1:5001");
  const ipfs=create("http://127.0.0.1:45005/");

  const key=process.env.pinata_key;

  let connect=async()=>{
    let result=await ipfs.pin.remote.service.add('pinata', {
      endpoint: new URL('https://api.pinata.cloud'),
      key: key
    })
  } 
  // connect()






  // console.log(ipfs);
  // app.get("/", async (req, res) => {
  //     // console.log(req.url);
  //     res.send("hello");
  //   });
    
    
    app.post("/upload/:file", async (req, res) => {
      let name = req.params.file;
      var file = fs.readFileSync(`${process.env.Public_path}/${req.params.file}`);
      var data = new Buffer.from(file);
    
      
      let result=await ipfs.add(file)
      res.send(result)
    
    });

    
    app.listen(8000, () => {
      console.log("listing on http://127.0.0.1:8000");
    });
    
