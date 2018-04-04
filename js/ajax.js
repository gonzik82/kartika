function callorder(form){
    $(this).submit(function(e){
  //отменяем стандартное действие при отправке формы
    e.preventDefault();
    });
    var $form = $(form); // jquery объект формы
    var data = $form.serialize(); //собираем данные с формы в виде querystring
    var m_method=$form.attr('method');
    console.log(m_method);
    var m_action=$form.attr('action');
    m_action='php/send.php';
    console.log(m_action);
    var m_data=$form.serialize();
    console.log(m_data);
    $.ajax({
    type: m_method,
    url: m_action,
    data: m_data,
    success: function(result){
    $('#test_form').html(result);
    }
    });

  $(".thanks-call").addClass("thanks-call--show");
  $(".thanks-call__wrapper").addClass("thanks-call__wrapper--show");
}
