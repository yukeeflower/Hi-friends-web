/**
 * Created by piaoxuehua on 2017/7/12.
 */

//    模态框功能


    // 轮播功能
    var n = 0;
    $(document).ready(function(){
        count=$(".cont a").length;//显示区域的内容长度
        $(".item a").click(function(){
            $(this).addClass("seld").siblings().removeClass("seld");
            var _index=$(this).index();//分屏的数字索引
            $(".cont>a").eq(_index).fadeIn(300).siblings().fadeOut(300);
        });
        t = setInterval("showAuto()", 2000);//执行定义好的函数
        $(".box").hover(function(){clearInterval(t)}, function(){t = setInterval("showAuto()", 2000);});/*当鼠标划向图片时终止定时器，离开时再调用定时器*/
    })
    function showAuto()
    {
        n = n >=(count - 1)?0: ++n;
        $(".item a").eq(n).trigger('click');
    }


window.onload=function (){
    topshow();
    tabshow();
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

        })()
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







