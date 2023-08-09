const express = require('express')
const app = express()
const port = 5000

app.get('/', (req,res) => {
  debugger;
  res.send("HELLO")
})

app.listen(port, () => {
  console.log(`Lets listening port : ${port}`)
})