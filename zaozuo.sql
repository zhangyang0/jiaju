#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库，如果存在的话
DROP DATABASE IF EXISTS zaozuo;
#创建数据库，设置存储的编码
CREATE DATABASE zaozuo CHARSET=UTF8;
#进入该数据库
USE zaozuo;
CREATE TABLE xz_index_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(64),
    subtitle VARCHAR(64),
    price DECIMAL(10,2),
    oldprice DECIMAL(10,2),
    href VARCHAR(128),
    favourable VARCHAR(64),
    color VARCHAR(64),
    country_en VARCHAR(64),
    country VARCHAR(64),
    city VARCHAR(64),
    img VARCHAR(128),
    floor INT
);
INSERT INTO xz_index_product VALUES
(NULL,"造作星期天沙发™","超宽适，全拆洗，全家共享星期天",2599.00,NULL,"/project/details.html?pid=1","新色发布","3色可选","Zelect","中国","北京",'/img/index/floor-1-1@!small.jpg',1),
(NULL,"流方斗柜","实木朴素流方，独立悬浮的空间雕塑",3999.00,NULL,"/project/details.html?pid=2",NULL,NUll,"Keiji Ashizawa","japan","Tokyo",'/img/index/floor-1-2@!small.jpg',1),
(NULL,"蜻蜓椅","轻盈不占地，摞起来不到1/4㎡",439.00,NULL,"/project/details.html?pid=3",NULL,"3色可选","Z-inhouse","中国","北京",'/img/index/floor-1-3@!small.jpg',1),
(NULL,"流方斗柜","实木朴素流方，独立悬浮的空间雕塑",3999.00,NULL,"/project/details.html?pid=4",NULL,NUll,"Keiji Ashizawa","japan","Tokyo",'/img/index/floor-1-4@!small.jpg',1),
(NULL,"慢波5区床垫","5区弹簧+10层精准填充，为深睡眠而生",1999.00,NULL,"/project/details.html?pid=5",NULL,NUll,"Z-inhouse","中国","北京",'/img/index/floor-1-5@!small.jpg',1),
(NULL,"雁翎沙发","长翎自在舒展，优美游弋的客厅中心",2999.00,NULL,"/project/details.html?pid=6",NULL,"三色可选","Jonas Wagell","Swedgen","Stockhoml",'/img/index/floot-1-6@!small.jpg',1),
(NULL,"薄雾吊灯","薄雾弥漫，层叠夕照，深秋时分的至美迷离",899.00,NULL,"/project/details.html?pid=7",NULL,NUll,"Jonas Wagell","Swedgen","Stockhoml",'/img/index/floot-1-7@!small.jpg',1),
(NULL,"云笼果盘","Ins级装饰美，给每日鲜果的精彩仪式",149.00,NULL,"/project/details.html?pid=8",NULL,"三色可选","Z-inhouse","中国","北京",'/img/index/floot-1-8@!small.jpg',1),
(NULL,"造作大先生沙发®","超宽大，极舒适，可拆洗的全尺寸沙发",1699.00,NULL,"/project/details.html?pid=9","经典版85折特惠",NULL,"Z-inhouse","中国","北京",'/img/index/floor-2-1@!small.jpg',2),
(NULL,"造作蝴蝶茶几®","飞舞金属曲线，蝴蝶扬翅落客厅",999.00,NULL,"/project/details.html?pid=10",NULL,"2色可选","Z-inhouse","Constance","Guisseit",'/img/index/floor-2-2@!small.jpg',2),
(NULL,"画板电视柜®","全实木手感，高强度不变形，半开放超大容量",2885.00,NULL,"/project/details.html?pid=11",NULL,"3色可选","Z-inhouse","Constance","Guisseit",'/img/index/floor-2-3@!small.jpg',2),
(NULL,"云帛床®","轻软不撞腿，优美与舒适的平衡",3996.00,NULL,"/project/details.html?pid=12",NULL,"5色可选","Z-inhouse","Constance","Guisseit",'/img/index/floor-2-4@!small.jpg',2),
(NULL,"瓦檐餐桌® 0.7/1.3/1.8米","东方飞檐的现代日常，精致空间的优美餐桌",2399.00,NULL,"/project/details.html?pid=13",NULL,"4色可选","Z-inhouse","Constance","Guisseit",'/img/index/floor-2-5@!small.jpg',2),
(NULL,"造作百合椅®","巴黎造梦者的中国奇想",699.00,NULL,"/project/details.html?pid=14",NULL,"3色可选","Z-inhouse","Constance","Guisseit",'/img/index/floor-2-6@!small.jpg',2),
(NULL,"云团沙发升级版®","巴黎造梦者的中国奇想",2999.00,NULL,"/project/details.html?pid=15",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-2-7@!small.jpg',2),
(NULL,"小Z精梳棉手工提花毯","巴黎造梦者的中国奇想",219.00,NULL,"/project/details.html?pid=16",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-2-8@!small.jpg',2),
(NULL,"造作远山沙发®","瑞典国宝大师中国首作，坐拥究极宽适坐感",3599.00,NULL,"/project/details.html?pid=17",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-1@!small.jpg',3),
(NULL,"鹅卵石沙发","从斯德哥尔摩到北京的温暖大拥抱",2299.00,NULL,"/project/details.html?pid=18",NULL,"4色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-2@!small.jpg',3),
(NULL,"飞鸟沙发","耸立实木，超大净坐宽，构建空间建筑轮廓",2299.00,NULL,"/project/details.html?pid=19",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-3@!small.jpg',3),
(NULL,"造作软糖沙发®","抢眼形态与糖果色，空间的颜值担当",1999.00,NULL,"/project/details.html?pid=20",NULL,"4色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-4@!small.jpg',3),
(NULL,"半月湾沙发","坐入海的臂弯，拥抱片刻逃离的私密海景",3499.00,NULL,"/project/details.html?pid=21",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-5@!small.jpg',3),
(NULL,"雁翎沙发","长翎自在舒展，优美游弋的客厅中心",2999.00,NULL,"/project/details.html?pid=22",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-6@!small.jpg',3),
(NULL,"气球沙发","3色饱满气球，系住心中少年",2599.00,NULL,"/project/details.html?pid=23",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-7@!small.jpg',3),
(NULL,"造作星期天沙发超韧人工皮版™","超韧耐磨8年品质人工皮，白鸭毛柔软内胆",2999.00,NULL,"/project/details.html?pid=24",NULL,NULL,"Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-8@!small.jpg',3),
(NULL,"COFA®","一个沙发，宣告现代主义中国",3599.00,NULL,"/project/details.html?pid=25",NULL,"3色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-9@!small.jpg',3),
(NULL,"Sofa T®","一个沙发，宣告现代主义中国",4599.00,NULL,"/project/details.html?pid=26",NULL,"2色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-10@!small.jpg',3),
(NULL,"造作贝岛沙发™","纯血法国曲线，勾勒当代摩登韵味",3999.00,NULL,"/project/details.html?pid=27",NULL,"2色可选","Jonas Wagell","Swedgen","Stockhlmo",'/img/index/floor-3-11@!small.jpg',3);
CREATE TABLE xz_share(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    pl VARCHAR(200),
    img VARCHAR(128)
);
INSERT INTO xz_share VALUES
(NULL,"沙发很不错，颜色漂亮，简约大气！坐着也很舒服。 安装李师傅也很专业，人好，点赞！","/img/share/share-user1.jpg"),
(NULL,"#每间卧室都不可缺少一个斗柜#真的很喜欢这系列的设计，“画板”，一个自幼便每天伴随我的物件儿，离不开忘不掉，感谢造作这系列的产品，可以让我继续做画家梦。除此之外五斗柜的使用空间也很大，虽然是贴皮的木纹但是有十足的实木质感，有了它之后卧室变得很整洁，分层的收纳让头脑也变得清晰了哈哈","/img/share/share-user2.jpg"),
(NULL,"白色的柜子感觉特别百搭，格子里放上五颜六色的书和小摆件工艺品，柜子内部能装，抽屉错落有致，实用。柜子不高上面还可以放绿植。","/img/share/share-user3.jpg");
CREATE TABLE xz_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(16),
    upwd VARCHAR(16),
    username VARCHAR(32),
    avator VARCHAR(128)
);
INSERT INTO xz_user VALUES
(NULL,"tom1",md5(123),"gray","/img/avator/avator-user1.jpg"),
(NULL,"tom2",md5(123),"yuki","/img/avator/avator-user2.jpg"),
(NULL,"tom3",md5(123),"苏大强","/img/avator/avator-user3.jpg");