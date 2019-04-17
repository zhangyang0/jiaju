$(function(){
    //添加头部
    var $header=$("#container>header");
    $header.headerAll();
    // $(window).scroll(function(){
    //     var $h=$(this).scrollTop();
    //     if($h>80){
    //         $header.css("position","fixed")
    //     }else{
    //         $header.css("position","relative")
    //     }

    // })
    var $i=$(".choseAll>div>.total em").hover(function(){
        $(this).prev().children("#yhdetail").show()
    },function(){
        $(this).prev().children("#yhdetail").hide()
    })

    /****footer****/ 
    $("footer").footer();
    /****footer END****/ 

    /******sidebar*******/
    $("#sidebar").sidebar();
    /******sidebar END*******/
})