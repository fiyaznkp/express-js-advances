c
const path = require("path")
const fileUpload = require('express-fileupload');

app.use(fileUpload())

app.get("/",(req,res)=>{
    res.sendFile(path.join(String(__dirname),"b.html"))
})

app.post("/",(req,res)=>{
    if(req.files){
        console.log(req.files)
    }

    const upload = req.files.file

    const filesUploaded = upload.name

    console.log(filesUploaded)

    upload.mv("./uploads/" + filesUploaded, function(err){
        if(err){
            res.send(err)
        }else{
            res.send("file uploaded")
        }
    })
})

app.listen(port,()=>{
  console.log(`server running on port 5173`)
})