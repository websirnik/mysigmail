(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projects"],{"054a":function(e,t,n){"use strict";var c=n("4047"),a=n.n(c);a.a},4047:function(e,t,n){},acca:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"projects"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.allProjects,size:"small"},on:{"cell-mouse-enter":e.onHover}},[n("el-table-column",{attrs:{label:"Name",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{on:{click:function(n){n.stopPropagation(),e.onEditName(t.row)}}},[e.clicked.id===t.row.id?n("span",[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:18}},[n("el-input",{attrs:{size:"mini"},model:{value:e.clicked.name,callback:function(t){e.$set(e.clicked,"name",t)},expression:"clicked.name"}})],1),n("el-col",{attrs:{span:6}},[n("div",{staticClass:"name-actions"},[n("span",{staticClass:"name-actions name-actions--success",on:{click:function(t){return t.stopPropagation(),e.onUpdateName(t)}}},[n("i",{staticClass:"el-icon-check"})]),n("span",{staticClass:"name-actions name-actions--cancel",on:{click:function(t){t.stopPropagation(),e.clicked={}}}},[n("i",{staticClass:"el-icon-close"})])])])],1)],1):n("span",[e.projects.project.id===t.row.id?n("span",[n("strong",[e._v(e._s(t.row.name))])]):n("span",[e._v(e._s(t.row.name))])])])]}}])}),n("el-table-column",{attrs:{label:"Actions",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(n){e.onLoad(t.row)}}},[e._v("\n          Load\n          "),n("i",{staticClass:"el-icon-upload2"})]),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(n){e.download(t.row)}}},[e._v("\n          Download\n          "),n("i",{staticClass:"el-icon-download"})]),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(n){e.onDelete(t.row.id)}}},[e._v("\n          Delete\n          "),n("i",{staticClass:"el-icon-delete"})])]}}])})],1),n("div",{staticClass:"project-actions"},[n("el-button",{attrs:{size:"small"},on:{click:e.onImportProject}},[e._v("Import project")]),n("el-button",{attrs:{size:"small",type:"success"},on:{click:e.onNew}},[e._v("New project")]),n("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.onFileSelected}})],1),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"desc"},[n("p",[e._v("Your changes and your projects only get stored in your browser's cache. Clearing your browsing data will result in losing your projects.")])])}],o=(n("7f7f"),n("96cf"),n("1da1")),r=n("be94"),i=n("2f62"),s=n("c7f7"),l={name:"",data:function(){return{loading:!1,dbname:"",version:1,db:"",store:"",index:"",tx:"",hovered:{},clicked:{},selectedFile:null}},computed:Object(r["a"])({},Object(i["c"])(["basic","options","template","projects"]),{allProjects:function(){return this.projects.projects.filter(function(e){return"currentProject"!==e.id})}}),created:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$ga.page(this.$router),this.$store.dispatch("getProjects");case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{onNew:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("newProject");case 2:this.gaEventClick("new project");case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),onDelete:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.$confirm("This will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"});case 3:return e.next=5,Object(s["a"])(t);case 5:return e.next=7,this.$store.dispatch("getProjects");case 7:if(this.gaEventClick("delete project"),!(this.projects.projects.length>0)){e.next=13;break}return e.next=11,this.$store.dispatch("setCurrentProject");case 11:e.next=14;break;case 13:this.$store.dispatch("newProject");case 14:e.next=18;break;case 16:e.prev=16,e.t0=e["catch"](0);case 18:case"end":return e.stop()}},e,this,[[0,16]])}));return function(t){return e.apply(this,arguments)}}(),onLoad:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.$store.dispatch("setProject",t),this.gaEventClick("load project");case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),onUpdate:function(){this.$store.dispatch("updateProject",this.projects.project)},onHover:function(e){this.hovered=Object(r["a"])({},e)},onEditName:function(e){this.clicked=Object(r["a"])({},e)},onUpdateName:function(){this.$store.dispatch("updateProject",this.clicked),this.clicked={}},download:function(e){var t=JSON.stringify(e),n=document.createElement("a"),c=new Blob([t],{type:"application/json"});n.href=URL.createObjectURL(c),n.download=e.name,n.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window})),this.gaEventClick("download project")},onFileSelected:function(e){var t=this,n=e.target.files[0],c=new FileReader;c.readAsText(n),c.onload=function(e){t.$store.dispatch("importProject",JSON.parse(e.target.result)),t.$refs.fileInput.value=""}},onImportProject:function(){this.$refs.fileInput.click(),this.gaEventClick("import project")}}},u=l,p=(n("054a"),n("2877")),d=Object(p["a"])(u,c,a,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=projects.17fb5f8e.js.map