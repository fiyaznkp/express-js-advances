const express = require('express')

const app = express()

const port = 5173

const path = require("path")

app.use(express.static('public'))

app.listen(port,()=>{
    
})