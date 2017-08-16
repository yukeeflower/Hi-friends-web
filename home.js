/**
 * Created by piaoxuehua on 2017/7/12.
 */

//    模态框功能


    // 轮播功能
var n = 0;
$(document).ready(function () {
    count = $(".cont a").length;//显示区域的内容长度
    $(".item a").click(function () {
        $(this).addClass("seld").siblings().removeClass("seld");
        var _index = $(this).index();//分屏的数字索引
        $(".cont>a").eq(_index).fadeIn(300).siblings().fadeOut(300);
    });
    t = setInterval("showAuto()", 2000);//执行定义好的函数
    $(".box").hover(function () {
        clearInterval(t)
    }, function () {
        t = setInterval("showAuto()", 2000);
    });
    /*当鼠标划向图片时终止定时器，离开时再调用定时器*/
})
function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $(".item a").eq(n).trigger('click');
}



window.onload = function () {
    topshow();
    tabshow();
    // tiaozhuan();
}

//判断登录跳转界面
function tiaozhuan() {
    var text = document.getElementById('top_log').innerText;
    // alert(document.getElementById('top_log').innerText);
    alert(text);
    if(text=="登录"){
        // login();

        // $('#myhomeicon').attr('href','');
        // $('#usericon').removeAttr('href');
        // $('#myhomeicon').removeAttr('href');
        alert("请先登录");


    }
    else {
        $('#usericon').attr('href','center.html');
        // alert(0)
        $('#myhomeicon').attr('href','person.html');
    }

}








//下拉菜单


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

//        中部tab面板替换

function tabshow() {
    var tabs = document.getElementsByClassName("center-tab")[0].getElementsByTagName("li");
    var contents = document.getElementsByClassName("center-panel")[0].getElementsByTagName("ul");
    //                alert(contents)
    (function changetab() {
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onclick = showTab;

        }

    })();
    function showTab() {
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i] === this) {
                tabs[i].className = 'tabcur';
                contents[i].className = 'cur';
            } else {
                //                            alert(contents[i]);

                tabs[i].className = '';
                contents[i].className = '';
            }
        }

    }


}
//登录模态框
function login() {
    var e1 = document.getElementById('model-overlay');
    var e2 = document.getElementById('model-data');
    document.body.style.overflow = (document.body.style.overflow == "") ? "hidden" : "";
    e1.style.display = (e1.style.display == "block") ? "" : "block";
    e2.style.display = ( e2.style.display == "block") ? "" : "block";

}


//左边导航栏选中效果
function ok(x) {
    var a = document.getElementById('leftlist');
    var b = a.getElementsByTagName('li');

    for (i = b.length; i--;) {
        if (b[i].id != x) {
            b[i].style.background = "rgba(190,200,221,1)";
        }
        else {
            b[i].style.background = "rgba(147,165,195,1)";


        }

    }


}


/**
 * 登录方法
 *
 *
 */

/***
 * 登录验证码
 */


