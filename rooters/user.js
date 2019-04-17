const express = require("express");
var router = express.Router();
router.get("/user",(req,res)=>{
    res.send("用户页面")
})
module.exports=router;