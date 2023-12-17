const express = require("express")

const app = express()

const port = 5173

app.get("/",(req,res)=>{
    res.send(req.query)
})

app.listen(port)