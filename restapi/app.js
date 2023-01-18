let express = require('express');
let app =express();
let port= 9310;


app.get('/', function(req,res){
    res.send("Hi from Express")
})

app.get('/location', function(req,res){
    res.send("Hi from Location")
})

app.listen(port, (err)=>{
    if(err) throw err,
    console.log(`server listening on port ${port}`)
})

