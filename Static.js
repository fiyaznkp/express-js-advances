const express = require("express")

const app = express()

const port = 5173

const path = require("path")

app.use(express.static("public"))

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, "public", "index.html"));
// })


app.listen(port)