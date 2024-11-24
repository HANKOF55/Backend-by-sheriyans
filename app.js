const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));



// importing userModel
const userModel = require("./models/user.js");

// To use the above imported model you need to create a schema and a model which i had created in the models folder in user.js file

// Now we need to connect our model to db to do that we create a config folder and then we create a "db.js" file.  

// now importing connection 
const dbConnection = require("./config/db.js");

app.get("/register", (req, res) => {
    res.render("register");
});

app.post("/register", async (req, res) => {
    
    const { username, email, password } = req.body;

    // To create data in db you need userModel
    await userModel.create({
        Name: username, 
        email: email, 
        password: password, 
    })

    res.send("user register"); 
});


app.set("view engine", "ejs");


// for hitting post route you need to add post value in method attribute in front-end 
app.post("/get-form-data", (req,res) => {
    console.log(req.body);
    res.send("Data Recieved");
})

app.get("/", (req,res) => {
    res.render("index");
})

app.listen(5000)





