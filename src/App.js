import React, { useState } from "react";
import "./App.css";

function App() {
  // properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How many children are in the Blacher Family?",
      options: [
        { id: 0, text: "5", isCorrect: false },
        { id: 1, text: "8", isCorrect: false },
        { id: 2, text: "2", isCorrect: false },
        { id: 3, text: "3", isCorrect: true },
      ],
    },
    {
      text: "What is the name of Bob's wife?",
      options: [
        { id: 0, text: "Linda", isCorrect: true },
        { id: 1, text: "Ginger", isCorrect: false },
        { id: 2, text: "Tina", isCorrect: false },
        { id: 3, text: "Marshmellow", isCorrect: false },
      ],
    },
    {
      text: "How often does Bob wash?",
      options: [
        { id: 0, text: "Rarely", isCorrect: true },
        { id: 1, text: "2 times a day", isCorrect: false },
        { id: 2, text: "Only on set days", isCorrect: false },
        { id: 3, text: "Just weekends", isCorrect: false },
      ],
    },
    {
      text: "How much does a burger of the day cost?",
      options: [
        { id: 0, text: "$4.99", isCorrect: false },
        { id: 1, text: "$5.95", isCorrect: true },
        { id: 2, text: "$5.00", isCorrect: false },
        { id: 3, text: "$5.99", isCorrect: false },
      ],
    },
    {
      text: "How old is Ken, Gene's imaginary best friend?",
      options: [
        { id: 0, text: "14", isCorrect: false },
        { id: 1, text: "30", isCorrect: true },
        { id: 2, text: "21", isCorrect: true },
        { id: 3, text: "28", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Bob's Burgers Quiz</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;


