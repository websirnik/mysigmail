(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["options"],{2358:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"options"},[o("el-form",{attrs:{"label-position":"left","label-width":"150px"}},[o("el-form-item",{attrs:{label:"Main color"}},[o("el-color-picker",{ref:"colorPicker",on:{"active-change":t.onPreviewMainColor},model:{value:t.mainColor,callback:function(e){t.mainColor=e},expression:"mainColor"}})],1),o("el-form-item",{attrs:{label:"Secondary color"}},[o("el-color-picker",{ref:"colorPicker2",on:{"active-change":t.onPreviewSecondaryColor},model:{value:t.secondaryColor,callback:function(e){t.secondaryColor=e},expression:"secondaryColor"}})],1),o("el-form-item",{attrs:{label:"Avatar"}},[o("el-switch",{model:{value:t.showAvatar,callback:function(e){t.showAvatar=e},expression:"showAvatar"}})],1),o("el-collapse-transition",[t.showAvatar?o("div",[o("el-form-item",{attrs:{label:"Avatar size"}},[o("el-slider",{attrs:{min:t.attributes.avatar.min,max:t.attributes.avatar.max},model:{value:t.avatarSize,callback:function(e){t.avatarSize=e},expression:"avatarSize"}})],1),o("el-form-item",{attrs:{label:"Avatar shape"}},[o("el-select",{model:{value:t.avatarShape,callback:function(e){t.avatarShape=e},expression:"avatarShape"}},t._l(t.attributes.avatar.roundness,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:"Round"===e.label&&!t.isImageSquare}})}))],1)],1):t._e()]),o("el-form-item",{attrs:{label:"Font family"}},[o("el-select",{model:{value:t.fontFamily,callback:function(e){t.fontFamily=e},expression:"fontFamily"}},t._l(t.attributes.font.family,function(e){return o("el-option-group",{key:e.value,attrs:{label:e.label}},t._l(e.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))}))],1),o("el-form-item",{attrs:{label:"Font size"}},[o("el-select",{model:{value:t.fontSize,callback:function(e){t.fontSize=e},expression:"fontSize"}},t._l(t.attributes.font.size,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),o("el-form-item",{attrs:{label:"Job separator"}},[o("el-select",{model:{value:t.separator,callback:function(e){t.separator=e},expression:"separator"}},t._l(t.attributes.separator.options,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)],1)],1)},r=[],n=(o("b54a"),o("be94")),i=o("2f62"),s={name:"",data:function(){return{}},computed:Object(n["a"])({},Object(i["c"])(["options","attributes","projects","basic"]),{mainColor:{get:function(){return this.options.color.main},set:function(t){this.$store.dispatch("updateColor",{main:t}),this.$store.commit("SET_COLOR",{mainPreview:void 0})}},secondaryColor:{get:function(){return this.options.color.secondary},set:function(t){this.$store.dispatch("updateColor",{secondary:t}),this.$store.commit("SET_COLOR",{secondaryPreview:void 0})}},fontSize:{get:function(){return this.options.font.size},set:function(t){this.$store.dispatch("updateFont",{size:t})}},fontFamily:{get:function(){return this.options.font.family},set:function(t){this.$store.dispatch("updateFont",{family:t})}},showAvatar:{get:function(){return this.options.avatar.show},set:function(t){this.$store.dispatch("updateAvatar",{show:t})}},avatarShape:{get:function(){return this.options.avatar.roundness},set:function(t){this.$store.dispatch("updateAvatar",{roundness:t})}},avatarSize:{get:function(){return this.options.avatar.size},set:function(t){this.$store.dispatch("updateAvatar",{size:t})}},separator:{get:function(){return this.options.separator},set:function(t){this.$store.dispatch("updateSeparator",t)}},isImageSquare:function(){var t=document.createElement("img");return t.src=this.basic.image.link,t.width===t.height}}),watch:{"options.color.main":function(t){null===t&&this.$store.commit("SET_COLOR",{main:"#000000"})},"options.color.secondary":function(t){null===t&&this.$store.commit("SET_COLOR",{secondary:"#000000"})}},created:function(){this.$ga.page(this.$router)},mounted:function(){this.onCloseColorPicker()},methods:{onPreviewMainColor:function(t){this.$store.commit("SET_COLOR",{mainPreview:t})},onPreviewSecondaryColor:function(t){this.$store.commit("SET_COLOR",{secondaryPreview:t})},resetPreviewColor:function(){this.$store.commit("SET_COLOR",{mainPreview:void 0}),this.$store.commit("SET_COLOR",{secondaryPreview:void 0})},onCloseColorPicker:function(){var t=this;this.$refs.colorPicker.$children[0].$on("input",function(e){e||t.resetPreviewColor()}),this.$refs.colorPicker2.$children[0].$on("input",function(e){e||t.resetPreviewColor()})}}},l=s,c=(o("4511"),o("2877")),u=Object(c["a"])(l,a,r,!1,null,null,null);e["default"]=u.exports},"386b":function(t,e,o){var a=o("5ca1"),r=o("79e5"),n=o("be13"),i=/"/g,s=function(t,e,o,a){var r=String(n(t)),s="<"+e;return""!==o&&(s+=" "+o+'="'+String(a).replace(i,"&quot;")+'"'),s+">"+r+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(s),a(a.P+a.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",o)}},4511:function(t,e,o){"use strict";var a=o("7878"),r=o.n(a);r.a},7878:function(t,e,o){},b54a:function(t,e,o){"use strict";o("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})}}]);
//# sourceMappingURL=options.e00b3107.js.map