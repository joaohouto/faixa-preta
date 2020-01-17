const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(
    process.env.MONGODB_URL, 
    { useUnifiedTopology: true, useNewUrlParser: true }
);

mongoose.connection.on("connected", () =>{
    console.log("[dev] MongoDB connected!");
});

mongoose.connection.on("error", (error) =>{
    console.log("[dev] " + error);
});