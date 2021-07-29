const express=require('express')
const ProductObj = require('../services/product/product')
const router=express.Router()
const fs= require('fs')

let validator=require('../utils/helper')

let validate = validator.validate;

var product = {
    type: 'object',
    required: ['name','variant','price'],
    properties: {
        name: {
            type: 'string'
        },
        variant: {
            type: 'string'
        },
        price: {
            type: 'number'
        }
    }
}

router.post('/create',validate({body:product}),ProductObj.create)
router.get('/read',ProductObj.read)
router.patch('/update',ProductObj.update)
router.delete('/delete',ProductObj.delete)
router.get('/readprod',ProductObj.readprod)

module.exports=router