var handler2 = function (captchaObj) {
    $("#submit2").click(function (e) {
        var result = captchaObj.getValidate();
        if (!result) {
            $("#notice2").show();
            setTimeout(function () {
                $("#notice2").hide();
            }, 2000);
        } else {
            $.ajax({
                url: 'http://115.159.36.176/hi-friends/gt/ajax-validate2',
                type: 'POST',
                dataType: 'json',
                data: {
                    username: $('#username').val(),
                    password: $('#password').val(),
                    geetest_challenge: result.geetest_challenge,
                    geetest_validate: result.geetest_validate,
                    geetest_seccode: result.geetest_seccode
                },
                success: function (data) {
                    if (data.status=="success") {
                        $.ajax({
                            type: "POST",
                            url: "http://115.159.36.176/hi-friends/user/login",
                            contentType: "application/json;charset=utf-8",
                            data: JSON.stringify({
                                    username: $('#username').val(),
                                    password: $('#password').val()
                            }
                            ),
                            dataType : "json",
                            success:function logindata(msg) {
                                if (msg.code == "S01") {
                                    document.getElementById("top_log").innerHTML=msg.contents.nickname;
                                    var e1 = document.getElementById('model-overlay');
                                    var e2 = document.getElementById('model-data');
                                    e1.style.display = "";
                                    e2.style.display = "";            // login();
                                    $('#top_log').removeAttr('onclick');
                                    $('#top_close').attr('href','home.html');
                                    $("#top_close").text('退出');


                                }
                                else {
                                    alert(msg.message);
                                }
                            },
                            error:function error(msg) {
                                alert(msg);
                            }
                        });
                        // alert('登录成功');
                        // // document.getElementById("top_log").innerHTML=data.contents.nickname;
                        // var e1 = document.getElementById('model-overlay');
                        // var e2 = document.getElementById('model-data');
                        // e1.style.display = "";
                        // e2.style.display = "";            // login();
                        // $('#top_log').removeAttr('onclick');
                        // $('#top_close').attr('href','home.html');
                        // $("#top_close").text('退出');
                    } else {
                        alert('登录失败');
                    }
                }
            })
        }
        e.preventDefault();
    });
    // 将验证码加到id为captcha的元素里，同时会有三个input的值用于表单提交
    captchaObj.appendTo("#captcha2");
    captchaObj.onReady(function () {
        $("#wait2").hide();
    });
    // 更多接口参考：http://www.geetest.com/install/sections/idx-client-sdk.html
};
$.ajax({
    url: "http://115.159.36.176/hi-friends/gt/register2?t=" + (new Date()).getTime(), // 加随机数防止缓存
    type: "get",
    dataType: "json",
    success: function (data) {
        // 调用 initGeetest 初始化参数
        // 参数1：配置参数
        // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它调用相应的接口
        initGeetest({
            gt: data.gt,
            challenge: data.challenge,
            new_captcha: data.new_captcha, // 用于宕机时表示是新验证码的宕机
            offline: !data.success, // 表示用户后台检测极验服务器是否宕机，一般不需要关注
            product: "popup", // 产品形式，包括：float，popup
            width: "100%"
            // 更多配置参数请参见：http://www.geetest.com/install/sections/idx-client-sdk.html#config
        }, handler2);
    }
});

<!--趣点现身-->

    $(document).ready(function () {
        $("#leftclose").mouseover(function () {
            $("#leftlist").show(600);

        });
        $("#leftlist").hover(null,function () {
            $("#leftlist").hide(600);

        })

    })

    // <!--删除按钮现身-->
    // 创建删除函数，table下面还有一个tbody(隐藏的)
    function deleteline(c){
        c.parentNode.parentNode.removeChild(c.parentNode);
    }


<!--弹框提示-->

<!--点击打开弹框-->

function genggai() {
//        alert(0)
    var e1 = document.getElementById('model-overlay');
    var e2 = document.getElementById('xiugai-data');
    document.body.style.overflow = (document.body.style.overflow == "") ? "hidden" : "";
    e1.style.display = (e1.style.display == "block") ? "" : "block";
    e2.style.display = ( e2.style.display == "block") ? "" : "block";
}
<!--点击关闭弹框-->
function xiugai_close() {
    var e1 = document.getElementById('model-overlay');
    var e2 = document.getElementById('xiugai-data');
    e1.style.display =""
    e2.style.display =""}




<!--自定义点击事件生成Li-->
function addli() {
    $("#free").prepend("<li class='body-nav' ><a id='adda'>新的li</a> <div class='leftlist-btn' onclick='deleteline(this)'> <img src='images/delete.png'> </div></li>");
    genggai();
}
function xiugai_save() {
    var v1= $("#xiugai-name").val();
    document.getElementById("adda").innerHTML=v1;
    xiugai_close();



}

