var express = require('express'),
    app = express();

app.get('/',function(req,res){
    res.send("Hello, Wordl!");
});

app.get('*',function(req,res){
    res.send("Page not found!",404);
});


app.listen(8080);
console.log("Express server started on port 8080");
