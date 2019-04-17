(()=>{
    //  选择登录方式 
    var loginMotheds=document.getElementsByClassName("data-login");
    for(var loginMothed of loginMotheds){
        loginMothed.onclick=function(){
            var loginMothed=this;
            var phone=document.getElementsByClassName("phone")[0];
            var pwd=document.getElementsByClassName("pwd")[0];
            if(loginMothed.innerHTML=="密码登录"){
                pwd.style.display="block";
                phone.style.display="none";
            }else{
                phone.style.display="block";
                pwd.style.display="none";
            }
        }
    }
    // 验证输入
    var codeTest=document.getElementsByClassName("codeTest")[0];
    var phoneTest=document.getElementsByClassName("phoneTest")[0];
    var unameTest=document.getElementsByClassName("unameTest")[0];
    var pwdTest=document.getElementsByClassName("pwdTest")[0];
    codeTest.onfocus=phoneTest.onfocus=unameTest.onfocus=pwdTest.onfocus=function(){
        var next2= this.nextElementSibling.nextElementSibling;
        next2.className="hidd";
        this.nextElementSibling.className="show";

    }
    phoneTest.onblur=function(){
       vail(/^\d{11}$/,this); 
    }
    codeTest.onblur=function(){
        vail(/^\d{6}$/,this); 
     }
     unameTest.onblur=function(){
        vail(/^\w{6,10}$/,this); 
     }
     pwdTest.onblur=function(){
        vail(/^\w{6,13}$/,this); 
     }
    function vail(reg,test){
        if(reg.test(test.value)){
            //test.nextElementSibling.className="test show treBg";
            var next2= test.nextElementSibling.nextElementSibling;
            next2.className="test show treBg";
            test.nextElementSibling.className="hidd";
						return true;
        }else{
             test.nextElementSibling.className="test show fse fseBg";
						 return false;
        }
    }
		// 登录按钮
})();