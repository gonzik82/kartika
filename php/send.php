<?php

$UserName="Тестовый Клиент цууцу";
$UserPhone="+7983 256 98 5";
$UserMail="sdfsdf@sd df.ru";
$UserMess="!!Новая заявка с сайта!!";
$ManagerID=50; //50 id Елфимов Павел Николаевич Менеджер для планироания задачи
$EventType=1004; //1004 id цели созвониться
$SourceId=253; //253 id Источник Привлечения Лендинг
$PositionID=50; //50 id Должности ЛПР при необходимости поставить другую
$user_pass = "info@t-kartika.ru:ma0eh12k";
$host_api = "https://kardexpress22.mawisoft.ru/integration/set";

$UserName = $_POST['user-name'];
$UserPhone = $_POST['phone-number'];
$UserMail = $_POST['user-mail'];


  echo "<br>POST<br>";
  foreach($_POST as $key => $value)
  {
     echo "\$_POST[".$key."] = ".$value."<br>";
  }

$UserName=str_replace (' ','_',$UserName);
$UserMess=str_replace (' ','_',$UserMess);
$UserPhone=str_replace (' ','-',$UserPhone);
$UserMail=str_replace (' ','',$UserMail);




function RequestServer($host_api, $user_pass, $param ){
  $curl = curl_init($host_api);
  curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
  curl_setopt($curl, CURLOPT_USERPWD, $user_pass);
  // get запрос
  curl_setopt($curl, CURLOPT_URL, $host_api . $param);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $result = curl_exec($curl);
  // вывести результат
  var_dump($result);
  return $result;
}

$AddUsr= "/client?object.name=$UserName&sourceId=$SourceId&typeCode=phone&info=$UserPhone&typeCode=email&info=$UserMail";

$Request = RequestServer($host_api, $user_pass, $AddUsr);

$AddComent ="/event?object.ownerName=client&object.ownerId=$Request&object.eventTypeId=$EventType&object.userId=$ManagerID&object.message=$UserMess&object.important";

RequestServer($host_api, $user_pass, $AddComent);

$AddPerson = "/person?object.clientId=$Request&object.name=$UserName&object.categoryId=$PositionID&typeCode=phone&info=$UserPhone&typeCode=email&info=$UserMail";

RequestServer($host_api, $user_pass, $AddPerson);

// $content = file_get_contents('http://kardexpress22.mawisoft.ru/integration/set/event?object.ownerName=client&object.ownerId=16920&object.eventTypeId=1004&object.userId=50&object.message=222222333&object.important'); создание события для клиента с id 16920
// echo $content;

//
// $fio = $_POST['user'];
// $phone = $_POST['phone'];
// $checkbox = $_POST['personal-data'];
// $formname = $_POST['formname'];
//
// $fio = htmlspecialchars($fio);
// $phone = htmlspecialchars($phone);
//
// $fio = urldecode($fio);
// $phone = urldecode($phone);
//
// $fio = trim($fio);
// $phone = trim($phone);
//
// $emailAddress="annapolyanina@mail.ru";
//
// $referer = $_SERVER['HTTP_REFERER'];
// echo $fio;
// echo "<br>";
// echo $phone;
// echo "<br>";
// echo $referer;

// include "libmail.php"; //Класс для работы с мейлом через smtp SSL/TSL
// $m= new Mail("utf-8"); // начинаем
// $m->From( " Server Notification;parusaltay@yandex.ru" ); // от кого отправляется почта
// $m->To( $emailAddress ); // кому адресованно
// $m->Subject("Новая заявка с сайта ");
// $m->Body(
// "Новая заявка с сайта
// Cсылка перехода  $referer
// ИМЯ  $fio
// Оставленный телефон $phone
// Наименование формы $formname");
// $m->Priority(3);// приоритет письма
// $m->smtp_on("ssl://smtp.yandex.ru","parusaltay","RD943SFsC7", 465);
// $m->Send();    // а теперь пошла отправка


?>
