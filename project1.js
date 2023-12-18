const express = require("express")

const app = express()

const port =5173

var users = []

app.use(express.json())

app.post("/users",(req,res)=>{
    const {name,email,username} = req.body

    const newUser = {id:users.length+1, name, email ,username}

    users.push(newUser)

    res.status(201).json(newUser)
})

app.get("/users",(req,res)=>{
    res.json(users)
})

app.get("/users/:id",(req,res)=>{
    const userId = parseInt(req.params.id)

    const user = users.find(user => user.id === userId)

    if(user){
        res.send(user)
    }else{
        res.status(404).json({error : "user not found"})
    }
})

app.put("/users/:id",(req,res)=>{
     const userId = parseInt(req.params.id)

     const {name,email,username} = req.body

     const updatedUser = users.find(user => user.id === userId)

     if(updatedUser) {
        updatedUser.name = name
        updatedUser.email = email
        updatedUser.username = username

        res.json(updatedUser)
     }else{
        res.status(404).json({error : "user not found"})
     }
})


app.delete("/users/:id", (req,res)=>{
    const userId = parseInt(req.params.id)

    const deleteUser = users.find(user => user.id === userId)

    const initialLength = users.length

    users = users.filter(user => user.id !== userId)


    if(users.length < initialLength) {
        res.json({message: "user deleted successfully"})
    }else{
        res.status(404).json({error: ' user not found'})
    }
})

app.listen(port)