/**
 * Created by piaoxuehua on 2017/8/1.
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
//关注按钮点击事件
function add() {
    var a=document.getElementById("adduser");
    var b=document.getElementById("head-right");
    a.innerHTML="已添加";
    b.style.background="gray"
}
//判断收藏按钮的点击事件
function favoradd() {
    var a=document.getElementById("favorpic");
    if(a.src=="http://localhost:63342/Hi-friends/images/favor.png"){
        a.src="http://localhost:63342/Hi-friends/images/favor-3.png"

    }
    else {
        a.src="http://localhost:63342/Hi-friends/images/favor.png"
    }
}

//判断点赞按钮的点击事件
function goodadd(a) {
    if(a.src=="http://localhost:63342/Hi-friends/images/good.png"){
        a.src="http://localhost:63342/Hi-friends/images/good-3.png"

    }
    else {
        a.src="http://localhost:63342/Hi-friends/images/good.png"
    }
}


//创建说说
function fabiao() {
    $("#comments-cell1").prepend( "<li id='newcell1'>" +
        "<div class='comments-cell' > " +
        "<div class='comments-logo' >" +
        "<img src='images/userlogo.png'>" +
        "</div> " +
        "<div class='comments-right'>" +
        " <div class='comments' > " +
        "<span>用户名:</span> " +
        "<span id='contents'>评论内容</span>" +
        " </div> " +
        "<div style='clear: both'>" +
        "</div> " +
        "<img class='picture' >" +
        " <div class='comments-cell-foot'>" +
        " <div class='comments-time'>" +
        "<span id='time' >time</span>" +
        "</div> " +
        "<div class='comments-foot' > " +
        "<span  id='delspan' style='display:block;float: left;margin-right: 20px;font-size: 15px;line-height: 25px' onclick='del(this)'>删除</span>"+
        "<span>回复</span> " +
        "<span>|</span> " +
        "<img src='images/good.png' class='goodpic'onclick='goodadd(this)' >" +
        " <span class='comments-goodnum'>000</span>" +
        " <div style='clear: both'>" +
        "</div> " +
        "</div> " +
        "<div style='clear: both'>" +
        "</div> " +
        "</div>" +
        " </div> " +
        "<div style='clear: both'>" +
        "</div>" +
        " </div>" +
        "</li>"
    )
    tianjia();

}
//                    删除发表评论模块
function del(c) {
    c.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(c.parentNode.parentNode.parentNode.parentNode);

}

//                        点击发表显示内容
function tianjia() {
    var str=$("#play-content").val();

    document.getElementById("contents").innerHTML=str;

    $("#contents").html(replace_em(str));



    document.getElementById("play-content").value="";
    $(".newli").remove();
    document.getElementById("pic-box").style.display=""


    showLeftTime();


}
//查看结果

function replace_em(str){

    str = str.replace(/\</g,'&lt;');

    str = str.replace(/\>/g,'&gt;');

    str = str.replace(/\n/g,'<br/>');

    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="arclist/$1.gif" border="0" />');

    return str;

}




//                    显示发布时间

//                    var myDate = new Date();
//                    myDate.getYear();        //获取当前年份(2位)
//                    myDate.getFullYear();    //获取完整的年份(4位,1970-????)
//                    myDate.getMonth();       //获取当前月份(0-11,0代表1月)
//                    myDate.getDate();        //获取当前日(1-31)
//                    myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
//                    myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
//                    myDate.getHours();       //获取当前小时数(0-23)
//                    myDate.getMinutes();     //获取当前分钟数(0-59)
//                    myDate.getSeconds();     //获取当前秒数(0-59)
//                    myDate.getMilliseconds();    //获取当前毫秒数(0-999)
//                    myDate.toLocaleDateString();     //获取当前日期
//                    var mytime=myDate.toLocaleTimeString();     //获取当前时间
//                    myDate.toLocaleString( );        //获取日期与时间

var  initializationTime=(new Date()).getTime();

function showLeftTime() {
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var day=now.getDate();
    var hours=now.getHours();
    var minutes=now.getMinutes();
    var seconds=now.getSeconds();
    document.getElementById("time").innerHTML=""+year+"年"+month+"月"+day+"日"+hours+":"+minutes+":"+seconds+"";

}

//表情包

$(function(){

    $('#smile').qqFace({

        id : 'facebox',

        assign:'play-content',

        path:'arclist/'	//表情存放的路径

    });


});
//发表图片

function submitpic() {
    document.getElementById("selpic").click();
    document.getElementById("pic-box").style.display="block"
    $("#pic-box").prepend("<li class='newli' ><img id='newpic'></li>");
    document
        .querySelector('#selpic')
        .addEventListener('change', function(){
            //当没选中图片时，清除预览
            if(this.files.length === 0){
                document.querySelector('#newpic').src = '';
                return;
            }

            //实例化一个FileReader
            var reader = new FileReader();

            reader.onload = function (e) {
                //当reader加载时，把图片的内容赋值给
                document.querySelector('#newpic').src = e.target.result;
            };

            //读取选中的图片，并转换成dataURL格式
            reader.readAsDataURL(this.files[0]);
        }, false);

}
