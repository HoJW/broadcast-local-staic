(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bb9bb1ec"],{"5e01":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"table"},[i("div",{staticClass:"container"},[i("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[i("el-col",{attrs:{md:24}},[i("el-button",{staticClass:"r",staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[i("i",{staticClass:"el-icon-refresh el-icon--left"}),t._v("刷新")])],1)],1),i("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:t.data,height:t.tableHeight,align:"center"},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"index",width:"55",align:"center","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",align:"center","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"audioName",label:"前导音名称",align:"center","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{prop:"realName",label:"文件原名称",align:"center","show-overflow-tooltip":""}}),i("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"text",icon:"el-icon-view"},on:{click:function(i){return t.handleLookup(e.$index,e.row)}}},[t._v("详情")])]}}])})],1),i("div",{staticClass:"pagination"},[i("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1),i("guide-audio-edit-dialog",{attrs:{title:t.guideAudioEditTitle,show:t.guideAudioEditDialogVisible},on:{"update:show":function(e){t.guideAudioEditDialogVisible=e}}})],1)},l=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.dialogTitle,visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog()}}},[i("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[i("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"100px"}},[i("el-form-item",{attrs:{label:"前导音名称"}},[i("el-input",{model:{value:t.guideName,callback:function(e){t.guideName=e},expression:"guideName"}})],1),i("el-form-item",{attrs:{label:"文件原名称"}},[i("el-input",{model:{value:t.guideRealName,callback:function(e){t.guideRealName=e},expression:"guideRealName"}})],1),i("el-form-item",{attrs:{label:"上传文件"}},[i("el-input",{attrs:{placeholder:""},model:{value:t.uploadFilePath,callback:function(e){t.uploadFilePath=e},expression:"uploadFilePath"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-upload"},on:{click:function(e){return t.openTipsEdit()}},slot:"append"},[t._v("替换")])],1)],1),i("el-form-item",{attrs:{label:"前导音路径"}},[i("el-input",{model:{value:t.guidePath,callback:function(e){t.guidePath=e},expression:"guidePath"}})],1),i("el-form-item",{attrs:{label:"前导音格式"}},[i("el-input",{model:{value:t.guideForm,callback:function(e){t.guideForm=e},expression:"guideForm"}})],1)],1)],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},n=[],s={name:"guide-audio-edit-dialog",data:function(){return{visible:this.show,dialogTitle:"",form:{name:"",date:"",address:""},guideName:"",guideRealName:"",uploadFilePath:"",guidePath:"",guideForm:""}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object},title:{type:String,default:""}},watch:{show:function(){console.log(this.datas),this.form=this.datas,this.dialogTitle=this.title,this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1},closeDialog:function(){this.guideName="",this.guideRealName="",this.uploadFilePath="",this.guidePath="",this.guideForm="",this.$emit("update:show",!1)}}},u=s,d=i("2877"),r=Object(d["a"])(u,o,n,!1,null,null,null),c=r.exports,h={name:"guide-audio",components:{guideAudioEditDialog:c},data:function(){return{url:"./mock-data/guide-audio.json",tableData:[],cur_page:1,multipleSelection:[],idx:-1,guideAudioEditTitle:"",guideAudioEditDialogVisible:!1}},created:function(){this.getData()},computed:{data:function(){return this.tableData},tableHeight:function(){return window.innerHeight-218+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.$axios.get(this.url,{page:this.cur_page}).then(function(e){console.log(),t.tableData=e.data.list})},handleEdit:function(t,e){this.idx=t,this.guideAudioEditTitle="查看前导音",this.guideAudioEditDialogVisible=!0},handleLookup:function(t,e){this.idx=t,this.guideAudioEditTitle="编辑前导音",this.guideAudioEditDialogVisible=!0},handleSelectionChange:function(t){this.multipleSelection=t}}},g=h,p=(i("b06c"),Object(d["a"])(g,a,l,!1,null,"6e19123b",null));e["default"]=p.exports},"6ded":function(t,e,i){},b06c:function(t,e,i){"use strict";var a=i("6ded"),l=i.n(a);l.a}}]);