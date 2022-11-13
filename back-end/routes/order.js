const Order = require("../models/Order");

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
    const newOrder = await Order.create(req.body);
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update product

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    var updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );

    return res.status(201).json(updatedOrder);
  } catch (e) {
    res.status(500).json(e);
  }

  // res.status(201).json(updatedUser);
});


// delete cart

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
     await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});


// get user order

router.get("/find/:userid", async (req, res) => {
  try {
    var orders = await Order.find({userId :req.params.userid});

    return res.status(201).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});


// get all cart 

router.get('/', verifyTokenAndAdmin, async (req, res)=>{
    try{
      const orders = await Cart.find();
      res.status(200).json(orders);
    }
    catch(err){
        res.status(500).json(err);
    }
})


// Get Monthly income

router.get('/income', verifyTokenAndAdmin, async (req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1));


    try{
        const income = await Order.aggregate([
            {$match : {createdAt : {$gte : previousMonth}}},
            {
                $project : {
                    month : {$month : '$createdAt'},
                    sales : "$amount",

                }
            },
            {
                $group : {
                    _id : '$month',
                    total : {$sum : "$sales"}

                }
            }
        ])
              res.status(200).json(income);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
