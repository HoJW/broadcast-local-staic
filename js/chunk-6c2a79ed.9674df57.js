(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c2a79ed"],{"3f32":function(t,e,a){"use strict";var l=a("caf0"),n=a.n(l);n.a},"3f6e":function(t,e,a){"use strict";var l=a("6a00"),n=a.n(l);n.a},"6a00":function(t,e,a){},caf0:function(t,e,a){},f880:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{},[a("div",{staticClass:"container"},[a("el-tabs",{model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"用户操作日志管理",name:"control"}},[a("system-control-log")],1),a("el-tab-pane",{attrs:{label:"导入/导出模板管理",lazy:!0,name:"module"}},[a("system-module")],1),a("el-tab-pane",{attrs:{label:"导入/导出日志管理",lazy:!0,name:"log"}},[a("log-manager")],1),a("el-tab-pane",{attrs:{label:"系统权限管理",lazy:!0,name:"system-auth"}},[a("system-auth")],1),a("el-tab-pane",{attrs:{label:"App权限管理",lazy:!0,name:"app-auth"}},[a("app-auth")],1)],1)],1)])},n=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container-tab"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:8}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1),a("el-col",{attrs:{md:8}},[a("el-input",{staticClass:" mr10",attrs:{placeholder:"IMEI"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.selectWord,callback:function(e){t.selectWord=e},expression:"selectWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"},[t._v("搜索")])],1)],1),a("el-col",{attrs:{md:8}},[a("el-button",{staticClass:"r",staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[t._v("导出")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,height:t.tableHeight,align:"center"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"accountId",label:"用户账号",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"username",label:"姓名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"time",label:"操作时间",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"org",label:"部门",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"job",label:"职位",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"module",label:"操作模块",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"remark",label:"操作描述",align:"center","show-overflow-tooltip":""}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1)])},o=[],s={name:"system-control-log",data:function(){return{tableData:[],loading:!1,cur_page:1,multipleSelection:[],selectWord:"",idx:-1,dateValue:""}},created:function(){this.getData()},computed:{tableHeight:function(){return window.innerHeight-272+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.loading=!0,this.$api.systemManager.getSystemControlLogList().then(function(e){t.tableData=e.list,t.loading=!1}).catch(function(e){t.loading=!1})},search:function(){this.getData()},handleSelectionChange:function(t){this.multipleSelection=t}}},r=s,c=a("2877"),u=Object(c["a"])(r,i,o,!1,null,"771e3f5e",null),d=u.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container-tab"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,height:t.tableHeight,align:"center"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"temlNmae",label:"模板名称",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-download"},on:{click:function(a){return t.download(e.$index,e.row)}}},[t._v("下载")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1)])},p=[],g={name:"system-module",data:function(){return{tableData:[],loading:!1,cur_page:1,multipleSelection:[],idx:-1}},created:function(){this.getData()},computed:{tableHeight:function(){return window.innerHeight-230+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.loading=!0,this.$api.systemManager.getSystemModuleList().then(function(e){t.tableData=e.list,t.loading=!1}).catch(function(e){t.loading=!1})},search:function(){this.is_search=!0},handleSelectionChange:function(t){this.multipleSelection=t},download:function(t,e){}}},m=g,f=Object(c["a"])(m,h,p,!1,null,"2c2f021f",null),b=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container-tab"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:8}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1),a("el-col",{attrs:{md:8}},[a("el-input",{staticClass:" mr10",attrs:{placeholder:"IMEI"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.selectWord,callback:function(e){t.selectWord=e},expression:"selectWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"},[t._v("搜索")])],1)],1),a("el-col",{attrs:{md:8}},[a("el-button",{staticClass:"r",staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[t._v("导出")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:t.tableData,height:t.tableHeight,align:"center"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"id",label:"ID",width:"100",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"accountId",label:"用户账号",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"username",label:"姓名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"time",label:"操作时间",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"org",label:"部门",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"job",label:"职位",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"module",label:"操作模块",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"remark",label:"操作描述",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"result",label:"操作结果",align:"center","show-overflow-tooltip":""}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1)])},w=[],y={name:"log-manager",data:function(){return{url:"./mock-data/system-control-log.json",tableData:[],loading:!1,cur_page:1,multipleSelection:[],selectWord:"",idx:-1,dateValue:""}},created:function(){this.getData()},computed:{tableHeight:function(){return window.innerHeight-272+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.loading=!0,this.$api.systemManager.getLogManagerList().then(function(e){t.tableData=e.list,t.loading=!1}).catch(function(e){t.loading=!1})},search:function(){this.getData()},handleSelectionChange:function(t){this.multipleSelection=t}}},x=y,C=Object(c["a"])(x,v,w,!1,null,"522cfc5f",null),D=C.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container-tab"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:10}},[a("el-input",{staticClass:"mr10",attrs:{placeholder:"输入角色名字/ID"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.selectWord,callback:function(e){t.selectWord=e},expression:"selectWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"},[t._v("搜索")])],1)],1),a("el-col",{attrs:{md:14}},[a("el-button",{staticClass:"r",attrs:{type:"success"},on:{click:function(e){return t.addSystemAuth()}}},[a("i",{staticClass:"el-icon-plus el-icon--left"}),t._v("添加系统权限角色")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:t.data,height:t.tableHeight,align:"center"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"roleAccount",label:"角色名称",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"authDescribe",label:"权限",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1),a("system-auth-edit-dialog",{attrs:{title:t.systemAuthEditTitle,show:t.systemAuthEditDialogVisible},on:{"update:show":function(e){t.systemAuthEditDialogVisible=e}}})],1)},_=[],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.$emit("update:show",!1)}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{model:{value:t.form.roleName,callback:function(e){t.$set(t.form,"roleName",e)},expression:"form.roleName"}})],1),a("el-form-item",{attrs:{label:"系统权限"}},[a("div",{staticClass:"tree-box",style:t.orgHeight},[a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"org-tree",attrs:{data:t.authData,"show-checkbox":"","node-key":"id",props:t.defaultProps}})],1)])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},E=[],S={name:"system-auth-edit-dialog",data:function(){return{visible:this.show,loading:!1,dialogTitle:"",form:{roleName:""},authData:[],defaultProps:{children:"children",label:"label"}}},computed:{orgHeight:function(){return{height:window.innerHeight-334>350?"350px":window.innerHeight-334+"px"}}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object},title:{type:String,default:""}},watch:{show:function(){var t=this;void 0!==this.datas&&this.datas!=={}&&this.$nextTick(function(){t.form=t.datas}),this.dialogTitle=this.title,this.visible=this.show,this.visible&&this.getAuthData()}},created:function(){},methods:{comfirm:function(){this.visible=!1},getAuthData:function(){var t=this;this.loading=!0,this.$api.systemManager.getSystemAuthTree().then(function(e){t.authData=e.list,t.loading=!1}).catch(function(e){t.loading=!1})},closeDialog:function(){this.form={roleName:""},this.$refs["form"].resetFields(),this.$emit("update:show",!1)}}},$=S,T=(a("3f32"),Object(c["a"])($,A,E,!1,null,null,null)),H=T.exports,N={name:"system-auth",components:{systemAuthEditDialog:H},data:function(){return{tableData:[],loading:!1,cur_page:1,multipleSelection:[],selectWord:"",idx:-1,systemAuthEditTitle:"",systemAuthEditDialogVisible:!1}},created:function(){this.getData()},computed:{data:function(){return this.tableData},tableHeight:function(){return window.innerHeight-272+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.loading=!0,this.$api.systemManager.getSystemAuthList().then(function(e){t.tableData=e.list,t.loading=!1}).catch(function(e){t.loading=!1})},search:function(){this.getData()},handleEdit:function(t,e){this.idx=t,this.systemAuthEditTitle="编辑系统权限角色",this.systemAuthEditDialogVisible=!0},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){})},handleSelectionChange:function(t){this.multipleSelection=t},addSystemAuth:function(){this.systemAuthEditTitle="添加系统权限角色",this.systemAuthEditDialogVisible=!0}}},j=N,O=Object(c["a"])(j,k,_,!1,null,"5850497d",null),V=O.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"container-tab"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:10}},[a("el-input",{staticClass:"mr10",attrs:{placeholder:"输入角色名字/ID"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.selectWord,callback:function(e){t.selectWord=e},expression:"selectWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.search},slot:"append"},[t._v("搜索")])],1)],1),a("el-col",{attrs:{md:14}},[a("el-button",{staticClass:"r",attrs:{type:"success"},on:{click:t.addAppAuth}},[a("i",{staticClass:"el-icon-plus el-icon--left"}),t._v("添加App权限角色")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:t.data,height:t.tableHeight,align:"center"},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"index",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"roleAccount",label:"角色名称",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"authDescribe",label:"权限",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{label:"操作",width:"180",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",icon:"el-icon-edit"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{staticClass:"red",attrs:{type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":t.handleCurrentChange}})],1)],1),a("app-auth-edit-dialog",{attrs:{title:t.appAuthEditTitle,show:t.appAuthEditDialogVisible},on:{"update:show":function(e){t.appAuthEditDialogVisible=e}}})],1)},I=[],M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{title:t.dialogTitle,visible:t.visible},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog()}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"角色名称"}},[a("el-input",{model:{value:t.form.roleName,callback:function(e){t.$set(t.form,"roleName",e)},expression:"form.roleName"}})],1),a("el-form-item",{attrs:{label:"系统权限"}},[a("div",{staticClass:"tree-box",style:t.orgHeight},[a("el-tree",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"org-tree",attrs:{data:t.authData,"show-checkbox":"","node-key":"id",props:t.defaultProps}})],1)])],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.comfirm()}}},[t._v("确 定")])],1)],1)],1)},L=[],B={name:"app-auth-edit-dialog",data:function(){return{visible:this.show,loading:!1,dialogTitle:"",form:{roleName:""},authData:[],defaultProps:{children:"children",label:"label"}}},computed:{orgHeight:function(){return{height:window.innerHeight-334>350?"350px":window.innerHeight-334+"px"}}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object},title:{type:String,default:""}},watch:{show:function(){var t=this;void 0!==this.datas&&this.datas!=={}&&this.$nextTick(function(){t.form=t.datas}),this.dialogTitle=this.title,this.visible=this.show,this.visible&&this.getAuthData()}},created:function(){},methods:{comfirm:function(){this.visible=!1},getAuthData:function(){var t=this;this.loading=!0,this.$api.systemManager.getAppAuthTree().then(function(e){t.authData=e.list,t.loading=!1}).catch(function(e){t.loading=!1})},closeDialog:function(){this.form={roleName:""},this.$refs["form"].resetFields(),this.$emit("update:show",!1)}}},z=B,P=(a("3f6e"),Object(c["a"])(z,M,L,!1,null,null,null)),F=P.exports,J={name:"app-auth",components:{appAuthEditDialog:F},data:function(){return{tableData:[],loading:!1,cur_page:1,multipleSelection:[],selectWord:"",idx:-1,appAuthEditTitle:"",appAuthEditDialogVisible:!1}},created:function(){this.getData()},computed:{data:function(){return this.tableData},tableHeight:function(){return window.innerHeight-272+"px"}},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.loading=!0,this.$api.systemManager.getAppAuthList().then(function(e){t.tableData=e.list,t.loading=!1}).catch(function(e){t.loading=!1})},search:function(){this.getData()},handleEdit:function(t,e){this.idx=t,this.appAuthEditTitle="编辑App权限角色",this.appAuthEditDialogVisible=!0},handleDelete:function(t,e){var a=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){})},handleSelectionChange:function(t){this.multipleSelection=t},addAppAuth:function(){this.appAuthEditTitle="添加App权限角色",this.appAuthEditDialogVisible=!0}}},q=J,G=Object(c["a"])(q,W,I,!1,null,"58c01346",null),K=G.exports,Q={name:"tabs",data:function(){return{activeName:"control"}},components:{systemControlLog:d,systemModule:b,logManager:D,systemAuth:V,appAuth:K},methods:{},computed:{}},R=Q,U=Object(c["a"])(R,l,n,!1,null,null,null);e["default"]=U.exports}}]);