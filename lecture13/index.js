const express =  require("express")
const FileRouter = require("./routes/routes")

const app = express()
const port = 4000

app.use("/",FileRouter)

app.listen(port,()=>{
    console.log("Sever Running on port 9000")
})









