/**
 * Created by piaoxuehua on 2017/7/19.
 */

//下拉菜单

window.onload=function () {

    topshow();

}
function topshow() {
    var home = document.getElementById('myhome');
    var list1 = document.getElementById('menu-list1');
    var homeicon = document.getElementById('myhomeicon');

    var userzx = document.getElementById('user');
    var list2 = document.getElementById('menu-list2');
    var usericon = document.getElementById('usericon');


    var mail = document.getElementById('bar_email');
    var maillist = document.getElementById('bar-list1');
    var mailicon = document.getElementById('mail_icon');


    home.onmouseover = homeshow;
    home.onmouseout = homehide;

    function homeshow() {
        list1.style.display = 'block';
        homeicon.style.color = '#95A6C2';

    }

    function homehide() {

        list1.style.display = 'none';
        homeicon.style.color = '#fff';
    }


    userzx.onmouseover = usershow;
    userzx.onmouseout = userhide;

    function usershow() {
        list2.style.display = 'block';
        usericon.style.color = '#95A6C2';

    }

    function userhide() {

        list2.style.display = 'none';
        usericon.style.color = '#fff';
    }


    mail.onmouseover = mailshow;
    mail.onmouseout = mailhide;

    function mailshow() {
        maillist.style.display = 'block';
        mailicon.src = 'images/email-2.png';
    }

    function mailhide() {
        maillist.style.display = 'none';
        mailicon.src = 'images/email.png';
    }
}

//个人信息修改面板替换
function my_message() {
    var m1=document.getElementById("form1")
    var m2=document.getElementById("form2")
    m1.style.display="block";
    document.getElementById("body-nav1").style.borderBottom="3px solid #54A64B";
    m2.style.display="";
    document.getElementById("body-nav2").style.borderBottom="none";

}

function my_photo() {

    var p1=document.getElementById("form1")
    var p2=document.getElementById("form2")
    p2.style.display="block";
    document.getElementById("body-nav2").style.borderBottom="3px solid #54A64B";
    p1.style.display="none";
    document.getElementById("body-nav1").style.borderBottom="none";
}
//左边导航栏选中
// function ok(x) {
//     var a = document.getElementById('left-ul');
//     var b = a.getElementsByTagName('li');
//
//     for (i = b.length; i--;) {
//         if (b[i].id != x) {
//             b[i].style.background = "rgba(190,200,221,1)";
//
//         }
//         else {
//             b[i].style.background = "rgba(147,165,195,1)";
//
//
//         }
//
//     }
//
//
// }

//safe密码判断

$(document).ready(function(){
    $("#safe_password2").blur(function(){
        var phonenum1=$("#safe_password1").val();
        var phonenum2=$("#safe_password2").val();
        if(phonenum1==phonenum2){
            document.getElementById("safe_password2").style.background= "url('images/zhuce_right1.png') no-repeat scroll right center transparent";


        }
        else {
            document.getElementById("safe_password2").style.background="url('images/zhuce_erro1.png') no-repeat scroll right center transparent";
        }
    });
});

//safe邮箱格式判断

$(document).ready(function(){
    $("#safe_mail").blur(function(){
        // alert(00)
        checkEmail();
    });

});
function checkEmail(){
    var myemail =$("#safe_mail").val();

    var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;

    if(myReg.test(myemail)){
        document.getElementById("safe_mail").style.background="url('images/zhuce_right1.png') no-repeat scroll right center transparent";
        return true;
    }else{
        document.getElementById("safe_mail").style.background="url('images/zhuce_erro1.png') no-repeat scroll right center transparent";

        return false;
    }
}
//message点击事件
function message1() {
    document.getElementById("message-content1").style.display="block";
    document.getElementById("message-content2").style.display="none";
    document.getElementById("message-nav2").style.borderBottom="3px solid #54A64B"
    document.getElementById("message-nav3").style.borderBottom="none"



}
function message2() {
    document.getElementById("message-content2").style.display="block";
    document.getElementById("message-content1").style.display="none";
    document.getElementById("message-nav3").style.borderBottom="3px solid #54A64B"
    document.getElementById("message-nav2").style.borderBottom="none"

}
//大导航栏切换
function ok1() {
    document.getElementById("ok1").style.background = "rgba(147,165,195,1)";
    document.getElementById("ok2").style.background = "rgba(190,200,221,1)";
    document.getElementById("ok3").style.background = "rgba(190,200,221,1)";
    document.getElementById("center-my").style.display="block";
    document.getElementById("center-safe").style.display="none";
    document.getElementById("center-message").style.display="none";
}
function ok2() {
    document.getElementById("ok2").style.background = "rgba(147,165,195,1)";
    document.getElementById("ok1").style.background = "rgba(190,200,221,1)";
    document.getElementById("ok3").style.background = "rgba(190,200,221,1)";
    document.getElementById("center-my").style.display="none";
    document.getElementById("center-safe").style.display="block";
    document.getElementById("center-message").style.display="none";
}
function ok3() {
    document.getElementById("ok3").style.background = "rgba(147,165,195,1)";
    document.getElementById("ok2").style.background = "rgba(190,200,221,1)";
    document.getElementById("ok1").style.background = "rgba(190,200,221,1)";
    document.getElementById("center-my").style.display="none";
    document.getElementById("center-safe").style.display="none";
    document.getElementById("center-message").style.display="block";
}

//图像点击事件
function gosubmit2() {
    var v1=$("#submit").val();
    alert(v1)

}