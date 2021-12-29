import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Item = new Schema({
  name: { type: String, maxLength: 255 },
  price: { type: Number, maxLength: 600 },
  image: { type: String, maxLength: 255 },
});

export default mongoose.model("Item", Item);
