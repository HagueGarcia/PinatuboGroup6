const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  const playMatch = () => {
    const options = document.querySelectorAll(".intro button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".rng-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });

    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
          //rng
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        
        const computer2Number = Math.floor(Math.random() * 3);
        const computer2Choice = computerOptions[computer2Number];

        setTimeout(() => {

          compareHands(computer2Choice, computerChoice);

          playerHand.src = `./assets/${computer2Choice}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score span");
    const computerScore = document.querySelector(".rng-score span");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (computer2Choice, computerChoice) => {

    const winner = document.querySelector(".winner");

    if (computer2Choice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }

    if (computer2Choice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player1 Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player2 Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    if (computer2Choice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player2 Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player1 Wins";
        pScore++;
        updateScore();
        return;
      }
    }
      
    if (computer2Choice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Player2 Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player1 Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  startGame();
  playMatch();
};

game();

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
