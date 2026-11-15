import mongoose from "mongoose";

const AccessorySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    bestSeller: {
      type: Boolean,
      default: false,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    isForWoman: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

/* Model, Schema, Collection */
const Accessory = mongoose.model("Accessory", AccessorySchema, "accesorios");

export default Accessory;
