var step = "680";
var list, сlassSection, direction, btn, obj, sumStep,сlassSectionTrue;
var i = 0;


function move(obj, сlassSection, direction, shift, sumStep) {
  btn = document.querySelector(сlassSection).querySelectorAll("button");
  list = document.querySelector(сlassSection).querySelectorAll("ul");
  step=shift;
  if (сlassSectionTrue!=сlassSection) {
    сlassSectionTrue=сlassSection;
    i=0;
    $(list).css({
      transform: "translateX(0)"
    });
  };



  if (obj == btn[0]) {
    i = i - 1;
    moveleft();


  } else {
    i = i + 1;
    moveright();

  }
  if ($(btn[0]).prop('disabled') && (i >= 1)) {
    $(btn[0]).removeAttr('disabled')
  };
  if (i <= 0) {
    $(btn[0]).attr('disabled', 'disabled');
  };
  if (i >= (sumStep - 1)) {
    $(btn[1]).attr('disabled', 'disabled');
  };

  if ($(btn[1]).prop('disabled') && (i < (sumStep-1))) {
    $(btn[1]).removeAttr('disabled')
  };

}

function moveleft() {
  shift = step * i;
  $(list).css({
    transform: "translateX(-" + shift + "px)",
    transition: ".6s transform"
  });
}

function moveright() {
  shift = step * i;
  $(list).css({
    transform: "translateX(-" + shift + "px)",
    transition: ".6s transform"
  });
}
