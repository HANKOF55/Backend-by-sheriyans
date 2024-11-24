const express = require("express");
const app = express();

// importing userModel
const userModel = require("./models/user.js");

// To use the above imported model you need to create a schema and a model which i had created in the models folder in user.js file

// Now we need to connect our model to db to do that we create a config folder and then we create a "db.js" file.  

// now importing connection 
const dbConnection = require("./config/db.js");




app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// for hitting post route you need to add post value in method attribute in front-end 
app.post("/get-form-data", (req,res) => {
    console.log(req.body);
    res.send("Data Recieved");
})

app.get("/", (req,res) => {
    res.render("index");
})

app.listen(5000)





