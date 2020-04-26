var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);




(function(){
  
  function myQuiz(){
    
    
 

  
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
        question: "What is my name?",
        answers: {
          a: "Nick",
          b: "John",
          c: "Will"
        },
        correctAnswer: "a"
      },
      {
        question: "What is my favorite band?",
        answers: {
          a: "Led Zeppelin",
          b: "The Beatles",
          c: "Red Hot Chili Peppers"
        },
        correctAnswer: "b"
      },
      {
        question: "What is my favorite video game?",
        answers: {
          a: "Rainbow",
          b: "Rocket League",
          c: "Call of Duty",
        },
        correctAnswer: "c"
      }
    ];

 
  myQuiz();

  
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  
  showSlide(currentSlide);

 
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
