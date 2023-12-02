import mongoose, { Document } from 'mongoose';

export interface Product extends Document {
  id : string;
  productName: string;
  quantity: number;
  
}

const ProductSchema = new mongoose.Schema({
  id: { type: String, required: true },
  productName: { type: String, required: true },
  quantity: { type: Number, required: true },
});

export default mongoose.model<Product>('Product', ProductSchema);
