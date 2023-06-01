/* Focus first button (portfolio block) */

var buttons = document.getElementsByClassName('portfolio__button-element');
var firstButton = buttons[0];

firstButton.style.backgroundColor = 'white';

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        var clickedButton = event.target;
        if (clickedButton !== firstButton) {
            firstButton.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        } else {
            firstButton.style.backgroundColor = 'white';
        }
    });
}

/* Scroll link (header block) */


function smoothScroll(event, target) {
    event.preventDefault();
    const element = document.getElementById(target);
    const offsetTop = element.offsetTop;
    const offsetHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const distance = offsetTop - ((windowHeight - offsetHeight) / 2);
    window.scroll({
        top: offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}

/* Check input value (touch block) */

const inputName = document.querySelector('.name');
const inputEmail = document.querySelector('.email');
const inputText = document.querySelector('.textarea');
const submitButton = document.querySelector('.submit');

submitButton.addEventListener('click', Error);

function Error() {
    const name = inputName.value;
    const email = inputEmail.value;
    const textarea = inputText.value;

    const patternName = /^[A-Za-z]+$/;
    const patternEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const patternText = /^[A-Za-z]+$/;

    const isEmptyName = patternName.test(name);
    const isEmptyEmail = patternEmail.test(email);
    const isEmptyText = patternText.test(textarea);

    inputName.style.border = isEmptyName ? '0px' : '1px solid red';
    inputEmail.style.border = isEmptyEmail ? '0px' : '1px solid red';
    inputText.style.border = isEmptyText ? '0px' : '1px solid red';
}

/* Delete padding with header */

const wrapper = document.querySelector('.wrapper');
const headers = wrapper.querySelectorAll('.header');
const contents = wrapper.querySelectorAll('.content');

function setPaddingToContents() {
    contents.forEach((element) => {
        element.style.padding = '0';
    });
}

headers.forEach((header) => {
    header.addEventListener('DOMNodeRemoved', setPaddingToContents);
});
