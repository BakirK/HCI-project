$(".form-control").blur(function() {
	$(this).parent("div").addClass("was-validated");
});
$(document).ready(function() {
	var msg="";	
	var elements = document.getElementsByClassName("form-control");
	for (var i = 0; i < elements.length; i++) {
	   elements[i].oninvalid = function(e) {
	    	e.target.setCustomValidity("Polje mora biti ispravno");
	   }
	    
	   elements[i].oninput = function(e) {
	        e.target.setCustomValidity(msg);
	    };
	} 
});

$('form').submit(function (e) {
	e.preventDefault();
});

$("#sendNewsLetter").click(function(e){
	let flag = true;
	$(".newsInput").each(function(i, v) {
		if($(this).is(":invalid")) {
			flag = false;
		}
	});
	if(flag) {
		$('#newsForm').hide();
		$('#newsLetterSent').show();
		$('.newsInput').val("");
	}
});
