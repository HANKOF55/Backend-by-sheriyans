const mongoose = require('mongoose');

// creating a schema
const userSchema = new mongoose.Schema(
    {
        Name : String, 
        email: String, 
        password: String, 
    }
)

// creating a model 
const userModel = mongoose.model("user", userSchema)

module.exports = userModel;