(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{344:function(e,t,n){"use strict";var o={name:"StoreBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},r=n(5),c=n(32),l=n.n(c),v=n(358),d=n(339),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:this.id}},[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return t("store-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null);t.a=component.exports;l()(component,{VCol:v.a,VRow:d.a})},347:function(e,t,n){"use strict";var o=n(360);t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:e.reduce((function(e,t){var r=Object(o.upperFirst)(Object(o.camelCase)(t));return e["StoreSection".concat(r)]=function(){return n(348)("./".concat(r,".vue"))},e}),{}),data:function(){return{sections:e}}}}},348:function(e,t,n){var map={"./Channels.vue":[363,1,35],"./ChannelsList.vue":[361,1,4,28],"./Hero.vue":[364,31],"./PricingPlan.vue":[365,30],"./Setup.vue":[366,24],"./SubscribeIndex.vue":[367,4,25,36]};function o(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(map)},o.id=348,e.exports=o},509:function(e,t,n){"use strict";n.r(t);var o=n(344),r=n(347),c={layout:"store",name:"StoreHome",auth:!1,metaInfo:{title:"Home"},extends:o.a,mixins:[Object(r.a)(["hero"])],props:{id:{type:String,default:"home"}}},l=n(5),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);t.default=component.exports}}]);