const http = require("http");


const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end("<h1> Hello Harish</h1>")
    }

    else if(req.url == "/home"){
        res.end("<h1>This is Home Page.</h1>");
    }

    else if(req.url == "/contact"){
        res.end("<h1>This is Contact Page.</h1>");
    }

    else if(req.url == "/service"){
        res.end("<h1>This is Services Page.</h1>");
    }

    else if(req.url == "/about"){
        res.end("<h1>This is About Page.</h1>");
    }
    
})


server.listen(5000);