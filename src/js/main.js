window.onload = function(){

	Waves.init({
	duration: 800,
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
		delay: 100,
		time: 2500
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
$(document).ready(function(){
//sv_settings
var selector='.forstom__wrap , .forstom__title , .forstom__text , .personal__textwrap , .personal__text , .personal__title , section , .title , .info__text , .uslugi__text , .phone__center , h2 span,  .container,  .container *, body, .head__title strong , .head__title h1, head, .head__title h2, footer, .head__video, .phone__top span';
    //-------------
    $('.fs-outer button').click(function(){
        $('body').css('font-size',$(this).css('font-size'));
        $.cookie('font-size',$(this).attr('id'));
        $('.fs-outer button').removeClass('active');
        $(this).addClass("active");

    });
    
    $('.cs-outer button').click(function(){
        $(selector).css('color',$(this).css('color'));
        $(selector).css('background',$(this).css('background'));
        $('.head__title strong , .head__title h1, .head__title h2, .head__title span').css('background', 'none');
        $.cookie('cs',$(this).attr('id'));
        $('.cs-outer button').removeClass('active');
        $(this).addClass("active");

    });
    
    $('.img-outer button').click(function(){
        if ($.cookie('img')!='on'){
            $('img').css('display','none');
            $.cookie('img','on');
			$('.personal__img').css('display', 'none');
			$('.forstom__top').css('display','none');
			$('.personal__textwrap').css({
				'width':'100%',
				'min-height':'100%'
			});
			$('.personal__text').css('height', 'auto');
            $('#img-onoff-text').text(' Включить');
            $(this).addClass("active");
        } else
        {
            $('img').css('display','block');
            $.cookie('img','off');
			$('.personal__img.active').css('display', 'block');
			$('.personal__textwrap').css('width' ,'63%');
			$('.forstom__top').css('dislpay' , 'block');
            $('#img-onoff-text').text(' Выключить');
            $(this).removeClass("active");
        }
    });
    
    if ($.cookie('sv_on')=='true'){
        $('#sv_on').addClass('active');
        $('#sv_settings').css('display' , 'block');
        $('.section_forstom').removeClass('section_forstom');
		$('.head__video video').css('display', 'none');
		$('.head__video').removeClass('head__video');
		$(selector).css('line-height', 1.1);
		$(selector).css('color', '#000');
		$(selector).css('background','#fff');
		$('.section_reviews').removeClass('section_reviews');
        if ($.cookie('font-size')!==null){
          $('#'+$.cookie('font-size')).click();
        }

        if ($.cookie('cs')!==null){
          $('#'+$.cookie('cs')).click();
        }
		else {
			$(selector).css('color', '#000');
			$(selector).css('background','#fff');
		}
        
    }
    
    
    $('#sv_on').click(
    function(){
		$(selector).css('color', '#000');
		$(selector).css('background','#fff');
    if ($.cookie('sv_on')!='true'){
    $.cookie('sv_on', 'true');
		$(selector).css('color', '#000');
		$(selector).css('background','#fff');
    if ($.cookie('font-size')=="null"){
       $('.fs-n').click(); 
       
    }
    if ($.cookie('cs')=="null"){

       $('.cs-bw').click();
		$(selector).css('color', '#000');
		$(selector).css('background','#fff');
    }
    }
    else
    {
       $.cookie('sv_on', 'false'); 
    }
    location.reload();
    }
    );
    
});