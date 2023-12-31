// calling all needed variables
var highscoreList= document.querySelector("#highscores")
var highscores = [];
var clear=document.querySelector("#clear");

//loading as soon as page loads
retrieveHighscores();
;
// saving scores to object
function saveScore(initials, score) {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score");
    highscores.push({ name: initials,
    score: score });
    updateHighscores();
}
// Sort highscores by score 
function updateHighscores() {
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });
  
// save to local storage
    localStorage.setItem('highscores', JSON.stringify(highscores));

// display in ol
    highscoreList.innerHTML = "";
    for (var i = 0; i < highscores.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${highscores[i].name}: ${highscores[i].score}`;
        highscoreList.appendChild(li);
    }
    //remove old variables
    localStorage.removeItem("initials");
    localStorage.removeItem("score")
};
// retrieving highscores
 function retrieveHighscores() {
        var storedHighscores = localStorage.getItem('highscores');
    
        if (storedHighscores) {
            highscores = JSON.parse(storedHighscores);
            updateHighscores();
        }
    };
//clear button
    clear.addEventListener('click', function(event){
        localStorage.removeItem('highscores'); 
        updateHighscores();
    });
    saveScore();