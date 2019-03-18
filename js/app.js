$(window).on('load', function() {
	setTimeout(function() {
		$('#preloader').fadeOut('slow');
		$('body').css("overflow", "visible");
	}, 1000);
});

$(document).ready(function() {
	console.log('%cSketched, Coded and Deployed in less than 3 hours, by Mohamed Adel @d3vma!', 'background: #000; color: #00FF00; font-size: 15px;');
	console.log('http://madel.me', '||', 'http://twitter.com/d3vma', '||', 'http://linkedin.com/in/d3vma');
	$('.portfolio-screen-wrapper').height($('.portfolio-wrapper').outerHeight(true));

	$(".owl-carousel").owlCarousel({
		center: true,
	    items:1,
	    loop:true,
	    margin:10,
	    autoplay: true,
	    autoplayTimeout: 3000,
	    responsive:{
	        600:{
	            items: 1
	        }
	    }
	});
});