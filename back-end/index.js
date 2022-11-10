const express = require('express');
const dbconnect = require('./db/dbconfig');
const bodyParser = require('body-parser')
const userRouter = require ("./router/user.router")

const app = express()
const port = 8080

app.use(express.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//router
app.use(userRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log('Server is up to '+ port)
  
  dbconnect.then(x=> console.log('dbconnected and server started at http://localhost:8080'))
//   console.log(`Example app listening on port ${port}`)
})