const mongoose = require("mongoose");
const AnimalsSchema = new mongoose.Schema({
  category:String,
  name: String,
  mtl: String,
  obj: String,
  thumb: String,
  camera: {
    position: String,
    rotation: String,
    Scale: String
  },
  entity: {
    position: String,
    rotation: String,
    scale: String
  }
});
module.exports = mongoose.model("Animal", AnimalsSchema);
