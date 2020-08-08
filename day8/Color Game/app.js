var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var modeButton = document.getElementsByClassName('mode');

for (i = 0; i < modeButton.length; i++) {
    modeButton[i].addEventListener('click' , function () {
        modeButton[0].classList.remove('selected');
        modeButton[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === 'Easy' ? numSquares = 3 : numSquares = 6;
        reset();
    });
}

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
            //change heading backgroundColor
            h1.style.backgroundColor = clickedColor;
            //play again button
            resetButton.textContent = 'Play Again?'
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
    this.textContent = 'New Colors'
    reset();
});
function reset(){
    colors = generateRandomColors(numSquares);
    //pick a random color from array
    pickedColor = pickColor();
    //change colorDisplay
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = '';
    //change squares colors
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
    //change h1 backgroundColor
    h1.style.backgroundColor = 'lightpink'
}
