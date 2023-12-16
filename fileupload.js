const express = require("express")

const port = 5173

const upload = require("express-fileupload")

const app = express()

app.use(upload())

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/d.html")
})

app.post("/",(req,res)=>{
    if(req.files){
        console.log(req.files)

        const uploadFile = req.files.file

        const fileName = uploadFile.name

        console.log(fileName)

        uploadFile.mv("./upload1/" + fileName , function(err){
            if (err){
                res.send(err)
            }else{
                res.send("file uploaded")
            }
        })
    }
})
app.listen(port,()=>{

})