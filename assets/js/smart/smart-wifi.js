/*! For license information please see smart-wifi.js.LICENSE.txt */
"use strict";document.addEventListener("DOMContentLoaded",(function(){window.randomScalingFactor=function(){return Math.round(20*Math.random())};var a=document.getElementById("summarychart").getContext("2d"),r=a.createLinearGradient(0,0,0,180);r.addColorStop(0,"rgba(0, 168, 133, 0.95)"),r.addColorStop(1,"rgba(252, 208, 30, 0)");var o=a.createLinearGradient(0,0,0,180);o.addColorStop(0,"rgba(0, 168, 133, 0.65)"),o.addColorStop(.4,"rgba(0, 168, 133, 0.25)"),o.addColorStop(1,"rgba(252, 208, 30, 0)");var n={type:"line",data:{labels:["1 Feb","2 Fb","3 Feb","5 Feb","6 Feb","7 Feb","8 Feb"],datasets:[{label:"# of hours",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],radius:0,backgroundColor:r,borderColor:"rgba(0, 168, 133, 1)",borderWidth:0,fill:!0,tension:.5},{label:"# of hours prev",data:[randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()],radius:0,backgroundColor:o,borderColor:"rgba(252, 208, 30, 1)",borderWidth:0,fill:!0,tension:.5}]},options:{animation:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{y:{display:!1,beginAtZero:!0},x:{grid:{display:!1},display:!0,beginAtZero:!0}}}};new Chart(a,n)}));