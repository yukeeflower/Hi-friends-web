/**
 * Created by piaoxuehua on 2017/8/16.
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
//选择出现的面板
function myplay() {
    document.getElementById('nav1').style.borderBottom='2px solid #5BAF14';
    document.getElementById('nav2').style.borderBottom='none';

    document.getElementById('mycontents-panel').style.display='block';
    document.getElementById('likelist').style.display='none';
    document.getElementById('favorite-panel').style.display='none';
    document.getElementById('likepoint').style.display='none'
    document.getElementById("friendpoint").style.display='none';


}
function likeplay() {
    document.getElementById('nav1').style.borderBottom='none';
    document.getElementById('nav2').style.borderBottom='2px solid #5BAF14';

    document.getElementById('mycontents-panel').style.display='none';
    document.getElementById('likepoint').style.display='none';
    document.getElementById("friendpoint").style.display='none';

    document.getElementById('likelist').style.display='block';
    document.getElementById('favorite-panel').style.display='block';

}
//选择出现列表
function likepoint() {
    document.getElementById('likepoint').style.display='block';
    document.getElementById("friendpoint").style.display='none';

    document.getElementById('mycontents-panel').style.display='none';
    document.getElementById('favorite-panel').style.display='none';
    document.getElementById('likelist').style.display='none';

    document.getElementById('nav2').style.borderBottom='none';
    document.getElementById('nav1').style.borderBottom='none';
}
function friendpoint() {
    document.getElementById("friendpoint").style.display='block';

    document.getElementById('likepoint').style.display='none'
    document.getElementById('mycontents-panel').style.display='none';
    document.getElementById('favorite-panel').style.display='none';
    document.getElementById('likelist').style.display='none';
    document.getElementById('nav2').style.borderBottom='none';
    document.getElementById('nav1').style.borderBottom='none';

}