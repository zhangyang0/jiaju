const express=require("express");
const bodyParser=require('body-parser');
const proRouter = require("./rooters/products");
const userRouter = require("./rooters/user");
const shareRouter = require("./rooters/share");
var server = express();
server.listen(5000);
/****静态资源托管****/
server.use(express.static("./public"));
/****静态资源托管 END****/

/****配置路由器****************/
server.use(bodyParser.urlencoded({
    extended:false
}));

server.use("",proRouter);
server.use("",userRouter);
server.use("",shareRouter);
/****配置路由器 END****************/