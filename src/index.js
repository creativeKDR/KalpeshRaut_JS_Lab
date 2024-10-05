// Questions array with four options and the correct answer
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: 2
    },
    {
      question: "Who is the CEO of Tesla?",
      choices: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Warren Buffet"],
      correctAnswer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: 1
    },
    {
      question: "Which year was the United Nations established?",
      choices: ["1945", "1919", "1939", "1960"],
      correctAnswer: 0
    }
  ];
  
  // Variables to track progress
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to load a question and its options
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    
    // Update question text
    document.getElementById("question").textContent = currentQuestion.question;
  
    // Update choices text
    currentQuestion.choices.forEach((choice, index) => {
      document.getElementById(`choice${index}`).textContent = choice;
    });
  
    // Update progress
    document.getElementById("progress").textContent = 
      `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }
  
  // Function to check the answer and move to the next question
  function checkAnswer(choiceIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    if (choiceIndex === correctAnswer) {
      score++;
    }
  
    // Move to the next question
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  // Function to display results
  function showResults() {
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;
  
    // Hide quiz elements
    document.getElementById("quiz").innerHTML = `
      <h1>Quiz Completed</h1>
      <p id="score">You scored ${score} out of ${totalQuestions}</p>
      <p>Your percentage: ${percentage.toFixed(2)}%</p>
    `;
  }
  
  // Add event listeners to buttons
  document.getElementById("btn0").addEventListener("click", () => checkAnswer(0));
  document.getElementById("btn1").addEventListener("click", () => checkAnswer(1));
  document.getElementById("btn2").addEventListener("click", () => checkAnswer(2));
  document.getElementById("btn3").addEventListener("click", () => checkAnswer(3));
  
  // Load the first question when the page loads
  loadQuestion();
  