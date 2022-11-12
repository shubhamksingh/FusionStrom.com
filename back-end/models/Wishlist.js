const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema(
  {
    userId: { type: String, reqired: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timeStamps: true },
);

module.exports = mongoose.model("cart", wishlistSchema);
