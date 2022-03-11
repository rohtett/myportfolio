//"use strict";
// initialise tooltips from popper.js 
window.onload=function(){
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	var projects= document.querySelectorAll(".projects");
	for (let i=0; i < projects.length; i++) {
		projects[i].addEventListener("mousedown", function() {
			var backgroundImage= "url('static/media/"+this.firstElementChild.id+".png')";
			document.getElementById("output").style.backgroundImage= backgroundImage;
			collapse= this.firstElementChild.id
			$(".collapse").collapse("show");
		});
	}
};