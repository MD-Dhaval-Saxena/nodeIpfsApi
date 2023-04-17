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
router.delete("/remove/:pin",DataController.UnpinFile);
router.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
  });
  
  // error handler
  router.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .send({ error: { status: err.status || 500, message: err.message } });
  });

module.exports = router;
