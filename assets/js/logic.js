// setting inital variables
var button=document.querySelector("#start");
var time=document.querySelector("#time");
var score=0;
var timer;
var timerCount;
var startScreen=document.querySelector("#start-screen");


// starting game 
function startGame() {
    timerCount = 100;
    button.addEventListener('click', function(event){
    startTimer();
    startScreen.classList.add("hide");
    questionArea.classList.remove("hide");
    questionBankPlay();
  });
}
   
// setting timer function
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      time.textContent = timerCount;

      if (timerCount === 0) {
        clearInterval(timer);
        gameOver();
      }
    }, 1000);
  }
  
  startGame();