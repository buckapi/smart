/*! For license information please see smart-energy.js.LICENSE.txt */
"use strict";document.addEventListener("DOMContentLoaded",(function(){window.randomScalingFactor=function(){return Math.round(20*Math.random())};var a=document.getElementById("summarychart").getContext("2d"),r=a.createLinearGradient(0,0,0,180);r.addColorStop(0,"rgba(0, 168, 133, 0.95)"),r.addColorStop(1,"rgba(252, 208, 30, 0)");var t=a.createLinearGradient(0,0,0,180);t.addColorStop(0,"rgba(0, 168, 133, 0.65)"),t.addColorStop(.4,"rgba(0, 168, 133, 0.25)"),t.addColorStop(1,"rgba(252, 208, 30, 0)");var o={type:"bar",data:{labels:["1 Feb","2 Fb","3 Feb","5 Feb","6 Feb","7 Feb","8 Feb","9 Feb","10 Feb"],datasets:[{label:"# of hours",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],radius:0,backgroundColor:r,borderColor:"rgba(0, 168, 133, 1)",borderWidth:0,fill:!0,tension:.5},{label:"# of hours prev",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],radius:0,backgroundColor:t,borderColor:"rgba(252, 208, 30, 1)",borderWidth:0,fill:!0,tension:.5}]},options:{animation:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{display:!1,beginAtZero:!0},x:{grid:{display:!1},display:!0,beginAtZero:!0}}}},n=new Chart(a,o);setInterval((function(){o.data.datasets.forEach((function(a){a.data=a.data.map((function(){return randomScalingFactor()}))})),n.update()}),3e3),new ProgressBar.Circle(circleprogressblue1,{color:"rgba(0, 73, 232, 1)",strokeWidth:10,trailWidth:10,easing:"easeInOut",trailColor:"rgba(0, 73, 232, 0.15)",duration:1400,text:{autoStyleContainer:!1},from:{color:"rgba(0, 73, 232, 1)",width:10},to:{color:"rgba(0, 73, 232, 1)",width:10},step:function(a,r){r.path.setAttribute("stroke",a.color),r.path.setAttribute("stroke-width",a.width);Math.round(100*r.value())}}).animate(.85),new ProgressBar.Circle(circleprogressgreen1,{color:"rgba(252, 122, 30, 1)",strokeWidth:10,trailWidth:10,easing:"easeInOut",trailColor:"rgba(252, 122, 30, 0.15)",duration:1400,text:{autoStyleContainer:!1},from:{color:"rgba(252, 122, 30, 1)",width:10},to:{color:"rgba(252, 122, 30, 1)",width:10},step:function(a,r){r.path.setAttribute("stroke",a.color),r.path.setAttribute("stroke-width",a.width)}}).animate(.65)}));