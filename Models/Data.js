const mongoose =require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
  name: String, 
  path: String,
  hash: String,
  size: Number,
  
});

module.exports=mongoose.model("Data",dataSchema)