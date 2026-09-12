const express =  require("express")
const {readOperation,employeGetById,create,updateData,deleteData} = require("../controller/studentController")
const api = require("../api/api")
const router = express.Router()

const app = express()


router.get("/main",readOperation)

router.get("/employees/:id",employeGetById)

router.post("/employees",create)

router.put("/employees/:id",updateData)

router.delete("/employees/:id",deleteData)

module.exports = router