$(function(){
    /******头部*******/
    //$("header").headerAll();
    var $header=$("header");
    var $header1=$(`<nav id="header1">
        <ul>
            <li><span></span><a href="">实体店</a></li>
            <li><a href="">了解造作</a></li>
            <li><a href="">商业合作</a></li>
            <li><a href=""><img src="./img/base/8576f41b91454a9dcfe10117c7866da9.png" alt=""></a></li>
            <li><a href=""><img src="./img/base/10de03eec28b15b7b71d2e583f160d61.png" alt=""></a></li>
        </ul>
        </nav>`).appendTo($header);
    var $header2=$(
        `<ul class="left">
            <li id="logo">
            <a href=""></a>
            </li>
            <li>
            <a href="">首页</a>
            </li>
            <li class="sf" data-hid="li">
            <a href="">沙发</a>
            </li>
            <li class="bed" data-hid="li">
            <a href="">床·床具</a>
            </li>
            <li class="gj" data-hid="li">
            <a href="">柜架</a>
            </li>
            <li class="yd" data-hid="li">
            <a href="">椅凳</a>
            </li>
            <li class="desk" data-hid="li">
            <a href="">桌几</a>
            </li>
            <li class="leg" data-hid="li">
            <a href="">灯具</a>
            </li>
            <li class="jf" data-hid="li">
            <a href="">家纺</a>
            </li>
            <li class="food" data-hid="li">
            <a href="">餐具</a>
            </li>
            <li class="zs" data-hid="li">
            <a href="">装饰</a>
            </li>
            <li class="co" data-hid="li">
            <a href="">COSMO</a>
            </li>
            <li class="gift">
            <a href="">礼品</a>
            </li>
        </ul>
        <ul class="right">        
            <li><span></span><a href="">实体店</a></li>
            <li><a href="">了解造作</a></li>
            <li><a href="">商业合作</a></li>
            <li><a href=""><img src="./img/base/8576f41b91454a9dcfe10117c7866da9.png" alt=""></a></li>
            <li><a href=""><img src="./img/base/10de03eec28b15b7b71d2e583f160d61.png" alt=""></a></li>
    </ul>`
    ).appendTo($header).hide()
     $(window).scroll(function(){
         var h = $(window).scrollTop();
         if(h<250){
             $header1.slideDown();
             $header2.hide();
         }else{
            $header1.hide();
            $header2.slideDown();
         }
     })
    /******头部 END*******/
    /******尾部***********/
    $(`<div id="top">
    <div class="top_left">
        <div>
            <a href=""><img src="./img/base/195e0858b3515b4dd666e69fda404737.png">
            </a>
            <p><a href="">zaozuo.com</a></p> 
        </div>
        <div>
            <span>
                <a href="">
            
                </a>
            </span>
            <span>
                <a href="">
                
                </a>  
            </span>
            
        </div>
    </div>
    <div class="top_center">
        <ul>
            <li>
                <ul>
                    <li>关于造作</li>
                    <li><a href="">团队介绍</a></li>
                    <li><a href="">设计师团</a></li>
                    <li><a href="">媒体报道</a></li>
                    <li><a href="">加入造作</a></li>
                    <li><a href="">Designer Hiring</a></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>帮助中心</li>
                    <li><a href="">购物指南</a></li>
                    <li><a href="">订单管理</a></li>
                    <li><a href="">常见问题</a></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>服务支持</li>
                    <li><a href="">服务保障</a></li>
                    <li><a href="">用户协议</a></li>
                    <li><a href="">物流售后服务</a></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>商业合作</li>
                    <li><a href="">集合采购</a></li>
                    <li><a href="">招商邀约</a></li>
                    <li><a href="">品牌合作</a></li>
                    <li><a href="">媒体合作</a></li>
                    <li><a href="">设计师入驻</a></li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="top_right">
        <div>
            <p>联系我们</p>
            <p>
                <span>400-6636-926</span>
                <span>（9:00~21:00）</span>
            </p>
            <p><a href="">在线客服</a></p>
            <p ><a href="" class="hov" >造作全国实体店&gt;</a></p>
        </div>
    </div>
</div>
<div id="footer">
    <p><a href="">Copyright © 2018 zaozuo.com Inc.All Rights Reserved. 北京造化科技有限公司</a></p>
    <p>
        <span><a href="">版权所有</a></span>
        <span><a href="">京ICP备14049641号-1</a></span>
        <span><a href="">增值电信业务经营许可证：京ICP证150098号</a></span>
    </p>
    <p>
        <a href="">造作官网-全球设计师创作家居品牌</a>
    </p>
</div>`).appendTo($("footer"))
    /******尾部 END*******/

    $(".header_bottom>ul>li").hover(function(){
        $(this).children("div").show();
        $(this).children("div").addClass("hover")
    },function(){
        $(this).children("div").hide();
        $(this).children("div").removeClass("hover")
    })
    
    /******sidebar*****/
    $("#sidebar").sidebar()
    /******sidebar 结束*****/

    /****1F ajax*******/
    $.ajax({
        url:"http://127.0.0.1:5000/index",
        data:{floor:"1,2"},
        type:"get",
        dataType:"json",
        success:function(result){
            var floor1 = result.data.slice(0,8);
            var floor2 = result.data.slice(8,-1);
            for(var product of floor1){
                var oldprice="";
                var favourable="";
                var color="";
                if(!product.oldprice){
                    oldprice="d-none"
                }
                if(!product.favourable){
                    favourable="d-none"
                }
                if(!product.color){
                    color="d-none";
                }
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).appendTo($("#floor-1 .content>ul"))
            }
            for(var product of floor2){
                var oldprice="";
                var favourable="";
                var color="";
                if(!product.oldprice){
                    oldprice="d-none"
                }
                if(!product.favourable){
                    favourable="d-none"
                }
                if(!product.color){
                    color="d-none";
                }
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).appendTo($("#floor-2 .content>ul"))
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-4 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-5 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-6 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-7 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-8 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-9 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-10 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-11 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-12 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-13 .content>ul"));
                $(`
                <li>
                <a href="${product.href}" class="item-sh">
                    <div class="img-show">
                        <img src="http://127.0.0.1:5000${product.img}">
                    </div>
                    <div class="img-hd">
                        <div>
                            <p>${product.subtitle}</p>
                        </div>        
                        <div class="city">
                            <div class="title ">
                                ${product.country_en}
                            </div>
                            <div class="country">
                                <span>${product.country} |</span>
                                <span>${product.city}</span>
                            </div>
                        </div>        
                    </div> 
                    <span>${product.title}</span>
                </a>
                <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                </li>`
                ).prependTo($("#floor-14 .content>ul"));
                
                
            }
        }
    })
    /****1,2F ajax END*******/
    /****3F ajax *******/
    var getFloor = false;
    $(window).scroll(function(){
     var h= $(this).scrollTop();
        if(h>2000 && getFloor==false){
            $.ajax({
                    url:"http://127.0.0.1:5000/index",
                    data:{floor:"3"},
                    type:"get",
                    dataType:"json",
                    success:function(result){
                        getFloor = true;
                        for(var product of result.data){
                            var oldprice="";
                            var favourable="";
                            var color="";
                            if(!product.oldprice){
                                oldprice="d-none"
                            }
                            if(!product.favourable){
                                favourable="d-none"
                            }
                            if(!product.color){
                                color="d-none";
                            }
                            $(`
                            <li>
                            <a href="${product.href}" class="item-sh">
                                <div class="img-show">
                                   <img src="http://127.0.0.1:5000${product.img}">
                                </div>
                                <div class="img-hd">
                                    <div>
                                        <p>${product.subtitle}</p>
                                  </div>        
                                    <div class="city">
                                        <div class="title ">
                                            ${product.country_en}
                                        </div>
                                        <div class="country">
                                           <span>${product.country} |</span>
                                            <span>${product.city}</span>
                                        </div>
                                    </div>        
                                </div> 
                                <span>${product.title}</span>
                            </a>
                            <p class="item-price"><span class="now">￥${product.price}</span><span class="old ${oldprice}">￥${product.oldprice}</span></p>
                            <h5 class="item-sell d-flex"><div class="${favourable}">${product.favourable}</div><div class="${color}">${product.color}</div></h5>
                            </li>`
                            ).prependTo($("#floor-3 .content>ul"));
                            img();
                        }
                    }
            })
        } 
    })
    /****3F ajax END*******/

    /********晒单*************/ 
    $("#describ>ul div").click(function(){
        $("#mask").show();
            function scrollY(box){	//Y轴滚动
        var scrollY,pointX,pointY,top=0,moveX,moveY;
        var move=false;
        var box=$(box);
        var H=box.height();
        var W=box.width();
        var cententH=box.children().height();
        var btnH=H/cententH*H;
        var scrollY='<div class="scrollboxs" style="width:18px;position:absolute;top:0px;right:0px;z-index:0;background-color:#fff;height:'+H+'px;">';
            scrollY+='<div id="scrollbtn" style="width:100%;height:'+btnH+'px;margin:0 auto;position:relative;cursor:pointer" tops="0">';
            scrollY+='<div style="background-color:#696979;position:absolute;width:6px;left:6px;height:100%;border-radius:4px"></div>';
            scrollY+='</div></div>';
        box.parent().css({"position":"relative"});
        if(H/cententH<1){
            $(".scrollboxs").remove();
            box.before(scrollY);
        }else{
            $(".scrollboxs").remove();
        }
        $("#scrollbtn").hover(function(){
            $(this).children().css({
                "background-color":"#9797ac",
            });
        },function(){
            $(this).children().css({
                "background-color":"#696979",
            });
        });
        function addscroll(){
            box.scroll(function(){
                scrollY=$(this).scrollTop();
                $("#scrollbtn").css({
                    "margin-top":scrollY/cententH*H
                });
                top=scrollY/cententH*H;
                $("#scrollbtn").attr("tops",top);
            });
        }
        addscroll();
        $("#scrollbtn").mousedown(function(e){
            pointX = e.pageX;
            //这里可以得到鼠标Y坐标
            pointY = e.pageY;
            move=true;
            top=$("#scrollbtn").attr("tops")*1;
            $(this).focus();
        });
        $(document).mousemove(function(e){
            e.stopPropagation();
            if(move==true){
                box.unbind();
                moveX =e.pageX-pointX;
                //这里可以得到鼠标Y坐标
                moveY =e.pageY-pointY;
                $("#scrollbtn").css({
                    "margin-top":top+moveY
                });
                $("#scrollbtn").attr("tops",top+moveY);
                box.scrollTop((top+moveY)/H*cententH);
                if(top+moveY>H-btnH){
                    $("#scrollbtn").css({
                        "margin-top":H-btnH
                    });
                    $("#scrollbtn").attr("tops",H-btnH);
                }else if(top+moveY<0){
                    $("#scrollbtn").css({
                        "margin-top":0
                    });
                    $("#scrollbtn").attr("tops",0);
                }
            }
        });
        $(document).mouseup(function(e){
            move=false;
            addscroll();
            console.log(1111)
        });
    }   
    scrollY("#scrollbox")
    });
    $.ajax({
        url:"http://127.0.0.1:5000/share",
        data:{uid:"1,2,3"},
        type:"post",
        dataType:"json",
        success:function(result){
            console.log(result.data)
        }
    })
    /********晒单 END*************/ 
});
/******商品展示 hover********/
function img(){
    $(".floor>.content .item-sh .img-hd").hover(function(){
        $(this).prev().children("img").css("opacity",".4")
     },function(){
         $(this).prev().children("img").css("opacity","1")
     })
}
/******商品展示hover 结束*****/
$(window).load(function(){
    img();
})