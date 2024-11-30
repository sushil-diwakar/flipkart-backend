const mongoose = require('mongoose');
const {Schema} = require('mongoose');

//Notes Schema

const productSchema = new Schema({
    product_id: {type: String, required:true},
    brand_name: {type:String, required:true},
    product_name: {type:String, required:true},
    short_desc: {type:String, required:true},
    product_details: {type:String, required:true},
    price: {type:String, required:true},
    originalPrice: {type:String, required:true},
    discount: {type:String, required:true},
    image: {type:String, required:true},
    images: { type: [String], required: true },
    colorOption: { type: [Object], required: true } 
})

const Products = mongoose.model('Products', productSchema);
exports.Products = Products;