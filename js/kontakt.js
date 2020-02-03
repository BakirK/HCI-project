$("#sendMsg").click(function(e){
	let flag = true;
	$(".msgInput").each(function(i, v) {
		if($(this).is(":invalid")) {
			flag = false;
		}
	});
	if(flag) {
		$('#msgSent').show();		
	}
});

$('#contactForm').submit(function () {
 return false;
});