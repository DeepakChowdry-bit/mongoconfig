import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    imgsrc: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
})

const Product = mongoose.models.products || mongoose.model("products", productSchema);

export default Product;  