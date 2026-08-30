const express = require("express")
const app = express()

const PORT = 4000

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.get("/about",(req,res)=>{
    res.send("Anout")
})

app.get("/services",(req,res)=>{
    res.send("Services")
})

app.listen(PORT,()=>{
    console.log(`Port Running on This Port ${PORT}`)
})



