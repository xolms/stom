window.onload = function(){

	Waves.init({
	duration: 500,
	delay: 200
	});
};

jQuery(document).ready(function($) {
	$('.input_phone').mask("+7(999) 999-9999");

	$('.formstom__slider').owlCarousel({
		nav: true,
		navText: ['', ''],
		loop: true,
		dots: false,
		responsive : {
			0: {
				items: 1
			},
			1024: {
				items: 2,
				margin: 20
			},
			1280: {
				items: 3,
				margin: 40
			}

		}
	});
	$('.scroll').jScrollPane({
		contentWidth: '0px'
	});

	

	Waves.attach(".buttons", [
		"waves-button",
		"waves-float",
		"waves-light"
	]);

	$('.info__number').counterUp({
		delay: 1,
		time: 100
	});
	 //Открытие модального окна
		$('.modal-open').click(function (e) {
				e.preventDefault();
				$('.modal-form').fadeIn();
		});
		//Закрытие модальных окон
		$(window).keydown(function (event) {
				if(event.keyCode == 27) {
						$('.modal-form').fadeOut();
				}
		});
		$(document).mouseup(function (e) {
				var elem = $('.modal-form');
				var elems = $('.modal-form__wrapper');
				if (!elems.is(e.target)
						&& elems.has(e.target).length === 0) {
						$('.modal-form').fadeOut();
				}
		});



		$('.popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});



		$('.personal__slider').owlCarousel({
		nav: true,
		navText: ['', ''],
		dots: false, 
		responsive : {
			0: {
				items: 3,
				margin: 10
			},
			768: {
				items: 4,
				margin: 20
			},
			1024: {
				items: 6,
				margin: 20
			},
			1280: {
				items: 8,
				margin: 20
			}

		}
	});
	$('.personal__slider .item').click(function(event) {
		event.preventDefault();
		if($(this).hasClass('personal_button')) {

		}
		else{ 
			$('.personal__slider .item').removeClass('personal_button');
			$(this).addClass('personal_button');
			var item = $(this).attr('data-item');
			$('.personal__img').removeClass('active');
			$('.personal__img').eq(item).addClass('active');
			$('.personal__textitem').removeClass('active');
			$('.personal__textitem').eq(item).addClass('active');
		}
	});	
	video_resize();
	if($(document).width() > 1200) {
		$('.personal__img').css('height', $('.personal__textwrap').outerHeight());
	}
	
});

function video_resize() {
 var doc = $(document).width();
 var video = $('.head__video video').width();
 console.log(doc);
 console.log(video);
 if(doc < 1920) {
 	var left = (doc - video)/2;
 	console.log(left);
 	$('.head__video video').css('left', left+'px');
 }
}