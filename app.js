// importing express package
const express = require("express");

// storing express function in app variable
const app = express();

// setting up ejs 
app.set("view engine", "ejs");


// These are the buildin middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// The above code will show the data entered in the form to the terminal

// NOTE: You need to create a Public folder for static files
// here you need add this line of code to tell express about the default static folder
app.use(express.static("public"));


// creating a route for submitting form data
// app.get("/get-form-data", (req,res) => {
//     console.log(req.query)
//     res.send("data recieved");
// })
//Above get method will show the data entered by user in url so to avoid this we use post method


// for hitting post route you need to add post value in method attribute in front-end 
app.post("/get-form-data", (req,res) => {
    console.log(req.body);
    res.send("Data Recieved");
})

// creating a custom middleware for a single route
app.get("/", (req,res) => {
    res.render("index");
})

// listeining server on port 5000
app.listen(5000)





