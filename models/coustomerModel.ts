import mongoose from "mongoose";

const coustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    postalCode: { type: Number },
    product: { type: Array, default: [] },
  },
  { timestamps: true }
);
const costumerModel = mongoose.models.costumerModel || mongoose.model("coustomer", coustomerSchema);
export default costumerModel;
