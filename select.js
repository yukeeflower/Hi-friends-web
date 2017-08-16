/**
 * Created by piaoxuehua on 2017/7/23.
 */
//搜索框出现
$(document).ready(function(){
    $("#selecttext").focus(function(){
        $("#select-panel").css("display","block");
    });

    $("#selecttext").blur(function(){

        // alert(00)
        $("#select-panel").css("display","");
    });

});