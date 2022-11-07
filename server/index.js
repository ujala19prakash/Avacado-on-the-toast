const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const Product = require("./Model/product");
const User = require("./Model/user");
//const { response } = require('express');
//const CategoryRoutes =require('./Routes/category');
dotenv.config();
const app=express();
app.use((cors()));
app.use(express.json());
app.use(express.urlencoded());

//=======================================MIDDLEWARE=========================================

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static("public"));

//==============================================MONGODB CONFIG AND CONNECTION============================
const mongoURI = process.env.mongoURI;
const mongoEssentials = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(mongoURI, mongoEssentials, (error)=>{
    if(error){
        return console.log(error);
    }
    return console.log("Connection to MongoDB was successful");
});

//routes routes
app.use(require("./Routes/category"));
app.use(require('./Routes/product'));

/*app.post("/add-product", async(req, res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result)
})
app.delete("/product/:id",async(req,res)=>{
    let result =await Product.deleteOne({_id: req.params.id});
    res.send(result)
})*/

//=========================================SERVER CONFIGS AND CONNECTIONS============================================
const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
})   