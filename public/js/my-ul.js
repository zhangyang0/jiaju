$(function(){
    /**********tbas***********/
    jQuery.fn.tabs=function(){
        var $parent=this;
        $parent.children("div:first").addClass("tabs1").next().addClass("tabs2").hide();
        $parent.children("h2").addClass("tabs_tilte").children().click(function(){
             var $span=$(this);
             $span.siblings().removeClass("active");
             $span.addClass("active");
             if($span.is($("h2>span:first-child"))){
                 $(".tabs1").show();
                 $(".tabs2").hide();
             }else{
                 $(".tabs1").hide();
                $(".tabs2").show();
             }
        })
    }
    /**********tbas END***********/

    /**********sidebar***********/
    jQuery.fn.sidebar=function(){
        var $parent=this;
        $parent.addClass("p-fx ");
        $(window).scroll(function(){
            var y = $(window).scrollTop()
            if(y>150){
                $parent.children(":last-child").slideDown().prev().removeClass("n-b")
            }else{
                $parent.children(":last-child").slideUp().prev().addClass("n-b")
            }
        })
        /****返回顶部*****/
        $parent.find(".to_top").click(function(){
            $("body,html").animate({scrollTop:0})
        })
        /****返回顶部 END*****/
    }
    /**********sidebar END***********/

    /**********滚动条***********/
    /**********滚动条 END***********/







    /*******header1*******/
    jQuery.fn.headerAll=function(){
        var $parent = this;
        $(`
        <ul class="left">
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
            <li><a href=""><img src="../img/base/8576f41b91454a9dcfe10117c7866da9.png" alt=""></a></li>
            <li><a href=""><img src="../img/base/10de03eec28b15b7b71d2e583f160d61.png" alt=""></a></li>
        </ul>
    `).appendTo($parent)
    }
    /*******header1 END*******/

    /*******footer*******/
    jQuery.fn.footer=function(){
        var $parent=this;
        $(`<div id="top">
        <div class="top_left">
            <div>
                <a href=""><img src="../img/base/195e0858b3515b4dd666e69fda404737.png">
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
    </div>`).appendTo($parent);
    }
    /*******footer END*******/
})