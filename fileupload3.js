
const express = require("express")

const port = 5173

const upload = require("express-fileupload")

const app = express()

app.use(upload())

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/f.html")
})

app.post("/",(req,res)=>{
    if(req.files){
        console.log(req.files)

        const file = req.files.file

        const filename = file.name

        console.log(filename)

        file.mv("./upload2/" + filename , function(err) {
            if(err){
                res.send(err)
            }else{
              res.send("file uploaded")
            }
        })
    }
})

app.listen(port)