/**
 * Created by piaoxuehua on 2017/7/17.
 */

// window.onload=function () {
//
//     onnum();
// }

//标签切换

function showTab1() {
    var a1=document.getElementById("nav1");
    var a2=document.getElementById("nav2");
    var b1=document.getElementById("form1");
    var b2=document.getElementById("form2");


    a1.style.borderBottom="3px solid #54A64B";
    a2.style.borderBottom="none";
    b1.style.display="block";
    b2.style.display="";
}

function showTab2() {
    var a1=document.getElementById("nav1");
    var a2=document.getElementById("nav2");
    var b1=document.getElementById("form1");
    var b2=document.getElementById("form2");


    a1.style.borderBottom="none"
    a2.style.borderBottom="3px solid #54A64B";
    b2.style.display="block";
    b1.style.display="none";


}
//邮箱密码判断

$(document).ready(function(){
    $("#mail_password2").blur(function(){
        var phonenum1=$("#mail_password1").val();
        var phonenum2=$("#mail_password2").val();


        if(phonenum1==phonenum2){
            document.getElementById("mail_password2").style.background= "url('images/zhuce_right1.png') no-repeat scroll right center transparent";


        }
        else {
            document.getElementById("mail_password2").style.background="url('images/zhuce_erro1.png') no-repeat scroll right center transparent";
        }
    });
});

//邮箱格式判断

$(document).ready(function(){
    $("#mail_name").blur(function(){
        // alert(00)
        checkEmail();
    });

});
function checkEmail(){
    var myemail =$("#mail_name").val();

    var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

    if(myReg.test(myemail)){
        document.getElementById("mail_name").style.background="url('images/zhuce_right1.png') no-repeat scroll right center transparent";
        return true;
    }else{
        document.getElementById("mail_name").style.background="url('images/zhuce_erro1.png') no-repeat scroll right center transparent";

        return false;
    }
}

//手机密码判断
$(document).ready(function(){
    $("#password2").blur(function(){
        var phonenum1=$("#password1").val();
        var phonenum2=$("#password2").val();

        if(phonenum1==phonenum2){

            document.getElementById("password2").style.background= "url('images/zhuce_right1.png') no-repeat scroll right center transparent";

        }
        else {
            document.getElementById("password2").style.background="url('images/zhuce_erro1.png') no-repeat scroll right center transparent";
        }
    });
});



//手机验证码点击事件判断
$(document).ready(function(){
    $("#name").focus(function(){
        $("#num_button").css("background-color","darkgray");
        $("#num_button").css("color","#fff");


    });
    $("#name").blur(function(){
        var phonenum=$("#name").val();
        if(phonenum!=''){
            $("#num_button").css("background-color","#fff");
            $("#num_button").css("color","#000");

        }
        else {
            $("#num_button").css("background-color","darkgray");
        }
    });
});

function onnum() {
    var phonenum=$("#name").val();
    alert(phonenum);
    if(phonenum!=''){
        document.getElementById('num_button').style.background='#fff'
    }
    else {
        document.getElementById('num_button').style.background='#000'
    }




}




//邮箱注册成功
function mail_fasong() {
    var mail=$("#mail_name").val();
    var username=$("#mail_userlname").val();
    var vitualname=$("#mail_vitualname").val();
    var p1 =$("#mail_password1").val();


    $.ajax({
        type: "POST",
        url: "http://115.159.36.176/hi-friends/user/regist",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            "username": username,
            "nickname":vitualname,
            "password": p1,
            "email":mail
        }),
        dataType : "json",
        success:
            function chenggong(msg) {
            if (msg.code == "S01") {

                alert(msg.message)
            }
            else {
                alert(msg.message)
            }
        },
    });
}