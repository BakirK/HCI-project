$(document).ready(function(){
          
	$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#navbar').addClass('header-scrolled');
    } else {
      $('#navbar').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#navbar').addClass('navbar-scrolled');
  }
});