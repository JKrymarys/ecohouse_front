(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(85)},48:function(e,t,a){},49:function(e,t,a){},79:function(e,t){},80:function(e,t){},81:function(e,t){},82:function(e,t){},83:function(e,t){},84:function(e,t){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(38),l=a.n(i),c=(a(48),a(7)),u=a(8),s=a(10),o=a(9),m=a(11),d=(a(49),a(95)),p=a(24),h=a(6),f=a.n(h),b=a(14),v=a(12),E=a.n(v),y="https://api.openweathermap.org/data/2.5/weather?id=3093133&appid=3c786bff59e49394d1d9b34220351622&units=metric",g="https://us-central1-ecohouse-9136c.cloudfunctions.net/getAllHouseDataEntries",O="https://us-central1-ecohouse-9136c.cloudfunctions.net/getAllWeatherEntries";function j(){return(j=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.get(y).then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={currentCity:"-",currentTemp:0,currentHumidity:0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){return j.apply(this,arguments)})().then(function(t){e.setState({currentCity:t.name,currentTemp:t.main.temp,currentHumidity:t.main.humidity,currentPressure:t.main.pressure})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(d.a,{className:e.infoPaper},r.a.createElement("h4",null," Weather forecast for : ",this.state.currentCity," "),r.a.createElement("h4",null," Current temperature : ",this.state.currentTemp," "),r.a.createElement("h4",null," Current pressure : ",this.state.currentPressure," hPa "),r.a.createElement("h4",null,"Humidity in ",this.state.currentCity," : ",this.state.currentHumidity," %"))}}]),t}(r.a.Component),k=Object(p.a)(function(e){return{infoPaper:{textAlign:"center",marginTop:20,width:"100%"}}})(w),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={time:new Date},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",null,"EcoHouse - automation system"),r.a.createElement("h2",null," ",this.state.time.toLocaleTimeString()))}}]),t}(r.a.Component),C=a(96),T=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"createResult",value:function(e){if(null===e)return"-";var t=Math.round(e);return 1===t?"OPEN WINDOWS TO HEAT HOUSE [".concat(e,"]"):0===t?"CLOSE WINDOWS TO REDUCE COLLING OF HOUSE [".concat(e,"]"):void 0}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.isModelTrained,n=e.predictionData,i=e.predictionResult,l=e.lastPredictionTime,c=e.finalLoss;return r.a.createElement(d.a,{className:t.infoPaper},r.a.createElement(C.a,{container:!0,direction:"column"},r.a.createElement(C.a,{item:!0,className:t.setMargin},r.a.createElement("h4",null,"Machine Learning Component")),r.a.createElement(C.a,{item:!0,className:t.setMargin},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Weather forecast at:"),r.a.createElement("td",null,n.lastWeatherResult.datetime)),r.a.createElement("tr",null,r.a.createElement("td",null,"Temp:"),r.a.createElement("td",null,n.lastWeatherResult.temp)),r.a.createElement("tr",null,r.a.createElement("td",null,"Humidity"),r.a.createElement("td",null," ",n.lastWeatherResult.humidity)),r.a.createElement("tr",null,r.a.createElement("td",null,"Pressure:"),r.a.createElement("td",null,n.lastWeatherResult.pressure)),r.a.createElement("tr",null,r.a.createElement("td",null,"House data at "),r.a.createElement("td",null,n.lastHomedataResult.datetime)),r.a.createElement("tr",null,r.a.createElement("td",null,"Temp:"),r.a.createElement("td",null,n.lastHomedataResult.temp)),r.a.createElement("tr",null,r.a.createElement("td",null,"Pressure:"),r.a.createElement("td",null," ",n.lastHomedataResult.pressure)),r.a.createElement("tr",null,r.a.createElement("td",null,"Final Loss of the Model is: "),r.a.createElement("td",null,c))))),r.a.createElement(C.a,{item:!0,className:t.setMargin},r.a.createElement("div",null,"[",l,"] Result is:",r.a.createElement("b",null,this.createResult(i))))),r.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",display:a?"none":"block",top:0,left:0,zIndex:1e3,background:"rgba(255,255,255,0.8)"}},r.a.createElement("p",{style:{position:"fixed",display:this.props.isModelTrained?"none":"block",top:"50%",left:"50%",zIndex:1e3}},"System is learning now :) ",r.a.createElement("br",null)," Please give it a moment or two.")))}}]),t}(r.a.Component),H=Object(p.a)(function(e){return{infoPaper:{width:"100%"},setMargin:{margin:20}}})(T),x=a(41),R=a.n(x);function W(){return(W=Object(b.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return E.a.get(O)},t=function(){return E.a.get(g)},e.abrupt("return",E.a.all([a(),t()]).then(E.a.spread(function(e,t){return{weather:e.data[0],housedata:t.data[0]}})).then(function(e){var t=e.weather;return{tempHouseChartData:e.housedata.reduce(function(e,t){return e[t.datetime.value]=t.temp_house,e},{}),tempWeatherChartData:t.reduce(function(e,t){return e[t.datetime.value]=t.temp,e},{})}}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var P=null,I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).createChart=function(){P=new R.a("historicalDataChart",{type:"line",data:{labels:[],datasets:[]},options:{animation:!1,scales:{xAxes:[{type:"time",distribution:"linear",time:{round:"minute"},scaleLabel:{display:!0,labelString:"Date"}}]}}})},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.createChart(),this.getAndSetHistoricalData(),this.updateChartTimer()}},{key:"getAndSetHistoricalData",value:function(){return function(){return W.apply(this,arguments)}().then(function(e){var t=e.tempHouseChartData,a=e.tempWeatherChartData;P.data.datasets=[{label:"Temp House",fill:!1,data:Object.values(t),backgroundColor:"rgba(255, 69, 0, 0.5)",borderColor:"rgba(255, 69, 0, 0.8)"},{label:"Temp Weather",fill:!1,data:Object.values(a),backgroundColor:"rgba(135,206,250, 0.5)",borderColor:"rgba(135,206,250, 0.8)"}],P.data.labels=Object.keys(t),P.update()})}},{key:"updateChartTimer",value:function(){var e=this;this.timerID=setInterval(function(){console.log("chartObject",P),e.getAndSetHistoricalData()},6e4)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(d.a,{className:e.infoPaper},r.a.createElement("canvas",{id:"historicalDataChart"}))}}]),t}(r.a.Component),S=Object(p.a)(function(e){return{infoPaper:{textAlign:"center",marginTop:20,width:"100%"}}})(I),L=a(15),M=100,A=L.b(),N={optimizer:L.d.sgd(.1),loss:"meanSquaredError"},U={verbose:!0,epochs:5};function z(){return _.apply(this,arguments)}function _(){return(_=Object(b.a)(f.a.mark(function e(){var t,a,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<M)){e.next=9;break}return e.next=4,A.fit(F,J,U);case 4:n=e.sent,a===M-1&&(t=n.history.loss[0]);case 6:a++,e.next=1;break;case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var B=function(e){var t=[parseInt(e.lastHomedataResult.temp),parseInt(23),parseInt(e.lastWeatherResult.temp)],a=L.c([t]);return A.predict(a).data().then(function(t){return{predictionData:e,result:t,lastPredictionTime:(new Date).toLocaleString()}})},F=L.c([[22,23,25],[22,23,25],[21,23,28],[15,23,23],[16,23,24],[17,23,25],[23,23,28],[23,23,28],[23,23,28],[24,23,31],[23,23,25],[26,23,28],[12,23,17],[11,23,25],[19,23,28],[15,23,22],[13,23,19],[15,23,28],[23,23,19],[23,23,15],[23,23,18],[23,23,11],[23,23,10],[23,23,8]]),J=L.c([[1],[1],[1],[1],[1],[1],[0],[0],[0],[0],[0],[0],[1],[1],[1],[1],[1],[1],[0],[0],[0],[0],[0],[0]]),q=L.a.dense({units:4,inputShape:[3],activation:"sigmoid"}),G=L.a.dense({units:1,activation:"sigmoid"});A.add(q),A.add(G),A.compile(N);var $=function(){var e=Object(b.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return E.a.get("https://us-central1-ecohouse-9136c.cloudfunctions.net/getLastHouseDataEntry")},t=function(){return E.a.get("https://us-central1-ecohouse-9136c.cloudfunctions.net/getLastWeatherEntry")},e.abrupt("return",E.a.all([t(),a()]).then(E.a.spread(function(e,t){return{lastWeatherResult:{datetime:e.data[0][0].datetime.value,temp:e.data[0][0].temp,humidity:e.data[0][0].humidity,pressure:e.data[0][0].pressure},lastHomedataResult:{datetime:t.data[0][0].datetime.value,temp:t.data[0][0].temp_house,pressure:t.data[0][0].pressure_house}}})).then(function(e){return B(e)}));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();function K(){return(K=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",z().then(function(e){return{isTrainingComplete:!0,finalLoss:e}}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={isModelTrained:!1,predictionResult:null,predictionData:{lastWeatherResult:{datetime:null,temp:null,humidity:null,pressure:null},lastHomedataResult:{datetime:null,temp:null,pressure:null}},lastPredictionTime:null,finalLoss:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"componentDidMount",value:function(){var e=this;(function(){return K.apply(this,arguments)})().then(function(t){console.log(t),e.setState({isModelTrained:!0,finalLoss:t.finalLoss})}).then(this.timerID=setInterval(function(){return $().then(function(t){e.setState({predictionData:t.predictionData,predictionResult:t.result,lastPredictionTime:t.lastPredictionTime})})},6e3))}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.isModelTrained,n=t.predictionData,i=t.predictionResult,l=t.lastPredictionTime,c=t.finalLoss;return r.a.createElement(C.a,{container:!0,className:e.container,justify:"flex-end",spacing:5},r.a.createElement(C.a,{item:!0,xs:7,spacing:5},r.a.createElement(S,null),r.a.createElement("br",null),r.a.createElement(H,{isModelTrained:a,predictionData:n,predictionResult:i,lastPredictionTime:l,finalLoss:c})),r.a.createElement(C.a,{item:!0,xs:5},r.a.createElement(C.a,{container:!0,direction:"column",justify:"flex-end",spacing:5},r.a.createElement(D,null),r.a.createElement(k,null))))}}]),t}(r.a.Component),V=Object(p.a)(function(e){return{container:{}}})(Q),X=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(V,null," "))}}]),t}(r.a.Component),Y=Object(p.a)(function(e){return{root:{padding:24,height:"100%"}}})(X);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.fafa60b6.chunk.js.map