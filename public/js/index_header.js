$(function(){
    "use strict";
    //添加下拉菜单
    var navImg={
      sf:[{name:"三人沙发",src:"./img/nav/sf-1.png"},{name:"双人沙发",src:"./img/nav/sf-2.png"},{name:"单人沙发",src:"./img/nav/sf-3.png"},{name:"沙发墩",src:"./img/nav/sf-4.png"}],
      bed:[{name:"床",src:"./img/nav/bed-1.png"},{name:"床垫",src:"./img/nav/bed-2.png"},{name:"床品4件套",src:"./img/nav/bed-3.png"},{name:"被芯",src:"./img/nav/bed-4.png"},{name:"枕芯",src:"./img/nav/bed-5.png"},{name:"床头柜",src:"./img/nav/bed-6.png"},{name:"创下储物盒",src:"./img/nav/bed-7.png"},{name:"床尾凳",src:"./img/nav/bed-8.png"}],
      gj:[{name:"置物柜",src:"./img/nav/gj-1.png"},{name:"书柜·书架",src:"./img/nav/gj-2.png"},{name:"电视柜",src:"./img/nav/gj-3.png"},{name:"置物架",src:"./img/nav/gj-4.png"},{name:"衣柜",src:"./img/nav/gj-5.png"},{name:"床头柜",src:"./img/nav/gj-6.png"},{name:"衣帽架",src:"./img/nav/gj-7.png"},{name:"鞋柜",src:"./img/nav/gj-8.png"},{name:"单元格",src:"./img/nav/gj-9.png"},{name:"COSMO",src:"./img/nav/gj-10.png"}],
      yd:[{name:"座椅",src:"./img/nav/yd-1.png"},{name:"座墩",src:"./img/nav/yd-2.png"},{name:"休闲椅",src:"./img/nav/yd-3.png"},{name:"凳子",src:"./img/nav/yd-4.png"}],
      desk:[{name:"书桌·餐桌",src:"./img/nav/zj-1.png"},{name:"茶几",src:"./img/nav/zj-2.png"},{name:"边几",src:"./img/nav/zj-3.png"},],
      leg:[{name:"台灯",src:"./img/nav/dj-1.png"},{name:"地灯",src:"./img/nav/dj-2.png"},{name:"吊灯",src:"./img/nav/dj-3.png"},{name:"夜灯",src:"./img/nav/dj-4.png"}],
      jf:[{name:"床品4件套",src:"./img/nav/jf-1.png"},{name:"被芯",src:"./img/nav/jf-2.png"},{name:"枕芯",src:"./img/nav/jf-3.png"},{name:"床褥",src:"./img/nav/jf-4.png"},{name:"盖毯",src:"./img/nav/jf-5.png"},{name:"地毯",src:"./img/nav/jf-6.png"},{name:"抱枕",src:"./img/nav/jf-7.png"},{name:"毛巾",src:"./img/nav/jf-8.png"},{name:"收纳",src:"./img/nav/jf-9.png"}],
      food:[{name:"套装",src:"./img/nav/cj-1.png"},{name:"盘碗",src:"./img/nav/cj-2.png"},{name:"杯子",src:"./img/nav/cj-3.png"},{name:"储物",src:"./img/nav/cj-4.png"},{name:"托盘",src:"./img/nav/cj-5.png"}],
      zs:[{name:"摆件·花瓶",src:"./img/nav/zs-1.png"},{name:"收纳",src:"./img/nav/zs-2.png"},{name:"装饰画",src:"./img/nav/zs-3.png"}],
      co:[{name:"置物柜",src:"./img/nav/co-1.png"},{name:"书柜·书架",src:"./img/nav/co-2.png"},{name:"电视柜",src:"./img/nav/co-3.png"},{name:"衣柜",src:"./img/nav/co-4.png"},{name:"玄关柜",src:"./img/nav/co-5.png"}],
    };
    for(var uls in navImg){
        var frag=document.createDocumentFragment();
        var ulPar= document.createElement("div");
        ulPar.className="hidDiv";
        ulPar.style.width=window.innerWidth+"px";
        frag.appendChild(ulPar);
        var ul = document.createElement("ul");
        // ul.style.display="none";
        ul.className=uls;
        ulPar.appendChild(ul);   
        for( var lis of navImg[uls]){
            var li=document.createElement("li");
            ul.appendChild(li);
            var a=document.createElement("a");
            a.href="javascript:;";
            var imgHeader=new Image();
            imgHeader.src=lis.src;
            a.appendChild(imgHeader);
            li.appendChild(a);
            var p=document.createElement("p");
            p.innerHTML=lis.name;
            li.appendChild(p);
        }
        //获得要添加下拉菜单的li
        var hidLis=document.querySelectorAll("header li[data-hid=li]");
        for(var hidLi of hidLis){
            if(hidLi.className==uls){
                hidLi.appendChild(frag);
            }
        }
    }
    //添加下拉效果
    var xls=document.querySelectorAll("header li[data-hid=li]");
    for(var xl of xls){
        xl.onmouseover=function(){
            this.children[1].style.display="block";
        }
        xl.onmouseout=function(){
            this.children[1].style.display="none";
        }
    }
  });
