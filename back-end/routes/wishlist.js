const Wishlist = require("../models/Wishlist");

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
    const newWishlist = await Wishlist.create(req.body);
    res.status(200).json(newWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update product

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    var updatedWishlist = await Wishlist.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );

    return res.status(201).json(updatedWishlist);
  } catch (e) {
    res.status(500).json(e);
  }

  // res.status(201).json(updatedUser);
});


// delete cart

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
     await Wishlist.findByIdAndDelete(req.params.id);
    res.status(200).json("Wishlist has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});


// get userCart

router.get("/find/:userid", async (req, res) => {
  try {
    var wishlist = await Wishlist.findOne({userId :req.params.userid});

    return res.status(201).json(wishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});


// get all cart for admin

router.get('/', verifyTokenAndAdmin, async (req, res)=>{
    try{
      const wishlists = await Wishlist.find();
      res.status(200).json(wishlists);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
