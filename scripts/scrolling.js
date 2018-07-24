$(function () {
	$(window).on("load resize", function () {
		$(".fill-screen").css("height", window.innerHeight);
	});
	
	//$('a.page-scroll').bind('click', function(event) {
      //  var $anchor = $(this);
        //$('html, body').stop().animate({
          //  scrollTop: $($anchor.attr('href')).offset().top
        //}, 1500, 'easeInOutExpo');
        ///event.preventDefault();
    //});
	
	//$('body').scollspy({
		//target: '.navbar-fixed-top',
		//offset: 100
	//});
	
	// initialize WOW element animation
	new WOW().init();
	
});