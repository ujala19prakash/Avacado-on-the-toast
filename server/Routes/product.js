const express = require('express');
//const {} = require('../controller/category');
const multer = require('multer');

const router = express.Router();
const shortid = require('shortid');
const path =require('path');
const { createProduct } = require('../controller/product');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,path.join( path.dirname(__dirname), 'uploads'))
    },
    filename: function(req, file, cb){
        cb(null, shortid.generate() + '-' +file.originalname)
    }
})

const upload = multer({storage});

router.post('/product/create', upload.single('productPicture'), createProduct);
//router.get('/category/getcategory', getCategories);
module.exports = router;