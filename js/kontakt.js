$("#sendMsg").click(function(e){
	let flag = true;
	$(".msgInput").each(function(i, v) {
		if($(this).is(":invalid")) {
			flag = false;
		}
	});
	if(flag) {
		$('#msgSent').show();
		$('#formInputs').hide();
		/*$('.msgInput').val("");
		$("#contactForm").removeClass("was-validated");
		$(".msgInput").parent("div").removeClass("was-validated");*/
	}
});
