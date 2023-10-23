const express = require('express')
const router = express.Router()
router.use(express.json())
//http://localhost:8080
router.get('/',(req,res)=>{
    res.json({message:"Hello Requester"})
})
module.exports = router;