var link = document.querySelector(".main-header__contact-btn");
var index;
var popup = document.querySelector(".request-call");
var popupThanks = document.querySelector(".thanks-call");
var user = popup.querySelector("[name=user-name]");
var closes = popup.querySelector(".btn-close"),
  close;

var closesThanks = popupThanks.querySelector(".btn-close");
var btnClosesThanks = popupThanks.querySelector(".btn--thanks-call");


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("request-call--show");
  $(".request-call__wrapper").addClass("request-call__wrapper--show");
  user.focus();

});

$(document).click( function(event){
	if( $(event.target).closest(".request-call__wrapper").length )
	return;
  if ($(".request-call").hasClass("request-call--show")) {
    $(".request-call").removeClass("request-call--show");
  };
	event.stopPropagation();
});

$('.main-header__contact-btn').click( function() {
		return false;
	});

closes.addEventListener("click", function(event) {
  event.preventDefault();
  if (popup.classList.contains("request-call--show")) {
    popup.classList.remove("request-call--show");
  }
});



closesThanks.addEventListener("click", function(event) {
  event.preventDefault();
    if (popupThanks.classList.contains("thanks-call--show")) {
      popupThanks.classList.remove("thanks-call--show");
  }
});

btnClosesThanks.addEventListener("click", function(event) {
  event.preventDefault();
    if (popupThanks.classList.contains("thanks-call--show")) {
      popupThanks.classList.remove("thanks-call--show");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("request-call--show")) {
      popup.classList.remove("request-call--show");
    }
    if (popupThanks.classList.contains("thanks-call--show")) {
        popupThanks.classList.remove("thanks-call--show");
    }
  }
});
