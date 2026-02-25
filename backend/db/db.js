
const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        console.log("Trying to connect to database")
        await mongoose.connect(process.env.MONGO)
        .then(()=>console.log("Connected to Database"))
    }catch(error){
        console.log(`Error occured ${error}`);
        process.exit(1);
    }
};
module.exports = connectDB;