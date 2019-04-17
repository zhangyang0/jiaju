const express = require("express");
const pool = require("../pool");
var router = express.Router();
router.post("/share",(req,res)=>{
    var uid = req.body.uid;
    if(uid){
        pool.query(`SELECT pl,img,username,avator from xz_user, xz_share WHERE uid=sid && uid IN(${uid})`,(err,result)=>{
            if(err) throw err;
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"*"
               })
            if(result.length>0){
                res.write(JSON.stringify({code:1,data:result}))
                res.end();
            }else{
                res.write(JSON.stringify({code:1,data:result}))
                res.end();
            }
        })
    }
})


module.exports=router;