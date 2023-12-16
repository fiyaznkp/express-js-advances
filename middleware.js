const express = require("express")

const app = express()

const port = 5173

app.use(function(req,res,next){
    
    next()
})

app.get("/",(req,res,next)=>{
    res.send("home page")
    next()
})

app.get("/a",(req,res)=>{
    res.send("about page")
})

app.listen(port,()=>{

})