(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{343:function(e,n,t){"use strict";var r={name:"StoreBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},o=t(5),c=t(32),l=t.n(c),d=t(376),v=t(340),component=Object(o.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("section",{attrs:{id:this.id}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return n("store-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{VCol:d.a,VRow:v.a})},345:function(e,n,t){"use strict";var r=t(353);n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:e.reduce((function(e,n){var o=Object(r.upperFirst)(Object(r.camelCase)(n));return e["StoreSection".concat(o)]=function(){return t(346)("./".concat(o,".vue"))},e}),{}),data:function(){return{sections:e}}}}},346:function(e,n,t){var map={"./Channels.vue":[356,1,43],"./ChannelsList.vue":[355,1,2,35],"./Hero.vue":[357,40],"./MembersList.vue":[354,1,2,3,6,31],"./MenuAdmin.vue":[358,1,2,5,29],"./OnlineMenu.vue":[359,1,2,5,30],"./PricingPlan.vue":[360,39],"./Setup.vue":[361,28],"./SubscribeIndex.vue":[362,2,33,44]};function r(e){if(!t.o(map,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(map)},r.id=346,e.exports=r},616:function(e,n,t){"use strict";t.r(n);var r=t(343),o=t(345),c={layout:"store",name:"MenuAdmin",auth:!0,metaInfo:{title:"Menu Management"},extends:r.a,mixins:[Object(o.a)(["menu-admin"])],props:{id:{type:String,default:"menu-admin"}}},l=t(5),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);