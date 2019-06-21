(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e63cb1e"],{"1c37":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table"},[l("div",{staticClass:"container"},[l("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[l("el-col",{attrs:{md:3}},[l("el-select",{attrs:{filterable:"",placeholder:"状态"},model:{value:e.statusValue,callback:function(t){e.statusValue=t},expression:"statusValue"}},e._l(e.statusOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-col",{attrs:{md:3}},[l("el-select",{attrs:{filterable:"",placeholder:"报警类型"},model:{value:e.typeValue,callback:function(t){e.typeValue=t},expression:"typeValue"}},e._l(e.typeOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-col",{attrs:{md:3}},[l("el-select",{attrs:{filterable:"",placeholder:"报警结束方式"},model:{value:e.typeValue,callback:function(t){e.typeValue=t},expression:"typeValue"}},e._l(e.typeOptions,function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),l("el-col",{attrs:{md:7}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.dateValue,callback:function(t){e.dateValue=t},expression:"dateValue"}})],1),l("el-col",{attrs:{md:6}},[l("el-input",{staticClass:" mr10",attrs:{placeholder:"IMEI"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}},[l("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1),l("el-col",{attrs:{md:2}},[l("el-button",{staticClass:"r",staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[e._v("导出")])],1)],1),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.data,height:e.tableHeight,align:"center"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"time",label:"报警时间",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"type",label:"报警类型",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"imei",label:"IMEI",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"name",label:"用户名",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"phone",label:"电话",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"group",label:"分组",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"ten",label:"十户联防",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{prop:"status",label:"状态",align:"center","show-overflow-tooltip":""}}),l("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["待处理"!==t.row.status?l("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(l){return e.handleDetail(t.$index,t.row)}}},[e._v("处理详情")]):e._e()]}}])})],1),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":e.handleCurrentChange}})],1)],1),l("record-detail-dialog",{attrs:{show:e.recordDetailDialogVisible},on:{"update:show":function(t){e.recordDetailDialogVisible=t}}})],1)},o=[],n=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-dialog",{attrs:{title:"处理详情",visible:e.visible},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog()}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"报警开始时间"}},[l("el-input",{model:{value:e.alarmStartTime,callback:function(t){e.alarmStartTime=t},expression:"alarmStartTime"}})],1),l("el-form-item",{attrs:{label:"报警结束时间"}},[l("el-input",{model:{value:e.alarmEndTime,callback:function(t){e.alarmEndTime=t},expression:"alarmEndTime"}})],1),l("el-form-item",{attrs:{label:"报警结束方式"}},[l("el-input",{model:{value:e.alarmEndType,callback:function(t){e.alarmEndType=t},expression:"alarmEndType"}})],1),l("el-form-item",{attrs:{label:"审核结果"}},[l("el-input",{model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1),l("el-form-item",{attrs:{label:"处理人"}},[l("el-input",{model:{value:e.handler,callback:function(t){e.handler=t},expression:"handler"}})],1),l("el-form-item",{attrs:{label:"处理时间"}},[l("el-input",{model:{value:e.handleTime,callback:function(t){e.handleTime=t},expression:"handleTime"}})],1)],1),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),l("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.comfirm()}}},[e._v("确 定")])],1)],1)],1)},i=[],r={name:"record-detail-dialog",data:function(){return{visible:this.show,dialogTitle:"",form:{name:"",date:"",address:""},alarmStartTime:"",alarmEndTime:"",alarmEndType:"",result:"",handler:"",handleTime:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1},closeDialog:function(){this.alarmTime="",this.result="",this.handler="",this.handleTime="",this.$emit("update:show",!1)}}},s=r,c=l("2877"),u=Object(c["a"])(s,n,i,!1,null,null,null),p=u.exports,d={name:"alarm-record",components:{recordDetailDialog:p},data:function(){return{url:"./mock-data/alarm-record.json",tableData:[],cur_page:1,multipleSelection:[],select_cate:"",select_word:"",is_search:!1,form:{name:"",date:"",address:""},idx:-1,statusValue:"",statusOptions:[{value:"选项1",label:"已激活"},{value:"选项2",label:"未激活"}],typeOptions:[{value:"选项1",label:"十户联防报警"},{value:"选项2",label:"防移报警"},{value:"选项3",label:"防拆报警"}],typeValue:"",dateValue:"",recordDetailDialogVisible:!1}},created:function(){this.getData()},computed:{data:function(){return this.tableData},tableHeight:function(){return window.innerHeight-218+"px"}},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;this.$axios.get(this.url,{page:this.cur_page}).then(function(t){console.log(),e.tableData=t.data.list})},search:function(){this.is_search=!0},handleDelete:function(e,t){var l=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){l.$message({type:"success",message:"删除成功!"})}).catch(function(){})},handleDetail:function(e,t){this.recordDetailDialogVisible=!0},handleSelectionChange:function(e){this.multipleSelection=e}}},m=d,h=(l("20c4"),Object(c["a"])(m,a,o,!1,null,"14b277cd",null));t["default"]=h.exports},"20c4":function(e,t,l){"use strict";var a=l("81c7"),o=l.n(a);o.a},"81c7":function(e,t,l){}}]);