$(document).ready(function(){
          
	$(window).scroll(function(){

    	if($(window).scrollTop()>100){
    		$('.navbar').removeClass('bg-transparent');
    		$('.navbar').removeClass('navbar-light');
      		$('.navbar').addClass('bg-dark');
      		$('.navbar').addClass('navbar-dark');
      		$('.navbar').addClass('fixed-top');
    	} else{
      		$('.navbar').removeClass('bg-dark');
      		$('.navbar').removeClass('navbar-dark');
    		$('.navbar').addClass('bg-transparent');
    		$('.navbar').addClass('navbar-light');
    	}
	});
});