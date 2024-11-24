const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.get("/about", (req,res) => {
    res.send("This is About Page.")
})

app.get("/profile", (req,res) => {
    res.send("This is Profile Page.");
})


app.listen(5000)