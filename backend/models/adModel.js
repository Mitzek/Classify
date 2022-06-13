const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
    userId: {
            type: String,
            required: true
    },
    productTitle:{
        type: String,
        required: true
    },  
    productDescription: {
        type: String,
        required: true
    },   
    productPrice:{
        type: Number,
        required: true
    },  
    sellerName: {
        type: String,
        required: true
    },  
     
     sellerContact: {
        type: Number,
        required: true
    },  
      productCity: {
        type: String,
        required: true
    },  
    imgLink: {
        type: String,
        
    },  
});

module.exports = mongoose.model("ADS", adSchema)