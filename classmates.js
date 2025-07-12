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
    let popupText = divElement.dataset.text || ''; // описание фото - из data-text

    // устанавливаем полученные значения в соответствующее место
    let popupInfo = document.getElementById('popup-info');
    let imgElement = popupInfo.querySelector('img');
    let textElement = popupInfo.querySelector('p');
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
