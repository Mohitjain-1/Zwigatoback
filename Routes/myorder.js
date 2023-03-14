const express = require("express");
const router = express.Router();
const Order= require('../models/Orders');

router.post('/myOrderData', async (req,res) => {
    try{
        let myData=await Order.findOne({"email":req.body.email})
        res.json({orderData:myData})
    }catch(err){
        res.send("Server error",err.message)

    }
})



module.exports=router