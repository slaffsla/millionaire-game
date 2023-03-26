import React, { useState } from 'react';
import { BasePrize, QuestionsData } from '../assets/ReactQuestions';
import { GameScreenProps } from "../types";

import "../styles/App.css";

const GameScreen = ({onEnd}: GameScreenProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const currentQuestion = QuestionsData[questionIndex];

  const showMenu = () => {

  }

  const handleAnswer = (answerIndex: number) => {
    if (answerIndex === currentQuestion.correctIndex) {
      // Set to initial value on first successful attempt
      questionIndex? setScore(score*2) : setScore(BasePrize);
      console.log(score*2)
    } else {
      onEnd(score*2);
    }
    if (questionIndex + 1 < QuestionsData.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      onEnd(score*2);
    }
  };

  return (
    <div className="game">
      <div className="menu" onClick={showMenu}></div>
      <div className="game__question">{currentQuestion.question}</div>
      <div className="game__answers">
        {currentQuestion.answers.map((answer, index) => (
          <div
            key={index}
            onClick={() => handleAnswer(index)}
            className="game__answer"
          > 
            <p>{String.fromCharCode(index+65).toUpperCase()+" "}</p>
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameScreen;