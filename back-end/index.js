const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const userRouter = require('./routes/user')
const authRoute = require('./routes/auth')
const productRouter = require('./routes/product')
const cartRoute = require('./routes/cart')
const orderRoute = require('./routes/order')
const wishlistRoute = require('./routes/wishlist')


dotenv.config();

const app = express();
var cors = require('cors');
app.use(cors());




app.use(urlencoded({extended: true}));
app.use(express.json());




app.use('/api/auth', authRoute);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);
app.use('/api/whislist', wishlistRoute);





app.get('/', (req, res) => {
  res.send('Hello World!')
})




// mongoose.connect(process.env.MONGO_URL)
mongoose.connect("mongodb://localhost:27017/fusionstrom")
.then(()=> console.log('DB connection successfull !'))
.catch((err)=> {
  console.log(err);
})

app.listen(process.env.PORT || 8000, () => {
  // dbconnect.then(x=> console.log('dbconnected and server started at http://localhost:8080'))
//   console.log(`Example app listening on port ${port}`)

  console.log("server started at http://localhost:8080");
})