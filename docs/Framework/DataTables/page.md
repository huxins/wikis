# page

- [upgrade](https://datatables.net/upgrade/1.10-convert)
- [jQuery DataTable 基本使用](https://www.cnblogs.com/xiashengwang/p/8087181.html)

```javascript
$(function () {
    $("#table").DataTable({
        // 是否允许检索
        "searching": false,
        // 是否允许排序
        "ordering": true,
        // 初期排序列
        //"order": [[0,'asc'],[1,'desc']],
        // 是否显示情报 就是"当前显示1/100记录"这个信息
        "info": false,
        // 是否允许翻页，设成false，翻页按钮不显示
        "paging": false,
        // 水平滚动条
        "scrollX": false,
        // 垂直滚动条
        "scrollY": false,
        // 件数选择功能 默认true
        "lengthChange": false,
        // 件数选择下拉框内容
        "lengthMenu": [10, 25, 50, 75, 100],
        // 每页的初期件数 用户可以操作lengthMenu上的值覆盖
        "pageLength": 50,
        // 翻页按钮样式
        // numbers:数字
        // simple:前一页，后一页
        // simple_numbers:前一页，后一页，数字
        // full:第一页，前一页，后一页，最后页
        // full_numbers:第一页，前一页，后一页，最后页，数字
        // first_last_numbers:第一页，最后页，数字
        "pagingType": "full_numbers",
        // 行样式应用 指定多个的话，第一行tr的class为strip1，第二行为strip2，第三行为strip3.
        // 第四行以后又开始从strip1循环。。。 如果想指定成斑马条状，这里的class必须指定为2个。
        "stripeClasses": ['strip1', 'strip2', 'strip3'],
        // 自动列宽
        "autoWidth": true,
        // 是否表示 "processing" 加载中的信息，这个信息可以修改
        "processing": true,
        // 每次创建是否销毁以前的DataTable,默认false
        "destroy": false,
        // 控制表格各种信息的表示位置（比较复杂） 默认:lfrtip
        // 具体参考：https://datatables.net/reference/option/dom
        "dom": 'lrtip',
        "language": {
            "processing": "正在加载中......",
            // 当前页显示多少条
            "lengthMenu": "每页显示 _MENU_ 条记录",
            // _START_（当前页的第一条的序号） ,_END_（当前页的最后一条的序号）,_TOTAL_（筛选后的总件数）,
            // _MAX_(总件数),_PAGE_(当前页号),_PAGES_（总页数）
            "info": "当前显示 _PAGE_ 页， 共 _PAGES_ 页",
            "infoEmpty": "显示0到0条记录",
            // 没有数据的显示（可选），如果没指定，会用zeroRecords的内容
            "emptyTable": "没有数据！",
            // 筛选后，没有数据的表示信息，注意emptyTable优先级更高
            "zeroRecords": "没有数据！",
            // 千分位的符号，只对显示有效，默认就是","  一般不要改写
            //"thousands": "'",
            // 小数点位的符号，对输入解析有影响，默认就是"." 一般不要改写
            //"decimal": "-",
            // 翻页按钮文字控制
            "paginate": {
                "first": "首页",
                "last": "末页",
                "previous": "上一页",
                "next": "下一页",
                "sJump": "GO"
            },
            // Client-Side用，Server-Side不用这个属性
            "loadingRecords": "正在加载中......"
        },
        // 默认是false
        // 如果设为true，将只渲染当前也的html，速度会很快，但是通过API就访问不到所有页的数据，有利有弊
        //"deferRender": false,
        // 服务器端处理方式
        "serverSide": true,

        // ajax选项 可以直接简单指定成请求的文件
        //"ajax": "data.json",
        // 也可以用对象来配置，更加灵活
        "ajax": {
            // url可以直接指定远程的json文件，或是MVC的请求地址 /Controller/Action
            url: "data.json",
            type: 'POST',
            // 传给服务器的数据，可以添加我们自己的查询参数
            data: function (param) {
                param.opportunityNO = $('#txtSearch').val();
                return param;
            },
            //用于处理服务器端返回的数据。 dataSrc是DataTable特有的
            dataSrc: function (myJson) {
                if (myJson.timeout) {
                    return "";
                }
                return myJson;
            }
        },
        //指定用于行ID的属性名 默认是：DT_RowId
        "rowId": 'staffId',
        // 列定义
        "columns": [            
            {
                // data 可以是属性名，或嵌套属性（WORKTM1.ID）,数组ArrOne[,] 用中括号中的字符连接数组后返回。
                "data": "WORKTM1",
                // 这里的class会应用到td上面
                "className": "dt-body-right",
                // 列宽
                "width": 40,
                // 很灵活，描绘每个单元格
                // data：当前cell的data，这个data和type有关
                // type：filter,display,type,sort
                // row:当前行数据
                // https://datatables.net/reference/option/columns.render
                "render": function (data, type, row, meta) {
                    return type === 'display' && data.length > 40 ?
                        '<span title="' + data + '">' + data.substr(0, 38) + '...</span>' : data;

                },
                // 是否可排序 默认值：true
                "orderable": true,
                // 指定当前列排序操作的时候，用哪一列（几列）的数据进行真正的排序（通常是隐藏的）
                "orderData": [0, 1],
                // 这个属性 和type属性相似，指定排序时候这一列该怎么转换数据,
                //需要用到其他的插件 详细： https://datatables.net/plug-ins/sorting/
                "orderDataType": "dom-text",
                // 是否显示当前列 默认值：true
                "visible": false,
                // 是否允许搜索此列 默认值：true
                "searchable": false,
                //这个属性仅Client-Side有效， Server-Side在服务器端排序 
                //主要用于排序和筛选，指定当前列作为什么类型进行解析
                //内置值：date，num，num-fmt，html-num，html-num-fmt，html，string
                // 还可以用其他插件提供的类型 ：详细： https://datatables.net/plug-ins/sorting/
                // 有html开头的，都会讲html标签先移除后进行数据处理
                "type": "html",
                // 列头文字，如果没有指定thead，则会生成。如何指定了thead，则会覆盖当前列头文字
                "title": "My column title",
                // defaultContent:默认值，属性值为null或undefined就会用这个值
                "defaultContent": "<i>Not set</i>",
                // 单元格类型："th","td"
                "cellType" : "td",
                // 单元格创建完后的回调，可以作为render的补充
                // cell:TD的dom
                // cellData:原始的单元格数据，如何render中进行了格式化，用$(cell).html()来取格式化后的数据
                // rowData:行数据
                // row:行号
                // col:列号
                "createdCell": function (cell, cellData, rowData, row, col) {
                    if ( cellData < 1 ) {
                        $(td).css('color', 'red')
                    }
                }
            },
            { "data": "WORKTM2", "className": "dt-body-right", "width": 40 },
            { "data": "WORKTM3", "className": "dt-body-right", "width": 40 },
            { "data": "WORKTM4", "className": "dt-body-right", "width": 40 },
            { "data": "RESTDAY1", "className": "dt-body-right", "width": 40 },
            { "data": "RESTDAY2", "className": "dt-body-right", "width": 40 },
            { "data": "RESTDAY3", "className": "dt-body-right", "width": 40 },
            { "data": "RESTDAY4", "className": "dt-body-right", "width": 40 },
            { "data": "RESTDAY5", "className": "dt-body-right", "width": 40 }
        ],
        // 和上面的columns类似，columns可以定义的属性，都可以在这里定义，
        // 另外增加targets属性用于指定列范围（可以多列）
        // 优先级：上面的columns高于columnDefs
        columnDefs: [
            {
                targets: [0, 2],
                render: function (data, type, row, meta) {
                    if (type === 'display') {
                        var ctemp = $(".dayinfo").children().eq(meta.col).attr("class");
                        var cname = ctemp ? ctemp : "";
                        var readonly = $(".dayinfo").children().eq(meta.col).attr("data-fixed") == "fixed" ? "readonly" : "";
                        return '<input type="input" class="form-control dt-body-center ' + cname + '" ' + readonly + ' value="' + data + '">';
                    }
                    return data;
                },
            }],
        // 每一行创建完调用的函数
        "createdRow": function (row, data, dataIndex) {
            // row : tr dom
            // data: row data
            // dataIndex:row data's index
            if (data[4] == "A") {
                $(row).addClass('important');
            }
        },
        // 每一行被创建，但还没有被加载到document中，这个函数优先于createdRow
        // 个人觉得用createdRow更好
        "rowCallback": function (row, data, index) {
            // row : tr dom
            // data: row data
            // index:row data's index
            if ( data[4] == "A" ) {
                $('td:eq(4)', row).html( '<b>A</b>' );
            }
        },
        //thead被描画后调用
        "headerCallback": function (thead, data, start, end, display) {
            //thead:dom， data:原始的datatable数据，display：当前显示排序好的datatable数据（有可能经过排序）
            // start end ：当前dispaly数据的开始结束序号
            $(thead).find('th').eq(0).html( 'Displaying '+(end-start)+' records' );
        },
        // tfoot被描画后调用，通常可用于计算合计值
        "footerCallback": function (tfoot, data, start, end, display) {
            //tfoot:dom， data:原始的datatable数据，display：当前显示排序好的datatable数据（有可能经过排序）
            // start end ：当前dispaly数据的开始结束序号
            var api = this.api();
            $( api.column( 5 ).footer() ).html(
                api.column( 5 ).data().reduce( function ( a, b ) {
                    return a + b;
                }, 0 )
            );
        },
        // 初始化，描画都已经完成，常用于ajax
        "initComplete": function( settings, json ) {
            $('div.loading').remove();
        },
        // 每次DataTable描画后都要调用，调用这个函数时，table可能没有描画完成，
        // 所以不要在里面操作table的dom，要操作dom应放在initComplete
        "drawCallback": function( settings ) {
            var api = this.api();

            // Output the data for the visible rows to the browser's console
            console.log( api.rows( {page:'current'} ).data() );
        },
        // 这个函数可以改写数字的格式化方式
        // 默认DataTable用 language.thousands来解析数字，“，”
        "formatNumber": function ( toFormat ) {
            return toFormat.toString().replace(
                /\B(?=(\d{3})+(?!\d))/g, "'"
            );
        }
    });
});
```

