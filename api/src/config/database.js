const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    process.env.MONGODB_URL, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true, 
        useFindAndModify: false, 
        useCreateIndex: true 
    }
    
).then(() =>{
    console.log("[dev] 🍃 MongoDB connected!");

}).catch(err => {
    console.log("[dev] ⚠ " + err);
});