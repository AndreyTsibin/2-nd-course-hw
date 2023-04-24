//Игра 1
const nameFirst = (question) => {
  //Получаем вопрос
  const userQuestion = Number(prompt(question));
  //Узнаем к какому времени года относится число
  let message = (userQuestion <= 0) ? 'В одном году только 12 месяцев!' :
    (userQuestion == 1 || userQuestion == 2 || userQuestion == 12) ? 'Зима' :
      (userQuestion == 3 || userQuestion == 4 || userQuestion == 5) ? 'Весна' :
        (userQuestion == 6 || userQuestion == 7 || userQuestion == 8) ? 'Лето' :
          (userQuestion == 9 || userQuestion == 10 || userQuestion == 11) ? 'Осень' :
            'Вы ввели не число!'

  alert(message);
}

//Игра 2
function what() {
  let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  //Рандомизируем архив
  arr = arr.sort(() => Math.random() - 0.5);
  //Выводим сообщение
  alert(`ЗАПОМНИ ФРУКТЫ: ${arr}`);

  //Приводим архив к нижнему регистру
  const lower = arr.map(element => {
    return element.toLowerCase();
  });

  //Задаем вопросы и записываем в переменные с нижним регистром
  let userQuestionOne = prompt('Чему равнялся первый элемент массива?').toLowerCase();
  let userQuestionTwo = prompt('Чему равнялся последний элемент массива?').toLowerCase();

  //Бежим по архиву в поисках результата для сравнения
  for (let i = 0; i < lower.length; i++) {
    if (userQuestionOne == lower[0] && userQuestionTwo == lower[lower.length - 1]) {
      alert('Верно!')
      break
    }
    else if (userQuestionOne == lower[0] || userQuestionTwo == lower[lower.length - 1]) {
      alert('Вы были близки к победе!')
      break
    }
    else {
      alert('Не верно')
      break
    }
  }
}
