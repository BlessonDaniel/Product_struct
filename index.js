const express=require('express')
const app=express()
let dotenv = require('dotenv').config();
const product=require('./app/routes/product')
var ValidationError=require('express-json-validator-middleware')
let port=3000
app.use(express.urlencoded({ extended: false }))
     
app.use(express.json())

app.listen(port,()=>{
    console.log("Server started at:"+port)
})

app.use(function(err, req, res, next) {
    if (err instanceof ValidationError) {
        res.status(400).send('invalid');
        next();
    }
    else next(err); 
});

app.use('/api/v1/product_management/',product)
