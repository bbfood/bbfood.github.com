(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(e,t,r){"use strict";r(20),r(8),r(68),r(40),r(41);var n=r(1),c=(r(37),r(193),r(38),r(6),r(4),r(12),r(21),r(190),r(0)),o=r(61),l=r(3);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=["sm","md","lg","xl"],v=m.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),h=m.reduce((function(e,t){return e["offset"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),y=m.reduce((function(e,t){return e["order"+Object(l.u)(t)]={type:[String,Number],default:null},e}),{}),O={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(y)};function j(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var c=t.replace(e,"");n+="-".concat(c)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,c=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var e,t;for(t in d=[],O)O[t].forEach((function(e){var n=r[e],c=j(t,e,n);c&&d.push(c)}));var c=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!c||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),w.set(l,d)}(),e(r.tag,Object(o.a)(data,{class:d}),c)}})},362:function(e,t,r){"use strict";r(49);var n=r(7),c=(r(21),{name:"DemoAsyncImage",props:{imageId:{type:Number},size:{type:String,default:"200"},height:{type:String,default:"200"},contain:{type:Boolean,default:!0}},data:function(){return{imageSrc:""}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==e.imageId){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$axios.$get("/w/image/".concat(e.imageId,"?size=").concat(e.size));case 4:r=t.sent,e.imageSrc=r;case 6:case"end":return t.stop()}}),t)})))()}}),o=r(5),l=r(32),f=r.n(l),d=r(331),m=r(130),v=r(339),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-img",e._g(e._b({attrs:{src:e.imageSrc,height:e.height,contain:e.contain},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey darken-5"}})],1)]},proxy:!0}])},"v-img",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,null,null);t.a=component.exports;f()(component,{VImg:d.a,VProgressCircular:m.a,VRow:v.a})},404:function(e,t,r){"use strict";r(341);var n=r(3);t.a=Object(n.g)("spacer","div","v-spacer")},498:function(e,t,r){"use strict";r.r(t);var n={name:"DemoCategory",components:{"async-img":r(362).a},data:function(){return{members:[]}},mounted:function(){var e=this;e.$axios.get("/w/album/"+e.$route.params.cat).then((function(t){e.members=t.data.ids}))},methods:{hello:function(){}}},c=r(5),o=r(32),l=r.n(o),f=r(328),d=r(368),m=r(343),v=r(358),h=r(355),y=r(327),O=r(339),j=r(404),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"fill-height fill-width",attrs:{justify:"center"}},[r("h1",[e._v(e._s(e.$route.params.cat))]),r("v-row",e._l(e.members,(function(t,n){return r("v-col",{key:t,staticClass:"d-flex child-flex"},[r("v-card",[r("async-img",{attrs:{imageId:t,size:"250",height:"250"}}),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-heart")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-bookmark")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-share-variant")])],1)],1)],1)],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:f.a,VCard:d.a,VCardActions:m.a,VCol:v.a,VContainer:h.a,VIcon:y.a,VRow:O.a,VSpacer:j.a})}}]);