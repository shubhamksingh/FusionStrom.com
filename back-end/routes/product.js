
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();


router.post('/', verifyTokenAndAdmin, async (req, res)=>{
    
    try{
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;
