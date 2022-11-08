const { default: mongoose } = require('mongoose')
require('../models/authModels')

const connection = async () => {
  try {
    const connection = await mongoose.connect(process.env.mongoURI, {
      useNewUrlParser: true,
    })

    if (connection) {
      console.log('db connected')
    }
  } catch (e) {
    console.log(e)
  }
}
/*const mongoURI = process.env.mongoURI;
const mongoEssentials = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(mongoURI, mongoEssentials, (error)=>{
    if(error){
        return console.log(error);
    }
    return console.log("Connection to MongoDB was successful");
});*/

module.exports = connection;