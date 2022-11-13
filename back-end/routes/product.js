const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

router.post("/", verifyTokenAndAdmin, async (req, res) => {
  console.log("welcome");
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update product

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    var updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true },
    );

    return res.status(201).json(updatedProduct);
  } catch (e) {
    res.status(500).json(e);
  }

  // res.status(201).json(updatedUser);
});

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    var deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/find/:id", async (req, res) => {
  try {
    var product = await Product.findById(req.params.id);

    return res.status(201).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});
//


router.get("/", async (req, res) => {
  const qNew = req.query.new;
  let  qCategory = req.query.category;
  const qColor = req.query.color;
  const qSize = req.query.size;
  console.log(qCategory);

  try {
    let products;
    if (qNew) {
      products = await Product.find()
        .sort({ createdAt: -1 })
        .limit(1);
    } else if(qCategory) {

      qCategory = qCategory.toString().split("%");
      console.log(qCategory)
      products = await Product.find({
        categories: {
            $all: qCategory,
          },
      });
    } else {
      products = await Product.find();
    }

    res.status(200).send(products);


  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
