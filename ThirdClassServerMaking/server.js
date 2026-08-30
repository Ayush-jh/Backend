const http = require("http")
PORT = 9090

const users = [
    { "id": 1, "name": "Ana", "role": "Admin" },
    { "id": 2, "name": "Bob", "role": "User" },
    { "id": 3, "name": "Cat", "role": "User" },
    { "id": 4, "name": "Dan", "role": "Guest" },
    { "id": 5, "name": "Eva", "role": "User" }
]


const serverMaking = http.createServer((req, res) => {
    console.log("Sever Started.....")

    switch (req.url) {
        case "/":
            res.end(`<h1>Home Page</h1>`)
            break

        case "/about":
            res.end(`<h1>About Page</h1>`)
            break
        case "/services":
            res.end(`<h1>services Page`)
            break
        case "/users":
            res.end(JSON.stringify(users))
            break
        default:
            res.end("404! not Service")
    }

})

serverMaking.listen(PORT, () => {
    console.log("Server Started")
})




