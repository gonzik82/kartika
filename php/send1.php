<?php
$username = "info@t-kartika.ru";
$password = "ma0eh12k";
$host_api = "https://kardexpress22.mawisoft.ru/integration/set/event?object.ownerName=client&object.ownerId=16920&object.eventTypeId=1004&object.userId=50&object.message=222222333&object.important";
$param = 123;

// авторизация
$curl = curl_init($host_api);
curl_setopt($curl, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
curl_setopt($curl, CURLOPT_USERPWD, $username . ":" . $password);
// get запрос
curl_setopt($curl, CURLOPT_URL, "$host_api");
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
$result = curl_exec($curl);
// вывести результат
var_dump($result);

print_r($result);

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
