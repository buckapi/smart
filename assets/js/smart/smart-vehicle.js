/*! For license information please see smart-vehicle.js.LICENSE.txt */
"use strict";document.addEventListener("DOMContentLoaded",(function(){swipetounlock(),window.randomScalingFactor=function(){return Math.round(20*Math.random())};var a=document.getElementById("summarychart").getContext("2d"),t=a.createLinearGradient(0,0,0,180);t.addColorStop(0,"rgba(79, 199, 255, 0.15)"),t.addColorStop(1,"rgba(255, 253, 186, 0)");var r={type:"line",data:{labels:["1 Feb","2 Fb","3 Feb","5 Feb","6 Feb","7 Feb","8 Feb"],datasets:[{label:"# of hours",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],radius:0,backgroundColor:t,borderColor:"rgb(16, 159, 221)",borderWidth:1,fill:!0,tension:.5}]},options:{animation:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{display:!1,beginAtZero:!0},x:{grid:{display:!1,color:"#aaaaaa"},ticks:{color:"#aaaaaa"},display:!1,beginAtZero:!0}}}},o=new Chart(a,r);setInterval((function(){r.data.datasets.forEach((function(a){a.data=a.data.map((function(){return randomScalingFactor()}))})),o.update()}),3e3),new ProgressBar.Circle(circleprogressgreen1,{color:"rgb(0, 177, 74)",strokeWidth:10,trailWidth:10,easing:"easeInOut",trailColor:"rgba(0, 177, 74, 0.15)",duration:1400,text:{autoStyleContainer:!1},from:{color:"rgba(0, 177, 74, 1)",width:10},to:{color:"rgba(0, 177, 74, 1)",width:10},step:function(a,t){t.path.setAttribute("stroke",a.color),t.path.setAttribute("stroke-width",a.width);Math.round(100*t.value())}}).animate(.65)}));