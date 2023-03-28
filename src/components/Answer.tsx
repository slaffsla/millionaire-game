import React, { MouseEventHandler } from 'react';

type AnswerProps = {
  answerText: string;
  answerImage: string;
  answerNr: number;
  handleClick: MouseEventHandler<HTMLDivElement>;
  isCorrect: boolean | null;
  isCurrent: boolean;
};

const Answer = ({ answerText, answerImage, answerNr, handleClick, isCorrect, isCurrent }: AnswerProps) => {
  let backgroundColor = '';
  if (isCurrent) {
    backgroundColor = '#007FFF';
  } else if (isCorrect) {
    backgroundColor = '#00FF00';
  } else if (isCorrect === false) {
    backgroundColor = '#FF0000';
  }
  return (
    <div className="answer" onClick={handleClick} style={{ backgroundColor }}>
      <div className="answer-image">
        <img src={answerImage} alt={`Answer ${answerNr}`} />
      </div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
