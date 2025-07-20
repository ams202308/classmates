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
function showPopup(htmlElement) {
    let imageSrc = './img/' + htmlElement.id || ''; // имя файла с фото берем из ID
    let imageCaption = htmlElement.dataset.text || getHelp(); // описание фото - из data-text

    // устанавливаем полученные значения в соответствующее место
    let popupInfo = document.getElementById('popup-info');
    let imgElement = popupInfo.querySelector('img');
    let textElement = popupInfo.querySelector('figcaption');
    imgElement.src = imageSrc;
    textElement.innerText = imageCaption;

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
    return `При клике (тапе) по подкрашенной фотографии
    одноклассника, появится его/ее более крупное современное фото
    с комментарием (Имя Фамилия - Год фото. Город проживания).
    Если желаете, чтобы высвечивалось ваше фото, 
    то присылайте его с комментарием Малику.
    Например, в WhatsApp "Написать контакту".
    `
}
