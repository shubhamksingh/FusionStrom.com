const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, reqired: true, unique: true },
    brand : {type : String},
    description : { type: String, required: true},
    images: { type: String, reqired: true },
    categories: { type: Array},
    size: {type  : Array},
    color: {type: Array   },
    price : {type : Number, required : true},
    rating : {type : Number}
  },
  { timeStamps: true },
);



module.exports = mongoose.model('product', productSchema);
