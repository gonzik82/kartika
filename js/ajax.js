function callorder(form){
    $(this).submit(function(e){
  //отменяем стандартное действие при отправке формы
    e.preventDefault();
    });
    var $form = $(form); // jquery объект формы
    var data = $form.serialize(); //собираем данные с формы в виде querystring
    var m_method=$form.attr('method');
    var n;
    n=0;
    console.log(m_method);
    n=n+1;
    console.log(n);
    //получаем адрес скрипта на сервере, куда нужно отправить форму
    var m_action=$form.attr('action');
    console.log(m_action);
    //получаем данные, введенные пользователем в формате input1=value1&input2=value2...,
    //то есть в стандартном формате передачи данных формы
    var m_data=$form.serialize();
    console.log(m_data);
    // $.ajax({
    // type: m_method,
    // url: m_action,
    // data: m_data,
    // success: function(result){
    // $('#test_form').html(result);
    // }
    // });

  $(".thanks-call").addClass("thanks-call--show");
  $(".thanks-call__wrapper").addClass("thanks-call__wrapper--show");
}
