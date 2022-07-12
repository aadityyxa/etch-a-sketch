const slider = document.getElementById('slider');
const output = document.querySelector('#value');
const container = document.querySelector('#container')
const squares = document.querySelectorAll('.square');
const clear = document.querySelector('.clear');
const buttons = document.querySelectorAll('button');


function gridGenerator(input) {

    output.textContent = `${slider.value} X ${slider.value} Grid`;

    for(i = 0; i < (input * input); i++) {
        let square = document.createElement('div');

        square.classList.add('square');
        container.appendChild(square);

        let squareHeight = 960/input;
        let squareWidth = 960/input;

        square.style.width = `${squareWidth}px`;
        square.style.height = `${squareHeight}px`;
    
    }   
    return input;
}