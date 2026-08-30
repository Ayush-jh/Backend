const fs = require("fs")


fs.writeFileSync('./text.txt',"Ayush jha")


const result = fs.readFileSync("./contact.txt","utf-8")
console.log(result)

fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){
        console.log('Erorr', err)
    }else{
        console.log(result)
    }
})



fs.appendFileSync("./text.txt", `Hey I am Ayush Jha\n`)


// COPY FILE

fs.cpSync('./text.txt', './copy.txt')

fs.unlinkSync("./copy.txt")

fs.mkdirSync("my-document/a/b", { recursive: true })



fs.writeFile("./contact2.txt","ayush",(err,data)=>{
    if(err){
        console.log("Error", err)
    }
})


fs.unlink("text.txt",(err)=>{
    if(err){
        console.log("Error", err)
    }
})
