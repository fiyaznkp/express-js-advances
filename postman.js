const express = require('express')

const app = express()

const port =5173

app.get("/",(req,res)=>{
    res.send("home page")

})

app.post("/p",(req,res)=>{
    res.send("profile page")
})

app.listen(port)