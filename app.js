const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// importing userModel
const userModel = require("./models/user.js");

// now importing connection 
const dbConnection = require("./config/db.js");

// Read Operation
app.get("/users", (req, res) => {

    // .find() method fetch all the users from database and send it to then 
    userModel.find().then((users) => {
        res.send(users);
    })
})

//Update Operation
app.get("/update-user", async (req, res) => {
    
    await userModel.findOneAndUpdate({
        Name: "Harish"
    }, 
    {
        email: "harish@mail.in"
    })

    res.send("user updated"); 
})

//Delete Operation
app.get("/delete-user", async (req, res) => {
    
    await userModel.findOneAndDelete({
        Name: "Harish" 
    })

    res.send("User Deleted");
})

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




// for hitting post route you need to add post value in method attribute in front-end 
app.post("/get-form-data", (req,res) => {
    console.log(req.body);
    res.send("Data Recieved");
})

app.get("/", (req,res) => {
    res.render("index");
})

app.listen(5000)





