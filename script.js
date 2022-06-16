
const game = () => {
    let playerCount = 0;
    let computerCount = 0;
    let drawCount = 0;
    let round = 0;
    
    
    const gamePlay = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorsBtn = document.querySelector('.scissors');
        const playerButtons = document.querySelectorAll('.playBtn');
        const playElements = ['rock', 'paper', 'scissors'];
     

        playerButtons.forEach(button => {
            button.addEventListener('click', () => {
              const roundsLeft = document.querySelector('.roundsLeft');
              round++;
              roundsLeft.innerText = `Number of rounds left: ${5-round}`;

            const randomSelection = Math.floor(Math.random() * playElements.length);
            const computerSelection = (playElements[randomSelection]);
            const playerSelection = button.innerText

            winner(playerSelection, computerSelection)

            if (round == 5) {
                gameOver(playerButtons, roundsLeft)
            } 

            })
        })
    }
   
 

    const winner = (playerSelection, computerSelection) => {
        const result = document.querySelector('.result')
        const computerCountBoard = document.querySelector('.computerCountBoard')
        const playerCountBoard = document.querySelector('.playerCountBoard')
        playerSelection = playerSelection.toLowerCase()
        computerSelection = computerSelection.toLowerCase()

        if (playerSelection == computerSelection) {
            result.innerHTML = 'Draw';
            drawCount++;
            return;
        }

        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                result.innerHTML = 'Computer Won';
                computerCount++;
                computerCountBoard.innerHTML = computerCount
                return;
            }
            else {
                result.innerHTML = 'Player Won'
                playerCount++;
                playerCountBoard.innerHTML = playerCount
                return;     
            }
        } 

        if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                result.innerHTML = 'Computer Won';
                computerCount++;
                computerCountBoard.innerHTML = computerCount
                return;

            }   
            else {
                result.innerHTML = 'Player Won'
                playerCount++;
                playerCountBoard.innerHTML = playerCount
                return;
            }
        } 

        if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                result.innerHTML = 'Computer Won';
                computerCount++;
                computerCountBoard.innerHTML = computerCount
                return;

            } 
            else {
                result.innerHTML = 'Player Won'
                playerCount++;
                playerCountBoard.innerHTML = playerCount
                return;
            }
    } 
    }

    const gameOver = (playerButtons, roundsLeft) => {
 
        const selectMove = document.querySelector('.move');
        const refreshBtn = document.querySelector('.refresh');
        const result = document.querySelector('.result')
        const winSound = new Audio('./sound/winner.mp3')
        const loseSound = new Audio('./sound/gamelost.mp3')

        playerButtons.forEach(button =>{
            button.style.display = 'none';
        })

        selectMove.innerHTML = 'Game Over';
        roundsLeft.style.display = 'none';

        if (computerCount > playerCount) {
            result.style.fontSize = '2rem';
            result.innerText = '☹️ You Lost The Game ☹️';
            loseSound.play();
            result.style.color = 'red';;
          }
        
           else if (playerCount > computerCount) {
            result.style.fontSize = '2rem';
            result.innerText = '🏆 You Won The Game 🏆'
            winSound.play()
            result.style.color = 'green'
          }

          else {
            result.style.fontSize = '2rem';
            result.innerText = 'Draw';
            result.style.color = '#aeb5b9'
          }

          refreshBtn.innerHTML = 'Restart Game'
          refreshBtn.style.display = 'flex'
          refreshBtn.addEventListener('click',() => {
            window.location.reload();
        })
       }
       gamePlay()
 }
game()