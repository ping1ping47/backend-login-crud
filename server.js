const express = require("express");
const app = express();
app.listen(3000, () => console.log("Server is running"));
const mongoose = require("mongoose");
require("dotenv").config(); 
MONGODB_URL="your-mongodb-uri-here"

mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);