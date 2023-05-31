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
