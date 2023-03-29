import React from 'react';
import { FinalScreenProps } from '../types';
import hand from '../images/hand 1.svg'
import '../styles/App.css';

function FinalScreen({ score, onStart }: FinalScreenProps) {
  return (
    <div className="welcome-screen">
        <img src={hand} alt="Welcoming Hand" className="welcome-screen__image" />
      <div className="welcome-screen__container">
        <h3 className="final-screen__text">Total score:</h3>
        <h1 className="welcome-screen__title"><span>${score} earned</span></h1>
        <button className="welcome-screen__button" onClick={onStart}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default FinalScreen;