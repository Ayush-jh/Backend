const crypto = require("crypto")
const dns = require("dns")
const { hostname } = require("os")

const password = "jhaayush@123"

const salt = crypto.randomBytes(16).toString("hex")
console.log(salt)


const hash = crypto.createHmac("sha256",salt).update(password).digest("hex")
console.log(hash)

dns.reverse('8.8.8.8',(err,hostname)=>{
    if(err){
        console.log(err)
    }else{
        console.log(hostname)
    }
})






