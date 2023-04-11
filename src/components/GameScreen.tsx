import { useState, useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { BasePrize, QuestionsData } from '../assets/ReactQuestions';
import { GameScreenProps } from "../types";
import InactiveImage from '../images/Inactive.svg'
import CorrectImage from '../images/Correct.svg'
/* import Prise_Inactive_Desktop from '../images/Prise_Inactive_Desktop.svg'
import Prise_Active_Desktop from '../images/Prise_Active_Desktop.svg' */
import WrongImage from '../images/Wrong.svg'
import HoverImage from '../images/Hover.svg'
import MenuOpen from '../images/Menu.svg'
import MenuClose from '../images/Close.svg'

import "../styles/App.css";
import ProgressBar from './ProgressBar';

const GameScreen = ({onEnd}: GameScreenProps) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentAnsIsCorrect, setCurrentAnsIsCorrect] = useState(0); //-1 wrong, 0 reset, 1 right
  const [currentAns, setCurrentAns] = useState(-1); // reset
  const [isHover, setIsHover] = useState(new Array(4).fill(false));
  const [isDisabled, setIsDisabled] = useState(false); // whether answer buttons should be disabled or not

  const currentQuestion = QuestionsData[questionIndex];

  const isDesktop = useMediaQuery('(min-width:768px)');

  const [menuIsShown, setMenuIsShown] = useState(isDesktop);

  const getAnswerImage = (index: number) => {
    if (currentAnsIsCorrect===1 && index === currentQuestion.correctIndex) {
      return CorrectImage;
    } else if (currentAnsIsCorrect === -1 && index === currentAns) {
      return WrongImage;
    } else if (isHover[index]) {
      return HoverImage;
    } else {
      return InactiveImage;
    }
  };

  const toggleMenu = () => {
    setMenuIsShown(!menuIsShown);
  }

  const nextScore = (prevScore: number) => {
    return questionIndex === 8 ? 125000 : prevScore * 2
  }

  const handleAnswer = (answerIndex: number) => {
    if (!isDisabled) {
      // Disable answer buttons while processing answer
      setIsDisabled(true);
      setCurrentAns(answerIndex);
          if (answerIndex === currentQuestion.correctIndex) {
            // Set to initial value on first successful attempt or double prev score
              questionIndex === 0 ? setScore(BasePrize) : setScore(nextScore(score));
            setIsDisabled(true);
            setCurrentAnsIsCorrect(1);
            setTimeout(() => {
              setCurrentAnsIsCorrect(0);
              if (questionIndex >= QuestionsData.length-1) {
                onEnd(nextScore(score)); //nextScore because state change is not reflected yet here
              } else setQuestionIndex(questionIndex + 1);
              setIsDisabled(false); // Re-enable answer buttons after processing answer
            }, 350);
          } else {
            setCurrentAnsIsCorrect(-1);
            setIsDisabled(true);
            setTimeout(() => {
              onEnd(score);
            }, 350)
          }
    }
  };
  
  const handleMouseEnter = (answerNr:number) => {
    if (!isDisabled) {
      setIsHover(prevState => {
        const newHoverState = [...prevState];
        newHoverState[answerNr] = true;
        return newHoverState;
      });
    }
  };
    
  const handleMouseLeave = (answerNr:number) => {
    setCurrentAns(-1);
    if (!isDisabled) {
      setIsHover(prevState => {
        const newHoverState = [...prevState];
        newHoverState[answerNr] = false;
        return newHoverState;
      });
    }
  };
  
  
  return (
    <div className="game">
      {!isDesktop &&
      <div
        className="menu" onClick={() => toggleMenu()}>
        <img src={menuIsShown? MenuClose : MenuOpen}/>
      </div>}
      {((!isDesktop && !menuIsShown ) || isDesktop) &&
      <div className="game__qa--wrapper">
        <div className="game__question">{currentQuestion.question}</div>
        <div className="game__answers">
          {currentQuestion.answers.map((answer, index) => (
            <div
              key={index}
              onClick={() => handleAnswer(index)}
              className="game__answer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <img src={getAnswerImage(index)} alt="Answer Button" />
              <h5 className="game__answer--text">{String.fromCharCode(index+65).toUpperCase()}</h5>
              <p className="game__answer--text">{answer}</p>
            </div>
          ))}
        </div>
      </div>}
      <div className="progress-bar">
           {(isDesktop || menuIsShown) && <ProgressBar totalPrize={score}/>}
      </div>
    </div>
  );
}  

export default GameScreen;
