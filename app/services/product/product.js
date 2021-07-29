const Product=require('../../models/product')
var filepath = require('filepath');
const dataPath='./app/utils/productdetails.json'
const fs=require('fs')

let p=require('../../utils/filehandler')

class Productclass{
    create(req, res){
        var existProducts = p.getProdData()
        const newProdId = Math.floor(1000 + Math.random() * 9000)
     
        existProducts[newProdId] = req.body
       
        console.log(existProducts);
        p.putProdData(existProducts);
        res.send({success: true, msg: 'product added successfully'})
    }
    
    read(req,res){
        const products = p.getProdData()
        res.send(products)
        }
    
    readprod(req,res){
        var existProducts = p.getProdData()
        fs.readFile(dataPath, 'utf8', (err, data) => {
          const prodId = req.query.id
          res.send(existProducts[prodId])
        })
    }

    update(req, res){
        var existProducts = p.getProdData()
        fs.readFile(dataPath, 'utf8', (err, data) => {
          const prodId = req.query.id
          existProducts[prodId] = req.body;
          p.putProdData(existProducts);
          res.send(`products with id ${prodId} has been updated`)
        })
    }

    delete(req, res){
        fs.readFile(dataPath, 'utf8', (err, data) => {
          var existProducts = p.getProdData()
          const prodId = req.query.id
          delete existProducts[prodId]; 
          p.putProdData(existProducts);
          res.send(`products with id ${prodId} has been deleted`)
        }, true);
      }
}

module.exports=new Productclass()