$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.slider').slick({
		arrows: true,
		dots: true,
		slidesToShow:4,
		slidesToScroll:3,
		autoplay:true,
		autoplaySpeed: 5000,
		waitForAnimate:false,
		responsive:[
			{
				breakpoint:460,
				settings: {
					slidesToShow: 2,
					slidesToScroll:1 ,
				}
			}
		]
	});
});