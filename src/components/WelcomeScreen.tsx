/* import React from 'react';
import hand from '../images/hand 1.svg'
import '../App.css';
import { WelcomeScreenProps } from '../TypeDefinitions/types';

function WelcomeScreen(props: WelcomeScreenProps) {
  return (
    <div className="diagonally-split-background">
      <img src={hand} alt="hand" className="hand" />
      <h1 className="headline" >Who wants to be a millionaire?</h1>
      <button className="button_orange" onClick={props.onStart}>Start</button>
    </div>
  );
}

export default WelcomeScreen;
 */

import React from 'react';
import hand from '../images/hand 1.svg'

import { WelcomeScreenProps } from '../types';
import '../styles/App.css';

/* const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const handleStartClick = () => {
    onStart();
  };
 */  //try

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <div className="welcome-screen">
        <img src={hand} alt="Welcoming Hand" className="welcome-screen__image" />
      <div className="welcome-screen__container">
        <h1 className="welcome-screen__title"><span>Who wants to be</span> <span>a millionaire?</span></h1>
        <button className="welcome-screen__button" onClick={onStart}>
          Start
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
