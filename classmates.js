/**
 * Ко всем элементам с классом backlight (подсветка фото)
 * добавляем обработчик события 'click' -> showPopup
 */
let backlights = document.querySelectorAll('.backlight');
backlights.forEach((backlight) => {
    backlight.addEventListener('click', () => {
        showPopup(backlight);
    });
});

/**
 * Показывать всплывающее фото с описанием
 * @param {event} - подсвеченное фото (<div class='backlight'...)
 */
function showPopup(divElement) {
    let imageSrc = './img/' + divElement.id || ''; // имя файла с фото берем из ID
    let popupText = divElement.dataset.text || getHelp(); // описание фото - из data-text

    // устанавливаем полученные значения в соответствующее место
    let popupInfo = document.getElementById('popup-info');
    let imgElement = popupInfo.querySelector('img');
    // let textElement = popupInfo.querySelector('p');
    let textElement = popupInfo.querySelector('figcaption');
    imgElement.src = imageSrc;
    textElement.innerText = popupText;

    // показываем всплывающее окно
    popupInfo.style.display = 'block';
}

/**
 * Скрыть(закрыть) всплывающее фото с описанием
 */
function hidePopup() {
    // скрываем всплывающее окно
    let popupInfo = document.getElementById('popup-info');
    popupInfo.style.display = 'none';
}

/**
 * Получить инструкцию пользователя
 */
function getHelp() {
    const help = `При клике (тапе) по подкрашенной фотографии
    одноклассника, появится его/ее более крупное современное фото
    с комментарием (Имя Фамилия - Год фото. Город проживания).
    Если желаете, чтобы высвечивалось ваше фото, 
    то присылайте его с комментарием на malik.arykov@mail.ru.
    `
    return help;
}
