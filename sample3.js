const express = require("express")

const app = express()

const port = 5173

app.use(function(req,res,next){
    next()
})

app.get("/",(req,res)=>{
    res.send("home page")
})

app.get("/a",(req,res)=>
{
    res.send("about page")

})

app.get("/p",(req,res)=>[
    res.send("profile page")
])

app.listen(port,()=>{

})