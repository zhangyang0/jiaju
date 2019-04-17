const express = require("express");
const pool = require("../pool");
var router = express.Router();
router.get("/index",(req,res)=>{
    var flo=req.query.floor;
    //console.log(floor);
    pool.query(`SELECT pid,title,subtitle,price,oldprice,href,favourable,color ,country_en,country,city,img,floor FROM xz_index_product WHERE floor IN (${flo})`,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.writeHead(200,{
                "Access-Control-Allow-Origin":"*"
               })
            res.write(JSON.stringify({code:1,data:result}))
            res.end();
        }
    })
})
module.exports=router;