var link = document.querySelector(".main-header__contact-btn");
var index;
var popup = document.querySelector(".request-call");
var user = popup.querySelector("[name=request-call-user-name]");
var closes = popup.querySelector(".btn-close"),
  close;


link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("request-call--show");
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


window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("request-call--show")) {
      popup.classList.remove("request-call--show");
    }
  }
});
