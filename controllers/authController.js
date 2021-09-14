
const user=require('../models/authModel.js');
const expressJwt=require('express-jwt');
const _=require('loadash');
const {OAuth2Client}=require('google-auth-library');
const fetch=require('node-fetch');
const {validationResult}=require('express-validator');
const jwt=require('jsonwebtoken');
const {errorHandler}=require('../helpers/dbErrorhandiling.js').





exports.registerController=(req,res)=>{
    const{name,email,password}=req.body
    console.log(name,email,password);
}