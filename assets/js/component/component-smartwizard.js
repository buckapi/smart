/*! For license information please see component-smartwizard.js.LICENSE.txt */
"use strict";document.addEventListener("DOMContentLoaded",(function(){$("#smartwizard").smartWizard({toolbar:{extraHtml:'<a class="btn btn-outline-accent float-start" href="#">Skip</a><a class="btn btn-theme finish-btn" style="display:none" href="#">Finish</a>'}}),$("#smartwizard").on("showStep",(function(t,a,n,s,e){"last"===e?$(".finish-btn").show():$(".finish-btn").hide()})),$("#smartwizard2").smartWizard({theme:"dots",toolbar:{extraHtml:'<a class="btn btn-outline-accent float-start" href="smart-dashboard.html">Skip</a><a class="btn btn-theme finish-btn" style="display:none" href="smart-dashboard.html">Finish</a>'}})}));