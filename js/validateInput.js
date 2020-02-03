$(".form-control").blur(function() {
	$(this).parent("div").addClass("was-validated");
});
$(document).ready(function() {
	var msg="";
	var elements = document.getElementsByTagName("INPUT");

	for (var i = 0; i < elements.length; i++) {
	   elements[i].oninvalid = function(e) {
	    	e.target.setCustomValidity("Polje ne može biti prazno");
	   }
	    
	   elements[i].oninput = function(e) {
	        e.target.setCustomValidity(msg);
	    };
	} 
});