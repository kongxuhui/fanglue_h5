webpackJsonp([9],{"1Mxf":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=a("a3Yh"),n=a.n(s),c=(a("pIlK"),a("0Qqo")),l=a.n(c),p=(a("kMAb"),a("Occv")),o=a.n(p),d=(a("uGcx"),a("hwfq")),r=a.n(d),A=a("w6Jx"),v=a("ok73"),u=a("xnKZ"),m=a("lkey"),h=a("Pp2j"),y=a("IeB1"),G=a("XT51"),b=a("8e4C"),g={components:(i={appHeader:A.a,appFooter:v.a,appCell:u.a},n()(i,r.a.name,r.a),n()(i,o.a.name,o.a),n()(i,l.a.name,l.a),n()(i,"appButton",m.a),n()(i,"appIcon",h.a),n()(i,"appNoData",y.a),n()(i,"orderHead",G.a),i),data:function(){return{status:1,selected:"1",list:[],popupVisible:!1,order:{},consign:{},FOLLOWUP_STATE:b.c}},methods:{fetchData:function(){var t=this;this.$http.post({transCode:"TCSA01",type:"findAll",applyUserId:this.$store.state.user.userInfo.userId||"1",sourceType:this.type,feedbackStatus:this.selected,pageCount:1e3,currentPageNum:1}).then(function(e){t.list=e.consignApplyList||[]})},handleClick:function(t){this.$store.commit("setConsignApplyOrder",t),this.$router.push({name:"consignDetail",type:this.type})}},created:function(){this.type=this.$route.query.type||"1",1==this.type?this.consign={title:"运价查询单",state1:"询价中",state2:"已反馈"}:this.consign={title:"我的托运单",state1:"处理中",state2:"已反馈"},this.fetchData()},watch:{selected:function(){this.fetchData()}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("app-header",{attrs:{title:t.consign.title}}),t._v(" "),i("div",{staticClass:"main"},[i("mt-navbar",{staticStyle:{"margin-bottom":"10px"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"1"}},[t._v("处理中")]),t._v(" "),i("mt-tab-item",{attrs:{id:"2"}},[t._v("已反馈")])],1),t._v(" "),t._l(t.list,function(e){return i("div",{staticClass:"order-item"},[i("app-cell",[i("div",{staticClass:"gray"},[t._v("单号 : "+t._s(e.applyNo))]),t._v(" "),i("app-button",{attrs:{size:"tiny"}},[t._v(t._s(1==t.selected?"处理中":"已反馈"))])],1),t._v(" "),i("app-cell",[i("div",{staticClass:"location"},[i("span",[t._v(t._s(e.fromPlace))]),t._v(" "),i("img",{attrs:{src:a("F24m"),alt:""}}),t._v(" "),i("span",[t._v(t._s(e.toPlace))])]),t._v(" "),i("div",{staticClass:"gray"},[t._v(t._s(new Date(e.sendDate).Format("yyyy-MM-dd")))])]),t._v(" "),i("app-cell",{attrs:{align:"top"}},[i("div",{staticClass:"gray"},[i("div",[t._v("货物名称:"+t._s(e.productsName))])]),t._v(" "),i("div",{on:{click:function(a){t.handleClick(e)}}},[t._v("查看详情 >")])])],1)}),t._v(" "),t.list.length?t._e():i("app-no-data")],2),t._v(" "),i("keep-alive",[i("app-footer")],1)],1)},staticRenderFns:[]};var R=a("Z0/y")(g,C,!1,function(t){a("Z8vS")},"data-v-456a7d24",null);e.default=R.exports},F24m:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAASCAYAAAAQeC39AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA25pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5Nzg3OUI1ODFBMEFFODExQTQ2RURDNjBERjYwMjIzMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQzFGRjI0RjQ2Q0ExMUU4OTZGREY5RUVCQzExRjk0OCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQzFGRjI0RTQ2Q0ExMUU4OTZGREY5RUVCQzExRjk0OCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2ZDYyZjFjOS0zYWFlLTQ4NDMtYWFlMy0wM2M3MTA0ZjRiYzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTc4NzlCNTgxQTBBRTgxMUE0NkVEQzYwREY2MDIyMzIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7CSJgUAAABMklEQVR42tzVsUuCQRzG8XslXEKHwrlyCekPCFeXxqCXhgbXQimivSUIGlqkTUEIhSii2hodWhpSCBoigoIEaRACp0hTv2/ccNBbb73Tz3vgA74v3HEP3nvnuK6rBGYV52iHnSCiZGYCV5i2rVgNKdSxYFOxGzxjEpc4wLgNxQbYN9a4gTuswBnlYl7KeDKeZ3CEaywFrV1ysQ+s+7yfxxkesYmY3+AxFJXsdBD3eZ9EATuooqK/za843GMDZU8ecILTiLIrPXyi723FNeGL3UUiYKt62/AQDfMbKwkutfxLqaa+30q63LfDQ2qixl1m5h57OEb3p8GSi2UxZTy/YVv/Q72gwZKLbRm/L5DH618HSy02izm8I6cPhn9FarEMXrCI2zATSC3mHQpptMJOMBRgAFtKN3/X2uUFAAAAAElFTkSuQmCC"},Z8vS:function(t,e){}});
//# sourceMappingURL=9.f3967d78019c51f89a6c.js.map