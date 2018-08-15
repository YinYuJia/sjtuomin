
// 表格渲染过滤器
var sysCommon = {};
sysCommon.loadFilter = function (data) {
    if (data && (data.status === 0)) {
        $("#processInstanceId").val(data["processInstanceId"]);
        return data.data;
    } else {
        return [];
    }
};
// ---------------全局最大对象--------------
var bestObj = {}
// 全局请求地址
bestObj.AjaxUrl = "http://192.168.21.157:51002";
// 获取url参数
function getUrlParams(params) {
    var str = location.search.substring(1); //截取？后面的内容
    str = decodeURI(str); //解码，将字符串中的汉字编码转换过来
    var arr = str.split("&"); //将字符串转换成数组
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
        //字符串中“=”左边为键名，右边为键值，存入对象中
        obj[arr[i].split("=")[0]] = arr[i].split("=")[1]; //向空对象中添加属性
    }
    //    console.log(obj);
    //遍历对象，将属性值为数字的字符串转换成数字
    for (var key in obj) {
        if (!isNaN(Number(obj[key]))) {
            obj[key] = Number(obj[key]);
        }
    }
    //    console.log(obj);
    return obj[params];
}

// 检查cookies


function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}

function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

function checkCookie() {
    username = getCookie('username')
    if (username != null && username != "") {
        // alert('Welcome again ' + username + '!')
        console.log("cookies right!!!")
    } else {
        // username = prompt('Please enter your name:', "")
        console.log(getUrlParams("userName"))
        if (getUrlParams("userName") == undefined || getUrlParams("userName") == null) {
            window.location.href = "/login.html"
        } else {
            username = getUrlParams("userName")
        }
        if (username != null && username != "") {
            setCookie('username', username, 365)
        }
    }
}

// 侧边蓝弹出隐藏函数
function SideBarShowOrHide(a, b) {
    if (a == 0) {
        $("#SideBar").css({
            "transform": "translateX(1000px)",
            "transition": "all .5s"
        });
        $("#dsMssk1").hide();
        $("." + b).show().siblings().hide();
    } else {

        $("#SideBar").css({
            "transform": "translateX(0px)",
            "transition": "all .5s"
        })
        $("#dsMssk1").show();
        $("." + b).show().siblings().hide();
    }
}

//  loadGif   参数设置( show 弹出 --- hide  隐藏)
function loadGif(a) {
    if (a == "hide") {
        $("#loadGif").hide();
    } else if (a == "show") {
        $("#loadGif").show();
    }
}
// 提示函数  参数设置("T" 正确 ---- "F"  错误)
function tips(T,str) {
    if (T == "T") {
        $("#tips").fadeIn().css({
            "backgroundColor":"#0f0"
        }).html(str)
        setTimeout(function() {
            $("#tips").hide().html("")
        },3000)
    }else if ( T == "F") {
      $("#tips").fadeIn().css({
          "backgroundColor":"pink"
      }).html(str);
      setTimeout(function() {
        $("#tips").hide().html("");
    },3000);
    }
}

(function() {
    var str = $("<p id = 'tips'></p>")
    $("#navBar").append(str)
})();