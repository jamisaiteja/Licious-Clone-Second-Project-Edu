let express = require('express');
let app =express();
let port= 9310;
let cors = require('cors');
let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let mongoUrl = "mongodb://localhost:27017";
let db;
app.use(cors());



app.get('/', function(req,res){
    res.send("Hi from Express")
})

//get categories
app.get('/categories', function(req,res){
    db.collection('category').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

// get Details 
app.get('/details', function(req,res){
    db.collection('Details').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

//get Best Sellers
app.get('/bestsellers', function(req,res){
    db.collection('Bestsellers').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

// get Boneless Cuts
app.get('/bonelesscuts', function(req,res){
    db.collection('Bonelesscuts').find().toArray((err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

// get items wrt to category
app.get('/detail/:id', function(req,res){
    console.log(req.params.id) 
    let category_id = Number(req.params.id)
    db.collection('Details').find({category_id:category_id}).toArray((err,data)=>{
        if(err) throw err;
        res.send(data)
    })
})

//connection with db
MongoClient.connect(mongoUrl,(err,client)=>{
    if(err) console.log("Error while Connecting")
    db = client.db('liciousdata') //database name
    app.listen(port, (err)=>{
        if(err) throw err,
        console.log(`server listening on port ${port}`)
    })
})




