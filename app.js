// importing express package
const express = require("express");

// storing express function in app variable
const app = express();

// setting up ejs 
app.set("view engine", "ejs");


// setting up routes using express

// creating a middleware
// middleware generally used for sharing error responses
app.use((req, res, next) => {
    console.log("This is a middleware");

    return next(); 
})

// creating a custom middleware for a single route
app.get("/", (req, res, next) => {
    const a = 5; 
    const b = 4;
    console.log(a+b);

    next();

}
 , (req,res) => {
    res.render("index");
})

app.get("/about", (req,res) => {
    res.send("This is About Page.")
})

app.get("/profile", (req,res) => {
    res.send("This is Profile Page.");
})

// listeining server on port 5000
app.listen(5000)