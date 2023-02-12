import mongoose from "mongoose";

const coustomerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    postalCode: { type: Number },
    products: { type: Array, default: [] },
  },
  { timestamps: true }
);
let costumerModel: any;
if (mongoose.models.costumerModel) {
  costumerModel = mongoose.models.costumerModel;
} else {
  costumerModel = mongoose.model("coustomer", coustomerSchema);
}

export { costumerModel };
