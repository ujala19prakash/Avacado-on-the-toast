const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    price: {type: Number, required: true},
    description: {type: String, required: true, trim: true},
    location: {type: String, required: true},
    productPictures: [{img: {type: String}}],
    category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    //createdBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    updatesAt: Date,
}, { timestamps: true });

module.exports=mongoose.model('Product',productSchema);