$(document).ready(function(){
	$(".scrollToAnchor").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - 115}, 1500);
		
	});
});

const getHeightFirst = $('#firstTextfield').css('height');
const getHeightSecond = $('#secondTextfield').css('height');

if(getHeightFirst >= getHeightSecond) {
	$(".learn-info__list-text").css({"height":getHeightFirst});
} else {
	$(".learn-info__list-text").css({"height":getHeightSecond});
}



$(".glide__slide--active").css({"margin": "0"});
