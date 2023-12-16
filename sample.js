const express = require('express');
const app = express();
const port = 5173


const fileUpload = require('express-fileupload');
const path = require('path');

app.use(fileUpload())

app.get("/", (req, res) => {
  res.sendFile(path.join(String(__dirname), "a.html"));
});

app.post("/", (req,res)=>{
    if(req.files) {
      console.log(req.files)

      const upload = req.files.file

      const uploadFile = upload.name

      console.log(uploadFile)

      upload.mv("./uploads/" + uploadFile, function(err){
        if(err){
         res.send(err)
        }else{
         res.send("file uploaded")
        }
     })
     
    }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
