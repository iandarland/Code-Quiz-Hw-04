//Page Selectors
var homeEL = document.querySelector("#home-page");
var quizEl = document.querySelector("#quiz-page");
var highEl = document.querySelector("#scores-page");
//Buttton Selectors
var startBTN = document.getElementById("start-game");
var playBTN = document.getElementById('play-again');
var quizQEl= document.getElementById('question');
var ans1El = document.getElementById('answer1');
var ans2El = document.getElementById('answer2');
var ans3El = document.getElementById('answer3');
var ans4El = document.getElementById('answer4');


//Timer and ScoreHUD
var timerEl = document.getElementById('timer')
var scoreEl = document.getElementById('current-score')

//Objects
var q1
var q2 
var q3
var q4
var q5
var q6
var possible = []
var i = 0
var selectedAnswer = ""

q1 = {
    question : "This is the question",
    correct : "this is the correct answer",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]
}
q2 = {
    question : "This is the question",
    correct : "this is the correct answer",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

}
q3 = {
    question : "This is the question",
    correct : "this is the correct answer",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

}
q4 = {
    question : "This is the question",
    correct : "this is the correct answer",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

}
q5 = {
    question : "This is the question",
    correct : "this is the correct answer",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

}
q6 = {
    question : "This is the question",
    correct : "this is the correct answer",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

}

var allQuestions = [q1,q2,q3,q4,q5,q6]


possible = allQuestions[i].incorrect.concat(allQuestions[i].correct)

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function displayAnswers(){
    shuffleArray(possible)
    ans1El.textContent= possible[0];
    ans2El.textContent= possible[1];
    ans3El.textContent= possible[2];
    ans4El.textContent= possible[3];
}

function setAnswer(thisAnswer){
    thisAnswer.preventDefault
    selectedAnswer === thisAnswer
}

//Page Navagation
function init(){
    homeEL.setAttribute("style", "display: block")
}

init()

startBTN.addEventListener('click', function() {
    homeEL.setAttribute("style", "display: none");
    quizEl.setAttribute("style", "display: block");
    gameClock();
})
playBTN.addEventListener('click', function() {
    highEl.setAttribute("style", "display:none");
    homeEL.setAttribute("style", "display:block");
})


//Answer Buttons
ans1El.addEventListener('click', setAnswer(possible[0]));
ans2El.addEventListener('click', setAnswer(possible[1]));
ans3El.addEventListener('click', setAnswer(possible[2]));
ans4El.addEventListener('click', setAnswer(possible[3]));
console.log(selectedAnswer)
// ans1El.addEventListener('click', function(){selectedAnswer = possible[0]});
// ans2El.addEventListener('click', function(){selectedAnswer = possible[1]});
// ans3El.addEventListener('click', function(){selectedAnswer = possible[2]});
// ans4El.addEventListener('click', function(){selectedAnswer = possible[3]});

//CLOCK FUNCTION
function gameClock(){
    quizQEl.textContent = q1.question;
    displayAnswers()
    if (selectedAnswer === allQuestions[i].correct){
        score++
        i++
    }else{
        timeLeft -= 5
        i++
    }
    var timeLeft = 20
    var timeInterval = setInterval(function(){
        if(timeLeft > 0){
            timerEl.textContent = "You have " + timeLeft + " seconds left";
            timeLeft--;
        }else{   
            timerEl.textContent = "Game over";
            clearInterval(timeInterval);
            quizEl.setAttribute('style', 'display:none');
            highEl.setAttribute('style', 'display:block');

        }
    }, 1000)
}
