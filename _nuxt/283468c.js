(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{344:function(e,n,t){"use strict";var r={name:"StoreBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},o=t(5),c=t(32),l=t.n(c),v=t(374),d=t(340),component=Object(o.a)(r,(function(){var e=this.$createElement,n=this._self._c||e;return n("section",{attrs:{id:this.id}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return n("store-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{VCol:v.a,VRow:d.a})},346:function(e,n,t){"use strict";var r=t(360);n.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:e.reduce((function(e,n){var o=Object(r.upperFirst)(Object(r.camelCase)(n));return e["StoreSection".concat(o)]=function(){return t(347)("./".concat(o,".vue"))},e}),{}),data:function(){return{sections:e}}}}},347:function(e,n,t){var map={"./Channels.vue":[366,1,41],"./ChannelsList.vue":[364,1,3,32],"./Hero.vue":[367,37],"./MembersList.vue":[363,1,3,2,5,27],"./MenuAdmin.vue":[365,1,3,29,38],"./PricingPlan.vue":[368,36],"./Setup.vue":[369,26],"./SubscribeIndex.vue":[370,3,30,42]};function r(e){if(!t.o(map,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=map[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(map)},r.id=347,e.exports=r},607:function(e,n,t){"use strict";t.r(n);var r=t(344),o=t(346),c={layout:"store",name:"channels",metaInfo:{title:"IPTV list of channels"},extends:r.a,mixins:[Object(o.a)(["channels-list"])],props:{id:{type:String,default:"channels"}}},l=t(5),component=Object(l.a)(c,void 0,void 0,!1,null,null,null);n.default=component.exports}}]);