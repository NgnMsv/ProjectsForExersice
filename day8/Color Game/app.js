var colors = generateRandomColors(6);
var pickedColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');

colorDisplay.textContent = pickedColor;
for (i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add eventListeners to each square
    squares[i].addEventListener('click', function () {
        //grab color of picked square
        var clickedColor = this.style.backgroundColor;
        //compare to the pickColor
        if (clickedColor === pickedColor) {
            //found the color
            messageDisplay.textContent = 'Correct'
            //change all of the squares color to the answer color
            changeColors(clickedColor);
            //change h1 backgroundColor
            h1.style.backgroundColor = clickedColor;
            //play again button
            resetButton.textContent = 'Play Again?'
            //change h1 background
            h1.style.backgroundColor = 'black'
        } else {
            //wrong choice
            this.style.backgroundColor = 'black'
            messageDisplay.textContent = 'Try Again'
        }
    });
}

function changeColors(color) {
    //loop through the squares
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generateRandomColors(number) {
    //make an array
    var arr = [];
    //add num random colors
    //repeat num times
    for (i = 0; i < number; i++) {
    //get random colors and push to the arr
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor() {
    //pick a 'red' from 0 -255
    var r = Math.floor((Math.random()*255 )+ 1)
    //pick a 'green' from 0 -255
    var g = Math.floor((Math.random()*255 )+ 1)
    //pick a 'blue' from 0 -255
    var b = Math.floor((Math.random()*255 )+ 1)

    return 'rgb('+r+', '+g+', '+b+')';

}

resetButton.addEventListener('click' , function () {
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a random color from array
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    //change squares colors
    for (i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});