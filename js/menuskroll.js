$(document).ready(function(){
	$(".main-navigation").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;


      top = top - 50;

		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});

$(document).ready(function(){

	$(".advantages-btn").on("click","a", function (event) {
    event.preventDefault();
		var id  = $(this).attr('href'),top;
    $(id + " + input").prop('checked',true);
		if (id == "#free-shipping" ) {
      top = 4619;
    };
    if (id == "#lifetime-warranty" ) {
      top = 5209;
    };
    if (id == "#indent-seal" ) {
      top = 5139;
    };
    $('body,html').animate({scrollTop: top}, 1000);
	});
});
