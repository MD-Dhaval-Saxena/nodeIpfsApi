const express = require("express");
const app = express();
const router = express.Router();

const DataController=require("../Controller/Data.controller")


router.get("/", async(req,res)=>{
    res.send("Welcome")
});
router.get("/view/:name", DataController.getByName);
router.get("/getAll", DataController.getAllData);
router.post("/upload/:file",DataController.UploadFile);


module.exports = router;
