const express = require('express');
const { default: dbconnect } = require('./db/dbconfig');
const app = express()
const port = 8080

app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  dbconnect.then(x=> console.log('dbconnected and server started at http://localhost:8080'))
//   console.log(`Example app listening on port ${port}`)
})