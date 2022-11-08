const Product = require('../Model/product');
const shortid = require('shortid');
const slugify=require('slugify');

exports.createProduct = (req, res)=>{
    
   //res.status(200).json({file: req.files, body: req.body});
   const {
    name,price,description,location,category
   } = req.body;
   let productPictures=[];
   if(req.files.length>0){
     productPictures=req.files.map(file=>{
        return {
            img:file.filename
        }
    })
   }
    const product=new Product({
        name:name,
        slug:slugify(name) ,
        price,
        description,
        location,
        productPictures,
        category
    });
    product.save(((error,product)=>{
        if(error) return res.status(400).json({
         error
        });
        if(product){
            res.status(201).json({product});
        }
    }));
};

exports.getProduct = async(req, res)=>{
    try {
        const products = await Product.find()
        res.json(products)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const {
            name, description, price, location, category, productPictures
        } = req.body
        await Product.findOneAndUpdate({_id: req.params.id}, {
            name, description, price, location, category, productPictures
        })

        res.json({msg: "Product Updated Successfully!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete({_id: req.params.id})
        res.json({msg: "Deleted Successfully!"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
};