(this["webpackJsonpsitigrid-app"]=this["webpackJsonpsitigrid-app"]||[]).push([[0],{231:function(e,t,n){e.exports=n(420)},416:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(11),l=n.n(r),c=n(461),i=n(460),m=n(34),u=n(35),s=n(39),p=n(40),E=n(457),h=n(458),d=n(452),g=n(459),f=n(189),b=n.n(f),y=n(462),D=n(465),k=n(463),v=n(42),C=n(70),O=n(454),A=n(456),M=n(453),j=n(455),w=n(451),H=n(424),Y=n(19),x=n(448),F=n(8),S=n(450),N=Object(x.a)({table:{minWidth:650}}),B=Object(F.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14}}}))(S.a),W=Object(F.a)((function(e){return{root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}}}))(w.a),G=n(44),K=n.n(G),T=function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={consumptions:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("inside Consumption componentDidMount");var e=[{consumptionAmount:75,consumptionDate:158858073e4},{consumptionAmount:50,consumptionDate:1588596856e3},{consumptionAmount:100,consumptionDate:1588686856e3},{consumptionAmount:80,consumptionDate:1588700199e3},{consumptionAmount:95,consumptionDate:1588711539e3}].map((function(e){return{key:e.consumptionDate,consumptionAmount:e.consumptionAmount,consumptionDate:e.consumptionDate,cost:.095*e.consumptionAmount}}));this.setState({consumptions:e})}},{key:"render",value:function(){var e=N,t=this.state.consumptions;if(!t)return console.log("Null consumptions"),null;console.log("length = "+t.length);var n=t.map((function(e){return o.a.createElement(W,{key:e.key},o.a.createElement(B,{component:"th",scope:"row"},K()(e.consumptionDate).format("DD/MM/YY HH:mm")),o.a.createElement(B,{align:"right"},e.consumptionAmount),o.a.createElement(B,{align:"right"},e.cost.toFixed(2)))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{variant:"caption"},o.a.createElement(Y.c,{height:350,width:"95%"},o.a.createElement(Y.b,{data:t,margin:{top:20,right:30,left:10,bottom:60}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorCons",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#8884d8",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#8884d8",stopOpacity:0}))),o.a.createElement(Y.e,{dataKey:"consumptionDate",name:"Time",domain:["auto","auto"],type:"number",tickFormatter:function(e){return K()(e).format("DD/MM/YY HH:mm")},angle:-45,textAnchor:"end"}),o.a.createElement(Y.f,null),o.a.createElement(Y.d,{labelFormatter:function(e){return K()(e).format("DD/MM/YY HH:mm")},formatter:function(e){return"\xa3"+e.toFixed(2)}}),o.a.createElement(Y.a,{type:"monotone",dataKey:"cost",stroke:"#8884d8",fillOpacity:1,fill:"url(#colorCons)"})))),o.a.createElement(M.a,{component:H.a},o.a.createElement(O.a,{className:e.table,"aria-label":"simple table"},o.a.createElement(j.a,null,o.a.createElement(w.a,null,o.a.createElement(B,null,"Date"),o.a.createElement(B,{align:"right"},"Electricity consumed (kWh)"),o.a.createElement(B,{align:"right"},"Cost (\xa3)"))),o.a.createElement(A.a,null,n))))}}]),n}(a.Component),J=function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={generations:[]},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("inside Generation componentDidMount");var e=[{generationAmount:65,generationDate:158858073e4},{generationAmount:75,generationDate:1588596856e3},{generationAmount:110,generationDate:1588686856e3},{generationAmount:70,generationDate:1588700199e3},{generationAmount:60,generationDate:1588710199e3},{generationAmount:45,generationDate:1588711539e3}].map((function(e){return{key:e.generationDate,generationAmount:e.generationAmount,generationDate:e.generationDate,revenue:.075*e.generationAmount}}));this.setState({generations:e})}},{key:"render",value:function(){var e=N,t=this.state.generations;if(!t)return console.log("Null generations"),null;console.log("length = "+t.length);var n=t.map((function(e){return o.a.createElement(W,{key:e.key},o.a.createElement(B,{component:"th",scope:"row"},K()(e.generationDate).format("DD/MM/YY HH:mm")),o.a.createElement(B,{align:"right"},e.generationAmount),o.a.createElement(B,{align:"right"},e.revenue.toFixed(2)))}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{variant:"caption"},o.a.createElement(Y.c,{height:350,width:"95%"},o.a.createElement(Y.b,{data:t,margin:{top:20,right:30,left:10,bottom:60}},o.a.createElement("defs",null,o.a.createElement("linearGradient",{id:"colorCons",x1:"0",y1:"0",x2:"0",y2:"1"},o.a.createElement("stop",{offset:"5%",stopColor:"#85ed7e",stopOpacity:.8}),o.a.createElement("stop",{offset:"95%",stopColor:"#85ed7e",stopOpacity:0}))),o.a.createElement(Y.e,{dataKey:"generationDate",name:"Time",domain:["auto","auto"],type:"number",tickFormatter:function(e){return K()(e).format("DD/MM/YY HH:mm")},angle:-45,textAnchor:"end"}),o.a.createElement(Y.f,null),o.a.createElement(Y.d,{labelFormatter:function(e){return K()(e).format("DD/MM/YY HH:mm")},formatter:function(e){return"\xa3"+e.toFixed(2)}}),o.a.createElement(Y.a,{type:"monotone",dataKey:"revenue",stroke:"#85ed7e",fillOpacity:1,fill:"url(#colorCons)"})))),o.a.createElement(M.a,{component:H.a},o.a.createElement(O.a,{className:e.table,"aria-label":"simple table"},o.a.createElement(j.a,null,o.a.createElement(w.a,null,o.a.createElement(B,null,"Date"),o.a.createElement(B,{align:"right"},"Electricity generated (kWh)"),o.a.createElement(B,{align:"right"},"Revenue (\xa3)"))),o.a.createElement(A.a,null,n))))}}]),n}(a.Component),z=(n(416),function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={customerName:""},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("componentDidMount called"),this.setState({customerName:"Ashley"})}},{key:"render",value:function(){return o.a.createElement(k.a,{m:4,component:"div",display:"block"},o.a.createElement(d.a,null,"Hello ",this.state.customerName))}}]),n}(a.Component)),I=function(e){Object(p.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={anchorEl:null},e.handleMenu=function(t){e.setState({anchorEl:t.currentTarget})},e.handleClose=function(){e.setState({anchorEl:null})},e}return Object(u.a)(n,[{key:"render",value:function(){this.props.classes;var e=this.state.anchorEl;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,null,o.a.createElement(E.a,{position:"static"},o.a.createElement(h.a,null,o.a.createElement(g.a,{edge:"start",color:"inherit","aria-label":"menu"},o.a.createElement(b.a,{onClick:this.handleMenu})),o.a.createElement(y.a,{id:"main-menu",anchorEl:e,keepMounted:!0,open:Boolean(e),onClose:this.handleClose},o.a.createElement(D.a,{onClick:this.handleClose,component:C.a,to:"/"},"Home"),o.a.createElement(D.a,{onClick:this.handleClose,component:C.a,to:"/consumption"},"Consumption"),o.a.createElement(D.a,{onClick:this.handleClose,component:C.a,to:"/generation"},"Generation"),o.a.createElement(D.a,{onClick:this.handleClose,component:C.a,to:"/blockchain"},"Blockchain")),o.a.createElement(d.a,{variant:"h6"},"Sitigrid Demo"))),o.a.createElement(z,null),o.a.createElement(v.d,null,o.a.createElement(v.b,{path:"/consumption"},o.a.createElement(k.a,{m:4},o.a.createElement(d.a,null,"Consumption records:"),o.a.createElement(T,null)),"]"),o.a.createElement(v.b,{path:"/generation"},o.a.createElement(k.a,{m:4},o.a.createElement(d.a,null,"Generation records:"),o.a.createElement(J,null)),"]"),o.a.createElement(v.b,{path:"/blockchain"},o.a.createElement(k.a,{m:4},o.a.createElement(d.a,null,"Blockchain: (TBD)")),"]"),o.a.createElement(v.b,{path:"/"},o.a.createElement(k.a,{m:4},o.a.createElement(d.a,null,"Welcome to Sitigrid!"),o.a.createElement(d.a,null,"Energy Sharing for a carbon Neutral Network")),"]"))))}}]),n}(a.Component),R=n(93),$=n(190),q=Object($.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:R.a.A400},background:{default:"#fff"}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,{theme:q},o.a.createElement(c.a,null),o.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[231,1,2]]]);
//# sourceMappingURL=main.019e4c8c.chunk.js.map