const { urlencoded } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const userRouter = require('./routes/user')
const authRoute = require('./routes/auth')
const productRouter = require('./routes/product')
dotenv.config();

const app = express();





app.use(urlencoded({extended: true}));
app.use(express.json());




app.use('/api/auth', authRoute);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);





app.get('/', (req, res) => {
  res.send('Hello World!')
})




mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('DB connection successfull !'))
.catch((err)=> {
  console.log(err);
})

app.listen(process.env.PORT || 8080, () => {
  // dbconnect.then(x=> console.log('dbconnected and server started at http://localhost:8080'))
//   console.log(`Example app listening on port ${port}`)

  console.log("server started at http://localhost:8080");
})