const topInput = document.getElementById('top-score-setter');
const topScore = document.getElementById('top-score');
const firstPlayerBtn = document.getElementById('first-player-btn');
let score1 = 0
const firstPlayerScore = document.getElementById('first-player');

topInput.addEventListener( 'change' , function () {
    topScore.textContent = topInput.value;
});

//first player increase button
firstPlayerBtn.addEventListener('click' , function () {
    score1++;
    firstPlayerScore.textContent = score1.toString();
});
