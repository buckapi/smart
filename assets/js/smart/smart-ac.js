/*! For license information please see smart-ac.js.LICENSE.txt */
"use strict";document.addEventListener("DOMContentLoaded",(function(){new ProgressBar.SemiCircle(circleprogressblue,{startAngle:-Math.PI/4*3,color:"#015EC2",strokeWidth:10,trailWidth:10,easing:"easeInOut",trailColor:"rgba(66, 157, 255, 0.15)",duration:1400,text:{autoStyleContainer:!1},from:{color:"#015EC2",width:10},to:{color:"#015EC2",width:10},step:function(t,e){e.path.setAttribute("stroke",t.color),e.path.setAttribute("stroke-width",t.width);Math.round(100*e.value())}}).animate(.65);const t=document.querySelector(".tempsetbtn"),e=document.getElementById("templive"),o=document.getElementById("tempset");t.addEventListener("click",(function(){setTimeout((function(){e.textContent=o.value}),100)}))}));