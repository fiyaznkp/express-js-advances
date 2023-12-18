const express = require("express")

const app = express()

const port=5173


app.get("/",(req,res)=>{
    res.send(req.query.name)
})

app.get("/a/:id",(req,res)=>{
    res.send(req.params.id )
})

app.listen(port)