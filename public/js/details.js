$(function(){
    /******商品尺寸*******/
    var $imgShow=$(".size_show>img");
    $(".size>ul img").hover(function(){
        var src=$(this).attr("data-md");
        $imgShow.attr({src});
    },function(){
        var src=$(".size>ul p.active").prev().attr("data-md");
        $imgShow.attr({src});
    }).click(function(){
        $(".size>ul p").removeClass("active");
        $(this).next().addClass("active");
        var src=$(this).attr("data-md");
        $imgShow.attr({src});
    })
    /******商品尺寸END*******/
    /******商品推荐button*******/
    $(".addCart").click(function(){
        $("#mask").show().click(function(){
            $(this).hide();
        })
    })
    /******商品推荐buttonEND*******/
    /******晒单*******/
    $("#tabs").tabs()
    /******晒单END*******/

    /******sidbar***********/
    $("#sidebar").sidebar()
    /******sidebarEND*******/

    /******header*******/
    $("#container>header").headerAll();
    /******headerEND*******/

})