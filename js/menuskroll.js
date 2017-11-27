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
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
    $(".FAQ-form__wrapper input:checked").prop('selected',false);
		var id  = $(this).attr('href'), top;

		//узнаем высоту от начала страницы до блока на который ссылается якорь

		top = $(id).offset().top;
    id = id + " + input"
    console.log("ID", id);

    $(id).prop('checked',true);

    top = top - 50;
    console.log("top",top);
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});
