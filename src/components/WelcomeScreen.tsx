import hand from '../images/hand 1.svg'

import { WelcomeScreenProps } from '../types';
import '../styles/App.css';

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
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
