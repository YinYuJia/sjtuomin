//  渲染表格
(function () {

    $('#dbSourceList').datagrid({
        collapsible: false, //是否可折叠的
        fit: true, //自动大小
        url: bestObj.AjaxUrl + '/data/source_add',
        width: '100%',
        AutoSizeColumnsMode: "Fill",
        columns: [
            [{
                    field: 'id',
                    title: '选择',
                    width: '2%',
                    align: 'center',
                    checkbox: true

                },
                {
                    field: 'dbName',
                    title: '名称',
                    width: '18%',
                    align: 'center',
                },
                {
                    field: 'typeName',
                    title: '数据库类型',
                    width: '10%',
                    align: 'center'
                },
                {
                    field: 'dbIp',
                    title: 'IP',
                    width: '20%',
                    align: 'center'
                },
                {
                    field: 'dbPort',
                    title: '端口',
                    width: '13%',
                    align: 'center'
                },
                {
                    field: 'dbStatus',
                    formatter: function (value, row, index) {
                        if (value == 1) {
                            return ('未安装');
                        }
                        if (value == 2) {
                            return ('已安装');
                        }
                        if (value == 3) {
                            return ('已加密');
                        }
                    },
                    title: '加密状态',
                    width: '13%',
                    align: 'center'
                },
                {
                    field: 'dbInstance',
                    title: '数据库实例',
                    width: '13%',
                    align: 'center'
                },
                {
                    field: 'oper',
                    title: '操作',
                    width: '12%',
                    align: 'center',
                    formatter: function (value, rowData, rowIndex) {
                        if (rowData) {
                            var rowId = rowData.dbEncInfoId;
                            var str =
                                "<a href='javascript:void(0)' class='row-button c8' onclick='amend(" +
                                rowId + ")'>修改</a>&nbsp;&nbsp;" +
                                "<a href='javascript:void(0)' class='row-button c8' onclick='connectTest(" +
                                rowId + ")'>测试连接</a>";
                            return str;
                        }
                    }
                }
            ]
        ],
        loadFilter: sysCommon.loadFilter,
        remoteSort: false,
        method: 'post',
        singleSelect: false,
        idField: 'ID',
        singleSelect: true, //是否单选
        rownumbers: true, //行号
        cache: false,
        pageSize: 10,
        pageList: [10, 20, 50, 100],
        onLoadSuccess: function (data) {
            // $("#dsMssk1").show()
        },
        onClickRow: function (index, row, evnet) {
            console.log("连接成功")
            console.log(row)
        },
        onDblClickRow: function (index, row) {},
        onLoadError: function () {}
    });
})();

(function () {
    // 点击数据管理执行驱动函数
    $("#DataSourceManagement").click(function () {
        $(".mainBody_right_Number1").show().siblings().hide();
    });
    // 点击数据集管理执行驱动函数
    $("#DataSourceManagementSon").click(function () {
        $(".mainBody_right_Number2").show().siblings().hide();
    });
    // ajax测试
    function ajaxb() {
        $.ajax({
            url: "http://192.168.21.157:51002/data/source_add",
            // url: "http://192.168.21.157:51002/data/query_tables",
            // data: JSON.stringify({
            //     "id": 1
            // }),
            type: "post",
            // dataType:"json",
            contentType: "application/json",
            success: function (res) {
                console.log(res)
            }
        })
    }
    // 调整窗口大小
    $(window).on("resize", function () {
        console.log($(window).width())
    })
    // sidebar显示隐藏

    //  手动查询侧边蓝
    $("#ManualQuery").on("click", function () {
        //    console.log(2)
        SideBarShowOrHide(1, "showorhide1")
    })
    //    取消手动查询
    $("#unshoworhide1").on("click", function () {
        SideBarShowOrHide(0, "showorhide1")
        $("#SourceName").val("")
    })
    //    新增
    $("#NewData").on("click", function () {
        $("#newAdd").show().siblings().hide();
    })
    //   编辑
    $("#Edit").on("click", function () {
        $("#edit").show().siblings().hide()
    })
    //    删除
    $("#Delete").on("click", function () {
        // alert($(this).html())
        loadGif("show")
    })
    // 查询
    $("#Query").on("click", function () {
        alert($(this).val())
    })
    //   重置
    $("#reSet").on("click", function () {
        alert($(this).val())
    })
    // 新增保存
    $("#newAddSave").on("click",function() {
        tips("F","闪捷信息")
    })
    // 新增页面取消
    $("#newAddCancel").on("click",function () {
        $(".mainBody_right_Number1").show().siblings().hide()
    })
    // 编辑页面取消
    $("#editCancel").on("click",function () {
        $(".mainBody_right_Number1").show().siblings().hide()
    })
    //点击数据集管理
    $("#dataSetManagement").on("click",function() {
        console.log(2)
        window.location.href = "../../dataSetManagement.html"
    })
    
})();

// 控制左边显示隐藏
(function () {


    $("#control").on("click", function () {
        var Transform = $("#mainBody_left").css("transform")
        console.log(Transform)
        if (Transform == "none" || Transform == "matrix(1, 0, 0, 1, 0, 0)") {
            $("#mainBody_left").css({
                "transform": "translateX(-200px)",
                "transition": "all .5s"
            })
            $("#mainBody_right").css({
                "padding-left": "100px",
                // "width":"100%",
                "transition": "all .5s .2s"
            })
        } else {
            $("#mainBody_left").css({
                "transform": "translateX(0px)",
                "transition": "all .5s"
            })
            $("#mainBody_right").css({
                "padding-left": "203px",
                // "width":"86%",
                "transition": "all .5s "
            })
        }
    })
})();

(function () {

})();
window.onload = function () {
    checkCookie()
};