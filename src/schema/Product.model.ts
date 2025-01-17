import mongoose, { Schema } from "mongoose";
import {
  ProductStatus,
  ProductCollection,
  productEngineCapacity,
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE,
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      required: true,
    },

    productName: {
      type: String,
      required: true,
    },
    

    productPrice: {
      type: Number,
      required: true,
    },

    productLeftCount: {
      type: Number,
      required: true,
    },

    productEngineCapacity: {
      type: String,
      enum: productEngineCapacity,
      default: productEngineCapacity.NORMAL,
    },

    productDesc: {
      type: String,
      required: true,
    },

    productImages: {
      type: [String],
      default: [],
    },

    productViews: {
      type: Number,
      default: 0,
    },
  },

  { timestamps: true } // updatedAt, createdAt
);

productSchema.index(
  { productName: 1, productEngineCapacity: 1, },
  { unique: true }
);

export default mongoose.model("Product", productSchema);
