import { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { BasePrize, QuestionsData } from '../assets/ReactQuestions';
import { GameScreenProps } from "../types";
import InactiveImage from '../images/Inactive.svg'
import CorrectImage from '../images/Correct.svg'
import Prise_Inactive_Desktop from '../images/Prise_Inactive_Desktop.svg'
import Prise_Active_Desktop from '../images/Prise_Active_Desktop.svg'
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

  const currentQuestion = QuestionsData[questionIndex];

  const isDesktop = useMediaQuery('(min-width:768px)');

  const [menuIsShown, setMenuIsShown] = useState(isDesktop);

  console.log("showMenu: ", menuIsShown)

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

  const handleAnswer = (answerIndex: number) => {
    setCurrentAns(answerIndex);
    if (answerIndex === currentQuestion.correctIndex) {
      // Set to initial value on first successful attempt
      questionIndex === 0 ? setScore(BasePrize) : setScore(questionIndex === 8 ? 125000 : score * 2);
      console.log(score)
      setCurrentAnsIsCorrect(1)
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1);
        setCurrentAnsIsCorrect(0);
      }, 350);
    } else {
      setCurrentAnsIsCorrect(-1);
      setTimeout(() => {
        onEnd(score);
      }, 350)
    }
  };
  
  const handleMouseEnter = (answerNr:number) => {
    console.log("Entered, CurrentAnswerNr: ", answerNr)
    setIsHover(prevState => {
      const newHoverState = [...prevState];
      newHoverState[answerNr] = true;
      return newHoverState;
    });
  };
  
  const handleMouseLeave = (answerNr:number) => {
    setCurrentAns(-1);
    setIsHover(prevState => {
      const newHoverState = [...prevState];
      newHoverState[answerNr] = false;
      return newHoverState;
    });
  };
  
  return (
    <div className="game">
      {!isDesktop &&
      <div
        className="menu" onClick={() => toggleMenu()}>
        <img src={menuIsShown? MenuClose : MenuOpen}/>
      </div>}
      {((!isDesktop && !menuIsShown ) || isDesktop) && <div>
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
              <img src={getAnswerImage(index)} className="game__answer--image" alt="Answer Button" />
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
