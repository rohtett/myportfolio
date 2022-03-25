//"use strict";
// initialise tooltips from popper.js 
window.onload=function(){
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	})
	var projects= document.querySelectorAll(".projects");
	projects.forEach(input => {
		function show(input) {
			var current=("."+input.firstElementChild.id)
			$(current).show();
		}
		input.addEventListener("mousedown", function() {
			var backgroundImage= "url('static/media/"+input.firstElementChild.id+".png')";
			document.getElementById("output").style.backgroundImage= backgroundImage;
			collapse= input.firstElementChild.id
			$(".collapse").hide();
			show(input);
		});
	});
};