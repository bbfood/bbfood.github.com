(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{344:function(t,e,n){"use strict";var o={name:"StoreBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},r=n(5),c=n(32),l=n.n(c),v=n(358),d=n(339),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{attrs:{id:this.id}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return e("store-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VCol:v.a,VRow:d.a})},347:function(t,e,n){"use strict";var o=n(360);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:t.reduce((function(t,e){var r=Object(o.upperFirst)(Object(o.camelCase)(e));return t["StoreSection".concat(r)]=function(){return n(348)("./".concat(r,".vue"))},t}),{}),data:function(){return{sections:t}}}}},348:function(t,e,n){var map={"./Channels.vue":[363,1,35],"./ChannelsList.vue":[361,1,4,28],"./Hero.vue":[364,31],"./PricingPlan.vue":[365,30],"./Setup.vue":[366,24],"./SubscribeIndex.vue":[367,4,25,36]};function o(t){if(!n.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(map)},o.id=348,t.exports=o},507:function(t,e,n){"use strict";n.r(e);var o=n(344),r=n(347),c={layout:"store",name:"Setup",metaInfo:{title:"How to setup"},extends:o.a,mixins:[Object(r.a)(["setup"])],props:{id:{type:String,default:"setup"}}},l=n(5),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);e.default=component.exports}}]);