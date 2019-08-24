(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,n){e.exports=n(85)},48:function(e,t,n){},49:function(e,t,n){},79:function(e,t){},80:function(e,t){},81:function(e,t){},82:function(e,t){},83:function(e,t){},84:function(e,t){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(38),l=n.n(i),u=(n(48),n(7)),c=n(8),s=n(10),o=n(9),m=n(11),d=(n(49),n(95)),p=n(24),h=n(6),f=n.n(h),b=n(14),v=n(12),E=n.n(v),y="https://api.openweathermap.org/data/2.5/weather?id=3093133&appid=3c786bff59e49394d1d9b34220351622&units=metric",O="https://us-central1-ecohouse-9136c.cloudfunctions.net/getAllHouseDataEntries",j="https://us-central1-ecohouse-9136c.cloudfunctions.net/getAllWeatherEntries";function g(){return(g=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",E.a.get(y).then(function(e){return e.data}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={currentCity:"-",currentTemp:0,currentHumidity:0},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){return g.apply(this,arguments)})().then(function(t){console.log("result",t),e.setState(function(e){return{currentCity:t.name,currentTemp:t.main.temp,currentHumidity:t.main.humidity,currentPressure:t.main.pressure}})})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(d.a,{className:e.infoPaper},r.a.createElement("h4",null," Weather forecast for : ",this.state.currentCity," "),r.a.createElement("h4",null," Current temperature : ",this.state.currentTemp," "),r.a.createElement("h4",null," Current pressure : ",this.state.currentPressure," hPa "),r.a.createElement("h4",null,"Humidity in ",this.state.currentCity," : ",this.state.currentHumidity," %"))}}]),t}(r.a.Component),k=Object(p.a)(function(e){return{infoPaper:{textAlign:"center",margin:20,width:"100%"}}})(w),D=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={time:new Date},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({time:new Date})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Have a nice day!"),r.a.createElement("h2",null,"It is ",this.state.time.toLocaleTimeString()))}}]),t}(r.a.Component),C=n(96),T=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"createResult",value:function(e){return 1===e?"OPEN WINDOWS TO HEAT HOUSE":0===e?"CLOSE WINDOWS TO REDUCE COLLING OF HOUSE":"-"}},{key:"render",value:function(){var e=this.props,t=e.isModelTrained,n=e.predictionData,a=e.predictionResult,i=e.lastPredictionTime,l=e.finalLoss;return r.a.createElement("div",null,r.a.createElement(C.a,{container:!0,direction:"column"},r.a.createElement(C.a,{item:!0},r.a.createElement("h4",null,"Machine Learning Component")),r.a.createElement(C.a,{item:!0},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Weather forecast at:"),r.a.createElement("td",null,n.lastWeatherResult.datetime)),r.a.createElement("tr",null,r.a.createElement("td",null,"Temp:"),r.a.createElement("td",null,n.lastWeatherResult.temp)),r.a.createElement("tr",null,r.a.createElement("td",null,"Humidity"),r.a.createElement("td",null," ",n.lastWeatherResult.humidity)),r.a.createElement("tr",null,r.a.createElement("td",null,"Pressure:"),r.a.createElement("td",null,n.lastWeatherResult.pressure)),r.a.createElement("tr",null,r.a.createElement("td",null,"House data at "),r.a.createElement("td",null,n.lastHomedataResult.datetime)),r.a.createElement("tr",null,r.a.createElement("td",null,"Temp:"),r.a.createElement("td",null,n.lastHomedataResult.temp)),r.a.createElement("tr",null,r.a.createElement("td",null,"Pressure:"),r.a.createElement("td",null," ",n.lastHomedataResult.pressure)),r.a.createElement("tr",null,r.a.createElement("td",null,"Final Loss of the Model is: "),r.a.createElement("td",null,l))))),r.a.createElement(C.a,{item:!0},r.a.createElement("div",null,"[",i,"] Result is:",r.a.createElement("b",null," ",this.createResult(a))))),r.a.createElement("div",{style:{position:"fixed",width:"100%",height:"100%",display:t?"none":"block",top:0,left:0,zIndex:1e3,background:"rgba(255,255,255,0.8)"}},r.a.createElement("p",{style:{position:"fixed",display:this.props.isModelTrained?"none":"block",top:"50%",left:"50%",zIndex:1e3}},"System is learning now :) ",r.a.createElement("br",null)," Please give it a moment or two.")))}}]),t}(r.a.Component),H=n(41),R=n.n(H);function W(){return(W=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){return E.a.get(j)},t=function(){return E.a.get(O)},e.abrupt("return",E.a.all([n(),t()]).then(E.a.spread(function(e,t){return{weather:e.data[0],housedata:t.data[0]}})).then(function(e){var t=e.weather,n=e.housedata.reduce(function(e,t){return e[t.datetime.value]=t.temp_house,e},{});return{tempHouseChartData:t.reduce(function(e,t){return e[t.datetime.value]=t.temp,e},{}),tempWeatherChartData:n}}));case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var x=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).createChart=function(e,t){new R.a("historicalDataChart",{type:"scatter",data:{labels:Object.keys(e),datasets:[{label:"Temp House",fill:!1,data:Object.values(e),backgroundColor:"red",borderColor:"red"},{label:"Temp Weather",fill:!1,data:Object.values(t),backgroundColor:"blue",borderColor:"blue"}]},options:{scales:{xAxes:[{type:"time",distribution:"linear",time:{round:"minute"},scaleLabel:{display:!0,labelString:"Date"}}]}}})},n.state={},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){return W.apply(this,arguments)})().then(function(t){console.log("GetHistoricalData",t);var n=t.tempHouseChartData,a=t.tempWeatherChartData;e.createChart(n,a)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{id:"historicalDataChart",width:"300",height:"150"}))}}]),t}(r.a.Component),I=Object(p.a)(function(e){return{}})(x),L=n(15),P=100,S=L.b(),M={optimizer:L.d.sgd(.1),loss:"meanSquaredError"},N={verbose:!0,epochs:5};function A(){return U.apply(this,arguments)}function U(){return(U=Object(b.a)(f.a.mark(function e(){var t,n,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=0;case 1:if(!(n<P)){e.next=9;break}return e.next=4,S.fit(_,B,N);case 4:a=e.sent,n===P-1&&(t=a.history.loss[0]);case 6:n++,e.next=1;break;case 9:return e.abrupt("return",t);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}var z=function(e){var t=[parseInt(e.lastHomedataResult.temp),parseInt(23),parseInt(e.lastWeatherResult.temp)],n=L.c([t]);return S.predict(n).data().then(function(t){return{predictionData:e,result:Math.round(t),lastPredictionTime:(new Date).toLocaleString()}})},_=L.c([[22,23,25],[22,23,25],[21,23,28],[15,23,23],[16,23,24],[17,23,25],[23,23,28],[23,23,28],[23,23,28],[24,23,31],[23,23,25],[26,23,28],[12,23,17],[11,23,25],[19,23,28],[15,23,22],[13,23,19],[15,23,28],[23,23,19],[23,23,15],[23,23,18],[23,23,11],[23,23,10],[23,23,8]]),B=L.c([[1],[1],[1],[1],[1],[1],[0],[0],[0],[0],[0],[0],[1],[1],[1],[1],[1],[1],[0],[0],[0],[0],[0],[0]]),F=L.a.dense({units:4,inputShape:[3],activation:"sigmoid"}),G=L.a.dense({units:1,activation:"sigmoid"});S.add(F),S.add(G),S.compile(M);var J=function(){var e=Object(b.a)(f.a.mark(function e(){var t,n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){return E.a.get("https://us-central1-ecohouse-9136c.cloudfunctions.net/getLastHouseDataEntry")},t=function(){return E.a.get("https://us-central1-ecohouse-9136c.cloudfunctions.net/getLastWeatherEntry")},e.abrupt("return",E.a.all([t(),n()]).then(E.a.spread(function(e,t){return{lastWeatherResult:{datetime:e.data[0][0].datetime.value,temp:e.data[0][0].temp,humidity:e.data[0][0].humidity,pressure:e.data[0][0].pressure},lastHomedataResult:{datetime:t.data[0][0].datetime.value,temp:t.data[0][0].temp_house,pressure:t.data[0][0].pressure_house}}})).then(function(e){return z(e)}));case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();function q(){return(q=Object(b.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",A().then(function(e){return{isTrainingComplete:!0,finalLoss:e}}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var $=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(o.a)(t).call(this,e))).state={isModelTrained:!1,predictionResult:{},predictionData:{lastWeatherResult:{datetime:null,temp:null,humidity:null,pressure:null},lastHomedataResult:{datetime:null,temp:null,pressure:null}},lastPredictionTime:null,finalLoss:null},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"componentDidMount",value:function(){var e=this;(function(){return q.apply(this,arguments)})().then(function(t){console.log(t),e.setState({isModelTrained:!0,finalLoss:t.finalLoss})}).then(this.timerID=setInterval(function(){return J().then(function(t){return e.setState({predictionData:t.predictionData,predictionResult:t.result,lastPredictionTime:t.lastPredictionTime})})},3e4))}},{key:"render",value:function(){var e=this.props.classes,t=this.state,n=t.isModelTrained,a=t.predictionData,i=t.predictionResult,l=t.lastPredictionTime,u=t.finalLoss;return r.a.createElement(C.a,{container:!0,className:e.container,justify:"flex-end",spacing:5},r.a.createElement(C.a,{item:!0,xs:7},r.a.createElement(I,null),r.a.createElement(T,{isModelTrained:n,predictionData:a,predictionResult:i,lastPredictionTime:l,finalLoss:u})),r.a.createElement(C.a,{item:!0,xs:5},r.a.createElement(C.a,{container:!0,direction:"column",justify:"flex-end",spacing:5},r.a.createElement(D,null),r.a.createElement(k,null))))}}]),t}(r.a.Component),K=Object(p.a)(function(e){return{container:{}}})($),Q=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(K,null," "))}}]),t}(r.a.Component),V=Object(p.a)(function(e){return{root:{padding:24}}})(Q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.ee10d38f.chunk.js.map