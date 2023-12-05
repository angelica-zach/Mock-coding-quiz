var title=document.querySelector("#question-title");
var choices=document.querySelector("#choices");
var questionArea = document.getElementById("questions");
var final =document.getElementById("final-score");
var endScreen =document.getElementById("end-screen");
var submit=document.getElementById("submit");
var initials=document.getElementById("initials");

var questionBank=[
        {
            question: "Which isnt a coding language?",
            options: ["CSS", "JavaScript", "Meow"],
            correctAnswer: "Meow"
        },
        {
            question: "Which isnt a correct inequality?",
            options: [">=", "==", "?."],
            correctAnswer: "?."
        
    }
];

var currentQuestionIndex= 0;
var score=0;

function questionBankPlay(){
    title.textContent = ""; 
    choices.innerHTML = "";
    
    
// title
    var currentQuestion = questionBank[currentQuestionIndex];
       title.textContent=currentQuestion.question;

    // appending answer options as buttons
        currentQuestion.options.forEach(function (option, optionIndex) {
            var checkButton = document.createElement("button");
            var li = document.createElement("li");
            checkButton.setAttribute("data-index", optionIndex);
            checkButton.textContent=option;
            li.appendChild(checkButton);
            choices.appendChild(li);
            var p = document.createElement("p");
            p.textContent="";
            // event listener
            checkButton.addEventListener("click", function (event) {
                var element = event.target;
                //  element is a button
                if (element.matches("button") === true) {
                    // check answer 
                    var selectedOption = element.textContent; // Get the text content of the clicked button

                    if (selectedOption === currentQuestion.correctAnswer) {
                        
                            p.textContent="that is correct!";
                            choices.appendChild(p)
                            score++;
                        }
                    else{
                            p.textContent="that is incorrect!";
                            choices.appendChild(p)
                        timerCount=(timerCount-10);
                        }
                // move to next question after delay
                setTimeout(function () {
                    moveToNextQuestion();
                }, 1000); 
            }});
    });
};

function moveToNextQuestion(){

currentQuestionIndex++;

if (currentQuestionIndex < questionBank.length) {
    questionBankPlay();
 } else {
        gameOver();
    }
};

function gameOver(){
    clearInterval(timer);
    time.textContent = "0";
    questionArea.classList.add("hide");
    endScreen.classList.remove("hide");
    var finalScore=score;
    final.textContent=finalScore;
    //event listener
    submit.addEventListener("click", function (event) {
       
        var element = event.target;
        if (element.matches("button") === true) {
            var name=initials.value.trim();
            localStorage.setItem("initials",name);
            localStorage.setItem("score",score);
            window.location.href = "highscores.html";
    };
});
};
