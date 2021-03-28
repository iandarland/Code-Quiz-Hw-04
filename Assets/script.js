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
var qIndex = 0
var selectedAnswer = ""
var score = 0

var q1 = {
    question : "This is the question 1",
    correct : "this is the correct answer 1",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]
};
var q2 = {
    question : "This is the question 2",
    correct : "this is the correct answer 2",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

};
var q3 = {
    question : "This is the question 3",
    correct : "this is the correct answer 3",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

};
var q4 = {
    question : "This is the question 4",
    correct : "this is the correct answer 4",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

};
var q5 = {
    question : "This is the question 5",
    correct : "this is the correct answer 5",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

};
var q6 = {
    question : "This is the question 6",
    correct : "this is the correct answer 6",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]

};
var q7 = {
    question : "This is the question 7",
    correct : "this is the correct answer 7",
    incorrect : ["possible ans1", "possible ans2", "possible ans3",]
}

var allQuestions = [q1,q2,q3,q4,q5,q6]
//adding correct answers to incorrect answers and shuffling possible answers 
possible = allQuestions[qIndex].incorrect.concat(allQuestions[qIndex].correct);
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

//creating function to assign shuffled answers to buttons
function displayAnswers(){
    shuffleArray(possible)
    quizQEl.textContent= allQuestions[qIndex].question
    ans1El.textContent= possible[0];
    ans2El.textContent= possible[1];
    ans3El.textContent= possible[2];
    ans4El.textContent= possible[3];
}

//attempting to assign the value selected to selectedAnswer to compare to correct answer
// function setAnswer(thisAnswer){
//     selectedAnswer === thisAnswer;
//     console.log(selectedAnswer)
// }

//Page Navagation
function init(){
    homeEL.setAttribute("style", "display: block")
}
function quizScore(){
    if(selectedAnswer === allQuestions[qIndex].correct){
        score++
    }else{
        timeLeft -= 5
    }
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
ans1El.addEventListener('click', function(){
    var selectedAnswer = ans1El.textContent;
    qIndex++;
    displayAnswers();
    console.log(selectedAnswer)
});
ans2El.addEventListener('click', function(){
    selectedAnswer = ans2El.textContent
    qIndex++;
    displayAnswers();
    console.log(selectedAnswer)
});
ans3El.addEventListener('click', function(){
    selectedAnswer = ans3El.textContent
    qIndex++;
    displayAnswers();
    console.log(selectedAnswer)
});
ans4El.addEventListener('click', function(){
    selectedAnswer = ans4El.textContent
    qIndex++;
    displayAnswers();
    console.log(selectedAnswer)
});

//CLOCK FUNCTION
function gameClock(){
    quizQEl.textContent = allQuestions[qIndex].question;
    displayAnswers();
    var timeLeft = 60
    var timeInterval = setInterval(function(){
        if(timeLeft > 0){
            scoreEl.textContent = "Score: " + score
            timerEl.textContent = "You have " + timeLeft + " seconds left";
            timeLeft--;
        }else{   
            timerEl.textContent = "Game over";
            clearInterval(timeInterval);
            quizEl.setAttribute('style', 'display:none');
            highEl.setAttribute('style', 'display:block');
        };
        if (selectedAnswer === allQuestions[qIndex].correct){
            score++
            qIndex++
        }else{
            timeLeft -= 5
            qIndex++
        };
    }, 1000);
    
}
