(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"0d1f":function(e,t,a){"use strict";a("fcb1")},6372:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),n={class:"stock-dashboard-cards"},c={class:"stock-dashboard-item"};function r(e,t,a,r,i,s){var l=Object(o["resolveComponent"])("statistic-card"),d=Object(o["resolveComponent"])("high-chart"),p=Object(o["resolveComponent"])("item-tab");return Object(o["openBlock"])(),Object(o["createBlock"])(o["Fragment"],null,[Object(o["createVNode"])("div",n,[Object(o["createVNode"])(l,{title:"EARNINGS (MONTHLY)",value:"$40,000",icon:"fa fa-calendar-o"}),Object(o["createVNode"])(l,{title:"EARNINGS (ANNUAL)",value:"$215,000",icon:"fa fa-calendar-o",styleType:"success"}),Object(o["createVNode"])(l,{title:"TASKS",value:"50%",icon:"fa fa-calendar-o",styleType:"warning"}),Object(o["createVNode"])(l,{title:"PENDING REQUESTS",value:"18",icon:"fa fa-calendar-o",styleType:"danger"})]),Object(o["createVNode"])("div",c,[Object(o["createVNode"])(p,{title:"Earnings Overview",style:{width:"70%"}},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{options:e.earningChartOptions},null,8,["options"])]})),_:1}),Object(o["createVNode"])(p,{title:"Revenue Sources"},{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(d,{options:e.revenueChartOptions},null,8,["options"])]})),_:1})])],64)}var i=a("734a"),s=a("6c14"),l=a("7b70"),d=Object(o["defineComponent"])({components:{statisticCard:i["a"],highChart:s["a"],itemTab:l["a"]},setup:function(e,t){t.attrs,t.slots,t.emit;var a={chart:{type:"spline"},title:{text:""},series:[{data:[43934,52503,57177,69658,97031,119931,137133,154175]}]},o={chart:{plotBackgroundColor:null,plotBorderWidth:null,plotShadow:!1,type:"pie",spacing:[40,0,40,0]},title:{text:null},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{name:"Stock",colorByPoint:!0,innerSize:"50%",data:[["000001",13],["300057",26.8],["600138",12.8]]}]};return{earningChartOptions:a,revenueChartOptions:o}}});a("0d1f");d.render=r;t["default"]=d},fcb1:function(e,t,a){}}]);
//# sourceMappingURL=dashboard.0bb71596.js.map