var {Validator} = require('express-json-validator-middleware');
 
 
let validator = new Validator({allErrors: true});

module.exports=validator;