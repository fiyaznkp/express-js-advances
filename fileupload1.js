const express = require("express")

const app = express()

const upload = require("express-fileupload")

const port = 5173

app.use(upload())

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/e.html")

})

app.post("/",(req,res)=>{
    if(req.files){
        console.log(req.files)

        const uploadedFile = req.files.file

        const fileName = uploadedFile.name

        console.log(fileName)

        uploadedFile.mv("./uploads2/" + fileName,function(err){
            if(err){
                res.send(err)
            }else{
                res.send('file uploaded')
            }
        })
    }
})

app.listen(port)