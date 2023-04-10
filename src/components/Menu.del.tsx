import React, { useState } from 'react';

const prizes = [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];

const ProgressBar: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleClick = (step: number) => {
    setCurrentStep(step);
  };

  const ProgressBarItem: React.FC<{ prize: number; index: number }> = ({ prize, index }) => {
    const isActive = currentStep === index;

    return (
      <div
        className={`progress-bar-item ${isActive ? 'active' : ''}`}
        onClick={() => handleClick(index)}
      >
        <span>{`$${prize.toLocaleString()}`}</span>
      </div>
    );
  };

  return (
    <div className="progress-bar">
      {prizes.map((prize, index) => (
        <ProgressBarItem key={index} prize={prize} index={index} />
      ))}
    </div>
  );
};

export default ProgressBar;
