  window.onload = function() // дожидаемся загрузки страницы
{
     initializeTimer(); // вызываем функцию инициализации таймера
}


function initializeTimer() {
	var endDate = new Date(2020,9,31,8,31); // получаем дату истечения таймера
  console.log("дата окончания",endDate);
	var currentDate = new Date(); // получаем текущую дату
	var seconds = (endDate-currentDate) / 1000; // определяем количество секунд до истечения таймера
  console.log("сикунды",seconds);
	if (seconds > 0) { // проверка - истекла ли дата обратного отсчета
		var minutes = seconds/60; // определяем количество минут до истечения таймера
    var hours = minutes/60; // определяем количество часов до истечения таймера
    var days = hours/24; // определяем количество Дней до истечения таймера

		minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
    hours = Math.floor((days-Math.floor(days))*24); // количество оставшихся часов в текущем дне
    days = Math.floor(days); // округляем до целого дня
    seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
		minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе

		setTimePage(days,hours,minutes,seconds); // выставляем начальные значения таймера

		function secOut() {
		  if (seconds == 0) { // если секунду закончились то
			  if (minutes == 0) { // если минуты закончились то
				  if (hours == 0) { // если часы закончились то
            if (days == 0) { // если часы закончились то
					         showMessage(timerId); // выводим сообщение об окончании отсчета
            }
            else {
              days--;// уменьшаем кол-во дней
  					  hours = 23; // обновляем часы
  					  minutes = 59; // обновляем минуты
  					  seconds = 59; // обновляем секунды
  				  }

				  }
				  else {
					  hours--; // уменьшаем кол-во часов
					  minutes = 59; // обновляем минуты
					  seconds = 59; // обновляем секунды
				  }
			  }
			  else {
				  minutes--; // уменьшаем кол-во минут
				  seconds = 59; // обновляем секунды
			  }
		  }
		  else {
			  seconds--; // уменьшаем кол-во секунд
		  }
		  setTimePage(days,hours,minutes,seconds); // обновляем значения таймера на странице
		}
		timerId = setInterval(secOut, 1000) // устанавливаем вызов функции через каждую секунду
	}
	else {
		alert("Установленная дата уже прошла");
	}
}

function setTimePage(d,h,m,s) { // функция выставления таймера на странице
  var elementD = document.getElementById("days"); // находим элемент с id = days
	var elementH = document.getElementById("hours"); // находим элемент с id = seconds
  var elementM = document.getElementById("minutes"); // находим элемент с id = minutes
  var elementS = document.getElementById("seconds"); // находим элемент с id = seconds
  elementD.innerHTML = d; // выставляем новые значения таймеру на странице
  elementH.innerHTML = h; // выставляем новые значения таймеру на странице
	elementM.innerHTML = m; // выставляем новые значения таймеру на странице
  elementS.innerHTML = s; // выставляем новые значения таймеру на странице
}

function showMessage(timerId) { // функция, вызываемая по истечению времени
	alert("Время истекло!");
	clearInterval(timerId); // останавливаем вызов функции через каждую секунду
}
