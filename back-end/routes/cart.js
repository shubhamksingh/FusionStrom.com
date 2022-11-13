const Cart = require("../models/Cart");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

// CREATE

router.post("/", verifyToken , async (req, res) => {
  console.log("welcome");
  try {
    const newCart = await Cart.create(req.body);
    res.status(200).json(newCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update product

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    var updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );

    return res.status(201).json(updatedCart);
  } catch (e) {
    res.status(500).json(e);
  }

  // res.status(201).json(updatedUser);
});


// delete cart

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
     await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});


// get userCart

router.get("/find/:userid", async (req, res) => {
  try {
    var cart = await Cart.findOne({userId :req.params.userid});

    return res.status(201).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});


// get all cart 

router.get('/', verifyTokenAndAdmin, async (req, res)=>{
    try{
      const carts = await Cart.find();
      res.status(200).json(carts);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
