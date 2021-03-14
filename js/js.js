$('.gallery__row').slick({
	arrows: false,
	dots: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
    dotsClass: "custom-dots",

    responsive: [
	{
	breakpoint: 1300,
		settings: {
			slidesToShow: 4
		}
	},
	{
	breakpoint: 1024,
		settings: {
			slidesToShow: 3
		}
	},
	{
	breakpoint: 700,
		settings: {
			slidesToShow: 2,
			dots: false
		}
	},
	{
	breakpoint: 480,
		settings: {
			slidesToShow: 1,
			dots: false
		}
	}
  ]
});
