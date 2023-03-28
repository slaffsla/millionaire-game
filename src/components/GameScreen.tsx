import React, { useState } from 'react';
import { BasePrize, QuestionsData } from '../assets/ReactQuestions';
import { GameScreenProps } from "../types";
import InactiveImage from '../images/Inactive.svg'
import CorrectImage from '../images/Correct.svg'
import WrongImage from '../images/Wrong.svg'
import SelectedImage from '../images/Selected.svg'
import HoverImage from '../images/Hover.svg'

import "../styles/App.css";
import ProgressBar from './ProgressBar';

const GameScreen = ({onEnd}: GameScreenProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentAnsIsCorrect, setCurrentAnsIsCorrect] = useState(false);
  const [isHover, setIsHover] = useState(new Array(4).fill(false));
  const [currentAns, setCurrentAns] = useState(-1);

  const currentQuestion = QuestionsData[questionIndex];


  const answerstyle = {
    backgroundImage: `url(${
      currentAnsIsCorrect ? CorrectImage : isHover[currentAns] ? HoverImage : InactiveImage
    })`,
  };

  const showMenu = () => {

  }

  const handleAnswer = (answerIndex: number) => {
    if (answerIndex === currentQuestion.correctIndex) {
      // Set to initial value on first successful attempt
      questionIndex ? setScore(score * 2) : setScore(BasePrize);
      setCurrentAnsIsCorrect(true)
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
        setCurrentAnsIsCorrect(false);
      }, 350);
    } else {
      setTimeout(() => {
      onEnd(score);
      }, 350)
    }
  };
  
  const handleMouseEnter = (answerNr:number) => {
    setCurrentAns(answerNr);
    setIsHover(prevState => {
      const newIsHover = [...prevState];
      newIsHover[answerNr] = true;
      return newIsHover;
    });
  };

  const handleMouseLeave = (answerNr:number) => {
    setIsHover(prevState => {
      const newIsHover = [...prevState];
      newIsHover[answerNr] = false;
      return newIsHover;
    });
  };

  const getAnswerImage = (index: number) => {
    if (currentAnsIsCorrect && index === currentQuestion.correctIndex) {
      return CorrectImage;
    } else if (!currentAnsIsCorrect && index === currentAns) {
      return WrongImage;
    } else if (isHover[index]) {
      return HoverImage;
    } else if (index === currentAns) {
      return SelectedImage;
    } else {
      return InactiveImage;
    }
  };
  
  return (
    <div className="game">
      <div className="menu" onClick={() => {}}>
        <span className="menu__text"></span>
      </div>
      <div className="game__question">{currentQuestion.question}</div>
      <div className="game__answers">
        {currentQuestion.answers.map((answer, index) => (
          <div
            key={index}
            onClick={() => handleAnswer(index)}
            className={`game__answer ${currentAnsIsCorrect && index === currentQuestion.correctIndex ? "game__answer--correct" : !currentAnsIsCorrect && index === currentAns ? "game__answer--wrong" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            style={answerstyle}
          >
            <img src={getAnswerImage(index)} className="game__answer--image" alt="Answer Button" />
            <h5 className="game__answer--text">{String.fromCharCode(index+65).toUpperCase()}</h5>
            <p className="game__answer--text">{answer}</p>
          </div>
        ))}
      </div>
      <ProgressBar totalPrize={score}/>
    </div>
  );
}  
export default GameScreen;