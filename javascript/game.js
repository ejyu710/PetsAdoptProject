// Create by Eunji

$(document).ready(function () {

  // 3 questions in the quiz
  const quiz = [
    { question: "Do you like going for walks outside?", yes: 2, no: 1 },
    { question: "Do you prefer a quiet environment?", yes: 1, no: 2 },
    { question: "Do you enjoy play time and physical activity?", yes: 2, no: 1 }
  ];

  let score = 0, current = 0;

  // Show the current question or display the result if the quiz is finished
  function showQuestion() {
    if (current < quiz.length) {
      $("#quizQ, #yesBtn, #noBtn").show();
      $("#quizQ").text(quiz[current].question);
      $("#restartBtn, #resultText").hide();
    } 
    else {
      
      let result = "";
      if(score >= 5)
        result = "Dog 🐶";
      else
        result = "Cat 🐱";

      $("#resultText").text("Your perfect match is: " + result).show();
      $("#quizQ, #yesBtn, #noBtn").hide();
      $("#restartBtn").show();
    }
  }


  // Handle score and move to next question on button click
  $("#yesBtn").click(function(){
    score += quiz[current].yes;
    current++;
    showQuestion();
  });

  $("#noBtn").click(function(){
    score += quiz[current].no;
    current++;
    showQuestion();
  });

  $("#restartBtn").click(function () {
    score = 0;
    current = 0;
    showQuestion();
  });

  // Call the function on initial page load
  showQuestion();
});