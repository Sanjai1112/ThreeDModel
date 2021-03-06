const mongoose = require("mongoose");
const FurnituresSchema = new mongoose.Schema({
  category: String,
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
module.exports = mongoose.model("Furniture", FurnituresSchema);
