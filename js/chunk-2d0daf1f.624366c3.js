(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0daf1f"],{"6e82":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"container"},[a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"远程锁频",name:"lock"}},[a("lock-channel")],1)],1)],1)])},o=[],n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"container-tab"},[a("el-row",{staticClass:"handle-box",attrs:{gutter:10}},[a("el-col",{attrs:{md:4}},[a("el-cascader",{attrs:{options:e.areaOptions,clearable:"",filterable:"",placeholder:"搜索或选择机构"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.node,o=t.data;return[a("span",[e._v(e._s(o.label))]),l.isLeaf?e._e():a("span",[e._v(" ("+e._s(o.children.length)+") ")])]}}]),model:{value:e.areaValue,callback:function(t){e.areaValue=t},expression:"areaValue"}})],1),a("el-col",{attrs:{md:4}},[a("el-select",{attrs:{filterable:"",clearable:"",placeholder:"状态"},model:{value:e.lockStatusValue,callback:function(t){e.lockStatusValue=t},expression:"lockStatusValue"}},e._l(e.lockStatusOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-col",{attrs:{md:8}},[a("el-input",{staticClass:" mr10",attrs:{placeholder:"IMEI/分组/用户名/十户联防"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.selectWord,callback:function(t){e.selectWord=t},expression:"selectWord"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"},[e._v("搜索")])],1)],1),a("el-col",{attrs:{md:8}},[a("el-button",{staticClass:"r",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",disabled:1!=e.multipleSelection.length},on:{click:function(t){return e.handleUnlock()}}},[e._v("解锁")]),a("el-button",{staticClass:"r",attrs:{type:"primary",disabled:0==e.multipleSelection.length},on:{click:function(t){return e.lockAction()}}},[e._v("锁频")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"table",attrs:{data:e.tableData,height:e.tableHeight,align:"center"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{prop:"id",label:"ID",align:"center"}}),a("el-table-column",{attrs:{prop:"imei",label:"IMEI",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"username",label:"用户名",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"phone",label:"联系电话",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"groupName",label:"所属分组",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"tenGroupName",label:"十户联防",align:"center","show-overflow-tooltip":""}}),a("el-table-column",{attrs:{prop:"status",label:"状态",align:"center","show-overflow-tooltip":""}})],1),a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{background:"",layout:"total, prev, pager, next, jumper",total:30},on:{"current-change":e.handleCurrentChange}})],1)],1),a("lock-channel-dialog",{attrs:{show:e.lockChannelDialogVisible},on:{"update:show":function(t){e.lockChannelDialogVisible=t}}})],1)},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{title:"锁频",visible:e.visible},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog()}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"show-message":!1,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"锁频时长",prop:"radio"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[e._v("手动解除")]),a("el-radio",{attrs:{label:"2"},model:{value:e.form.radio,callback:function(t){e.$set(e.form,"radio",t)},expression:"form.radio"}},[e._v("自动解除")])],1),a("el-form-item",{attrs:{label:"日期时间范围",prop:"dateValue"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.form.dateValue,callback:function(t){e.$set(e.form,"dateValue",t)},expression:"form.dateValue"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.comfirm()}}},[e._v("确 定")])],1)],1)],1)},r=[],c={name:"lock-channel-dialog",data:function(){return{visible:this.show,form:{radio:"1",dateValue:""},rules:{radio:[{required:!0}],dateValue:[{required:!0}]}}},props:{show:{type:Boolean,default:!1},EDIT:{type:String},datas:{type:Object}},watch:{show:function(){var e=this;void 0!==this.datas&&this.datas!=={}&&this.$nextTick(function(){e.form=e.datas}),this.visible=this.show}},created:function(){},methods:{comfirm:function(){this.visible=!1},closeDialog:function(){this.form={radio:"1",dateValue:""},this.$refs["form"].resetFields(),this.$emit("update:show",!1)}}},u=c,d=a("2877"),p=Object(d["a"])(u,s,r,!1,null,null,null),h=p.exports,f={name:"basetable",components:{lockChannelDialog:h},data:function(){return{tableData:[],loading:!1,cur_page:1,multipleSelection:[],selectWord:"",areaOptions:[],areaValue:"",lockStatusValue:"",lockStatusOptions:[],lockChannelDialogVisible:!1}},created:function(){this.getData(),this.getAreaOptionsData(),this.getLockStatusOptions()},computed:{tableHeight:function(){return window.innerHeight-272+"px"}},methods:{handleCurrentChange:function(e){this.cur_page=e,this.getData()},getData:function(){var e=this;this.loading=!0,this.$api.remoteControl.getLockChannelDeviceList().then(function(t){e.tableData=t.list,e.loading=!1}).catch(function(t){e.loading=!1})},getLockStatusOptions:function(){var e=this;this.$api.remoteControl.getLockChannelOptions().then(function(t){e.lockStatusOptions=t.list})},getAreaOptionsData:function(){var e=this;this.$api.getAreaOptions().then(function(t){e.areaOptions=t.list})},search:function(){this.getData()},handleSelectionChange:function(e){this.multipleSelection=e},handleUnlock:function(){var e=this;this.$confirm("是否解锁所选设备?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$message({type:"success",message:"解锁成功!"})}).catch(function(){})},lockAction:function(){this.lockChannelDialogVisible=!0}}},m=f,b=Object(d["a"])(m,n,i,!1,null,null,null),g=b.exports,v={name:"tabs",data:function(){return{activeName:"lock"}},components:{lockChannel:g},methods:{},computed:{}},k=v,w=Object(d["a"])(k,l,o,!1,null,null,null);t["default"]=w.exports}}]);