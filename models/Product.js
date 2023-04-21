const mongoose = require("mongoose")



const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name Must Required"],
        unique: true
    }, maincategory: {
        type: String, 
        required: [true, "Maincategory Must Required"],
        unique: true
    },subcategory: {
        type: String,
        required: [true, "Subcategory Must Required"],
        unique: true
    },brand: {
        type: String,
        required: [true, "Brand Must Required"],
        unique: true
    }, size: {
        type: String,
        required: [true, "Size Must Required"],
        unique: true
    }, color: {
        type: String,
        required: [true, "Color Must Required"],
        unique: true
    }, baseprice: {
        type: Number,
        required: [true, "Base Price Must Required"],
        
    },discount: {
        type: Number,
        default:0
    }, finalprice: {
        type: Number,
        
    }, stock: {
        type: String,
        default:"In Stock"  
    }, discription: {
        type: String,
        default:"This is Sample"  
    }, pic1: {
        type: String,
        default:""  
    }, pic2: {
        type: String,
        default:""  
    }, pic3: {
        type: String,
        default:""  
    },pic4: {
        type: String,
        default:""  
    },
    status: {
        type: String,
        default: "Active"
    }
})


const Product = new mongoose.model("Product", ProductSchema)

module.exports = Product