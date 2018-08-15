(function() {
   $("#submit").on("click",function () { 
       console.log(22222)
     var uN =  $("#userName").val()
     var psw =   $("#passWord").val()
     console.log(uN)
     console.log(psw)
     if (uN == "sys1" && psw == "1") {
         window.location.href = "./index.html" + "?userName=" +uN 
            }else {
         alert("用户名或密码错误,请重新输入");
         $("#passWord").val("")
     }
    })
// 键盘回车事件
    $(document).keydown(function (e) {
        var key = e.which;
        if (key == 13) {
            $("#submit").trigger("click")
        }
    });
})();