
// 事件集合
(function() {
    $("#dataManagement").on("click",function() {
        window.location.href = "../../data.html";
    })
    var count = 0
    $("#dataSetManagement").on("click",function() {
        count++ 
        
        if ( count % 2 == 1) {
            // 单数
            console.log("单数")
            $(".sourseSonHeight").fadeOut()
            $(".rotate").css({
                "transform":"rotate(0) translateY(-7px)"
            })
        }else{
            // 双数
            $(".sourseSonHeight").fadeIn()
            $(".rotate").css({
                "transform":"rotate(90deg) translateX(-7px)"
            })
            console.log("双数")
        }
        
    })
    // 手动查询
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
        $(".newDiscoveryRules").show().siblings().hide()
    })
    //   编辑
    $("#Edit").on("click", function () {
        $(".editDiscoveryRules").show().siblings().hide()
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
    // 左侧菜单几点二级菜单高亮设置
    // 发现规则
    $("#discoveryRules").on("click",function() {
        window.location.href = "../../dataSetManagement.html"
    })
    // 发现任务
    $("#discoveryTask").on("click",function() {
        window.location.href = "../../discoveryTask.html"
    })
    // 取消新增发现规则
    $("#discoverRulesCancel").on("click",function() {
        $(".DiscoveryRules").show().siblings().hide()
    })
    // 保存新增发现规则
    $("#discoverRulesSave").on("click",function() {
        alert($(this).val())
    })
    // 新增测试
    $("#Test").on("click",function() {
        alert($(this).text())
    })
    
    // 取消编辑发现法规
    $("#editDiscoverRulesCancel").on("click",function() {
       $(".DiscoveryRules").show().siblings().hide()
    })
    // 保存编辑发现规则
    $("#editDiscoverRulesSave").on("click",function() {
        alert($("#editTextarea").val()||"空")
    })
    // 编辑测试
    $("#editTest").on("click",function() {
        tips("F","闪捷信息")
    })

})();
// 表格渲染
(function() {
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

// 检查cookie
window.onload = function() {
    checkCookie()
}