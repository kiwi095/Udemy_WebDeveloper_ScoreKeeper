const player1 = {
    score: 0,
    button: document.querySelector('#player1Btn'),
    display: document.querySelector('#player1Score')
}
const player2 = {
    score: 0,
    button: document.querySelector('#player2Btn'),
    display: document.querySelector('#player2Score')
}

const resetBtn = document.querySelector('#resetBtn');
const winningScore = document.querySelector('#winningScore');


// player1 버튼, player2 버튼 클릭시 호출
function updateScores(player, opponent) {
    player.score += 1;
    player.display.innerText = player.score;
    if (winningScore.value === player.display.innerText) {
        player.display.style.color = "green";
        opponent.display.style.color = "red";
        player.button.setAttribute('disabled', '');
        opponent.button.setAttribute('disabled', '');
    }
}

player1Btn.addEventListener('click', function () {
    updateScores(player1, player2)
})

player2Btn.addEventListener('click', function () {
    updateScores(player2, player1)
})

// 승리점수 변경, reset 버튼 클릭시 호출
function reset() {
    for (let p of [player1, player2]) {
        p.score = 0;
        p.display.innerText = 0;
        p.display.style.color = "black";
        p.button.removeAttribute('disabled');
    }
}

resetBtn.addEventListener('click', reset)

winningScore.addEventListener('change', reset)
