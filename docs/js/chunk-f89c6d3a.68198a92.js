(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f89c6d3a","chunk-35ed7bf5","chunk-63a58b94"],{"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),o=n("6821"),a=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?l:function(t,e){if(t=o(t),e=a(e,!0),c)try{return l(t,e)}catch(n){}if(s(t,e))return i(!r.f.call(t,e),t[e])}},"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),i=n("d2c8"),o="includes";r(r.P+r.F*n("5147")(o),"String",{includes:function(t){return!!~i(this,t,o).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"386b":function(t,e,n){var r=n("5ca1"),i=n("79e5"),o=n("be13"),a=/"/g,s=function(t,e,n,r){var i=String(o(t)),s="<"+e;return""!==n&&(s+=" "+n+'="'+String(r).replace(a,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(s),r(r.P+r.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(i){}}return!0}},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var o,a=e.constructor;return a!==n&&"function"==typeof a&&(o=a.prototype)!==n.prototype&&r(o)&&i&&i(t,o),t}},6762:function(t,e,n){"use strict";var r=n("5ca1"),i=n("c366")(!0);r(r.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"70fd":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{"line-height":t.options.font.size+"px"}},[n("table",{attrs:{width:"320"}},[n("tr",[n("td",[n("table",{style:{width:"320px","border-top":"1px solid gray"},attrs:{cellpadding:"0",cellspacing:"0"}},[t._m(0),t.showAvatar?n("tr",[n("td",{attrs:{rowspan:"4",valign:"top"}},[n("avatar",{attrs:{"show-avatar":t.showAvatar,src:t.image,size:t.options.avatar.size,roundness:t.options.avatar.roundness}})],1)]):t._e(),n("tr",[n("td",{directives:[{name:"align",rawName:"v-align",value:t.top,expression:"top"}]},[n("div",{style:[t.fontBase,{fontSize:t.options.font.size+2+"px",color:t.options.color.mainPreview||t.options.color.main,fontWeight:700}]},[t._v(t._s(t.mainByName["Full name"])+"\n              ")])])]),n("tr",[n("td",{attrs:{width:"100%",valign:"center"}},[n("div",{style:t.fontBase},[t._v("\n                "+t._s(t.mainByName["Job title"])+"\n                "),t._m(1)])])]),n("tr",[n("td",[n("ul",{style:{padding:0,"list-style":"none","margin-top":"5px"}},[t.phoneNumber?n("li",{staticStyle:{width:"48%",float:"left",padding:"0",margin:"0"}},[n("div",{style:t.fontBase},[n("b",[t._v(t._s(t.phoneCountry)+" ")]),n("a",{style:{"text-decoration":"none",color:t.options.color.secondaryPreview||t.options.color.secondary},attrs:{href:"tel:"+t.phoneNumber}},[t._v(t._s(t.phoneNumber))])])]):t._e(),t.mainByName["Website"]?n("li",{staticStyle:{width:"48%",float:"left",padding:"0",margin:"0"}},[n("div",{style:t.fontBase},[n("a",{style:{"text-decoration":"none",color:t.options.color.secondaryPreview||t.options.color.secondary},attrs:{href:t.mainByName["Website"]}},[t._v("\n                      "+t._s(t.mainByName["Website"])+"\n                    ")])])]):t._e(),t._l(t.otherFields,function(e,r){return n("li",{key:e.id,staticStyle:{width:"48%",float:"left",padding:"0",margin:"0"}},["link"===e.type?n("div",{style:Object.assign({},t.fontBase)},[t._v("\n                    "+t._s(t.$index)+"\n                    "),n("a",{style:{"text-decoration":"none",color:t.options.color.secondaryPreview||t.options.color.secondary},attrs:{href:e.value}},[t._v(t._s(e.name))])]):t._e()])})],2)])])]),t.isAdded("footnote")?n("table",{staticStyle:{width:"320px","border-top":"1px solid #D0D0D0","margin-top":"15px"},attrs:{cellpadding:"0",cellspacing:"0"}},[t._m(2),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("div",{style:t.fontBase,domProps:{innerHTML:t._s(t.addons.footnote)}})])])]):t._e(),t.isAdded("interactivePitch")?n("table",{staticStyle:{width:"320px"}},[n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("div",{style:t.fontBase},[n("a",{style:{"text-decoration":"none",color:t.options.color.secondaryPreview||t.options.color.secondary},attrs:{href:t.addons.interactivePitch.link}},[t._v(t._s(t.addons.interactivePitch.text))]),t._v(" \n                "),n("img",{staticStyle:{position:"relative",top:"4px"},attrs:{width:"14",src:"https://d17i6isrtkqat8.cloudfront.net/rocket.png"}})])])])]):t._e(),t._m(3)])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{height:"12px"}},[n("div",{staticStyle:{"line-height":"1px","font-size":"1px"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v("RELAYTO"),n("span",{staticStyle:{color:"rgb(255,121,26)"}},[t._v("/ ")]),n("span",{staticStyle:{"font-size":"7px"}},[t._v("DOCUMENT EXPERIENCE")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{attrs:{height:"12px"}},[n("div",{staticStyle:{"line-height":"1px","font-size":"1px"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticStyle:{width:"320px","border-top":"1px solid #D0D0D0","margin-top":"15px"}},[n("tr",[n("td",{attrs:{height:"12px"}},[n("div",{staticStyle:{"line-height":"1px","font-size":"1px"}})])]),n("tr",[n("td",{staticStyle:{"text-align":"center"}},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://relayto.com"}},[n("img",{attrs:{width:"180",src:"https://d17i6isrtkqat8.cloudfront.net/relaytologo.gif"}})])])])])}],o=(n("cadf"),n("551c"),n("097d"),n("f86e")),a=n("8595"),s={components:{Avatar:a["default"]},extends:o["default"],data:function(){return{filterFields:["Full name","Job title","Company","Email","Website","Phone","Link","Link label"]}},computed:{phoneCountry:function(){var t=this.mainByName["Phone"],e=/^(\w\w)(.+)$/,n="";if(e.test(t)){var r=e.exec(t);n=r[1]}return n},phoneNumber:function(){var t=this.mainByName["Phone"],e=/^(\w\w)(.+)$/,n=t;if(e.test(n)){var r=e.exec(t);n=r[2].trim()}return n}}},c=s,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports},8595:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showAvatar?n("div",{staticStyle:{"margin-right":"10px"},style:t.computedStyle},[t.src?n("img",{style:{width:t.size+"px","border-radius":t.roundness+"px"},attrs:{src:t.src,alt:"avatar"}}):t._e()]):t._e()},i=[],o=(n("b54a"),n("be94")),a=(n("c5f6"),n("2f62")),s={name:"Avatar",props:{showAvatar:{type:Boolean,required:!0},src:{type:String,required:!0},size:{type:Number,required:!0},roundness:{type:Number,required:!0}},computed:Object(o["a"])({},Object(a["c"])(["basic"]),{computedStyle:function(){var t={width:this.size+"px",borderRadius:this.roundness+"px"};return this.basic.image.link||(t.height=this.size+"px",t.background="#eee"),t}})},c=s,l=n("2877"),u=Object(l["a"])(c,r,i,!1,null,null,null);e["default"]=u.exports},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),o=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return o(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:o}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),o=n("79e5"),a=n("fdef"),s="["+a+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(t,e,n){var i={},s=o(function(){return!!a[t]()||c[t]()!=c}),l=i[t]=s?e(d):a[t];n&&(i[n]=l),r(r.P+r.F*s,"String",i)},d=f.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},aae3:function(t,e,n){var r=n("d3f4"),i=n("2d95"),o=n("2b4c")("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==i(t))}},b54a:function(t,e,n){"use strict";n("386b")("link",function(t){return function(e){return t(this,"a","href",e)}})},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),o=n("2d95"),a=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",h=r[p],v=h,m=h.prototype,y=o(n("2aeb")(m))==p,b="trim"in String.prototype,g=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var n,r,i,o=e.charCodeAt(0);if(43===o||45===o){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var a,c=e.slice(2),l=0,u=c.length;l<u;l++)if(a=c.charCodeAt(l),a<48||a>i)return NaN;return parseInt(c,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(y?c(function(){m.valueOf.call(n)}):o(n)!=p)?a(new v(g(e)),n,h):g(e)};for(var _,x=n("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)i(v,_=x[w])&&!i(h,_)&&f(h,_,u(v,_));h.prototype=m,m.constructor=h,n("2aba")(r,p,h)}},d2c8:function(t,e,n){var r=n("aae3"),i=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(i(t))}},f86e:function(t,e,n){"use strict";n.r(e);n("20d6"),n("7f7f"),n("6762"),n("2fdb"),n("b54a");var r=n("be94"),i=n("d135"),o=n("2f62");e["default"]={data:function(){return{filterFields:["Full name","Job title","Company"],s3url:"https://d17i6isrtkqat8.cloudfront.net"}},computed:Object(r["a"])({},Object(o["c"])(["basic","options","addons","socials","template"]),{image:function(){return this.basic.image.link},isEmpty:function(){return this.basic.fields.every(function(t){return 0===t.value.length})},mainFields:function(){var t=this;return this.isEmpty?i["a"].basicPlaceholder.filter(function(e){return t.filterFields.includes(e.name)}):this.basic.fields.filter(function(e){return t.filterFields.includes(e.name)})},mainByName:function(){return this.mainFields.reduce(function(t,e){return t[e.name]=e.value,t},{})},otherFields:function(){var t=this;return this.isEmpty?i["a"].basicPlaceholder.filter(function(e){return!t.filterFields.includes(e.name)}):this.basic.fields.filter(function(e){return!t.filterFields.includes(e.name)})},showAvatar:function(){return this.options.avatar.show},fontBase:function(){return{fontSize:"".concat(this.options.font.size,"px"),fontFamily:this.options.font.family,color:this.options.color.main,"line-height":"".concat(this.options.font.size+3,"px")}}}),methods:{formatLink:function(t){return/^https?/.test(t)?t:"http://".concat(t)},isAdded:function(t){return this.addons.installed.findIndex(function(e){return e.name===t})>-1}}}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-f89c6d3a.68198a92.js.map