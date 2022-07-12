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

slider.oninput = function() {
    
    while(container.firstChild) {

        container.removeChild(container.firstChild);

    }
    gridGenerator(this.value);
    sketchingPen();

}


document.addEventListener('mousedown', () => {
    trigger = true;
})

document.addEventListener('mouseup',() => {
    trigger = false;
})

function sketchingPen() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => square.addEventListener('click',() => {
        square.classList.remove('erasing')
        square.classList.add('sketching');
    }))

    squares.forEach((square) => square.addEventListener('mouseenter',() => {
        if(trigger === true) {
            square.classList.remove('erasing')
            square.classList.add('sketching');
        }
    }))
    return;
}

function eraser() {
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => square.addEventListener('click',() => {
        square.classList.remove('sketching')
        square.classList.add('erasing');
    }))

    squares.forEach((square) => square.addEventListener('mouseenter', () => {
        if(trigger === true) {
            square.classList.remove('sketching')
            square.classList.add('erasing');
        }
    }))
    return;
}

function clearGrid() {     
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {square.classList.remove('sketching')})

}

function functionality() {

    buttons.forEach((button) => button.addEventListener('click', () => {
        if(button.className === 'pen') {
            sketchingPen()
        }else if(button.className === 'eraser') {
            eraser();
        }else if(button.className === 'clear') {
            clearGrid();
        }else if(button.className === 'rainbow') {
            rainbowMode();
        }
    }))

}



gridGenerator(16);
functionality();