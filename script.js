document.addEventListener('DOMContentLoaded', () => {
    const maxTurns = 6;
    let turnsLeft = maxTurns;
    let randomNumber = Math.floor(Math.random() * 40) + 1;
    console.log(randomNumber);
    const ballsContainer = document.getElementById('balls');
    const turnsLeftDisplay = document.getElementById('turns-left');
    const resultDisplay = document.getElementById('result');
    
    for (let i = 1; i <= 40; i++) {
        const ball = document.createElement('div');
        ball.classList.add('ball', 'bg-primary');
        ball.textContent = i;
        ball.addEventListener('click', () => handleGuess(i, ball));
        ballsContainer.appendChild(ball);
    }
    
    function handleGuess(guess, ball) {
        if (turnsLeft <= 0) return; 
        
        turnsLeft--;
        turnsLeftDisplay.textContent = `Turns left: ${turnsLeft}`;
        
        if (guess === randomNumber) {
            ball.classList.remove('bg-primary');
            ball.classList.add('green');
            resultDisplay.textContent = `Congratulations! You guessed the correct number in ${maxTurns - turnsLeft} turns.`;
            disableAllBalls();
        } else if (guess < randomNumber) {
            ball.classList.remove('bg-primary');
            ball.classList.add('yellow');
        } else {
            ball.classList.remove('bg-primary');
            ball.classList.add('red');
        }
        
        if (turnsLeft === 0 && guess !== randomNumber) {
            resultDisplay.textContent = `Game Over! The correct number was ${randomNumber}.`;
            disableAllBalls();
        }
    }
    
    function disableAllBalls() {
        const balls = document.querySelectorAll('.ball');
        balls.forEach(ball => ball.style.pointerEvents = 'none');
    }
});
