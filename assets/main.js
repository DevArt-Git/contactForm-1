let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let messageDiv = document.querySelector('.message')
let textArea = document.querySelector('#textarea')
let button = document.querySelector('#submitButton');

// Валидация при нажатии кнопки "Отправить"

function validation() {
    if ((nameInput.value === '') || (emailInput.value === '') || (textArea.value === '')) {
        messageDiv.style.cssText = 'display: block; background-color: #ff9c9c';
        messageDiv.scrollIntoView({ behavior: 'smooth' });
        messageDiv.innerHTML = 'Заполните все поля, пожалуйста!';

    } else {
        messageDiv.style.cssText = 'display: block; background-color: #93de78';
        messageDiv.scrollIntoView({ behavior: 'smooth' });
        messageDiv.innerHTML = 'Ваше сообщение отправлено!';
    }
}

