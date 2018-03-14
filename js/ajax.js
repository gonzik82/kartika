var popupthenks = document.querySelector(".thanks-call");

// function callorder() {
//   var msg = $('#promo-page__form').serialize();
//   console.log(msg);
//     $.ajax({
//     type: 'POST',
//     url: 'php/send.php',
//     data: msg,
//     success: function(data) {
//       $('#results').html(data);
//     },
//     error: function(xhr, str) {
//       alert('Возникла ошибка: ' + xhr.responseCode);
//     }
//   });
//
//   $(".thanks-call").addClass("thanks-call--show");
//   $(".thanks-call__wrapper").addClass("thanks-call__wrapper--show");
// }


function callorder(){
  $(this).submit(function(e){
  //отменяем стандартное действие при отправке формы
    e.preventDefault();
    //берем из формы метод передачи данных
    var m_method=$(this).attr('method');

    //получаем адрес скрипта на сервере, куда нужно отправить форму
    var m_action=$(this).attr('action');
    console.log(m_action);
    //получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
    //то есть в стандартном формате передачи данных формы
    var m_data=$(this).serialize();
    console.log(m_data);
    $.ajax({
    type: m_method,
    url: m_action,
    data: m_data,
    success: function(result){
    $('#test_form').html(result);
    }
    });
  });
  $(".thanks-call").addClass("thanks-call--show");
  $(".thanks-call__wrapper").addClass("thanks-call__wrapper--show");
}
