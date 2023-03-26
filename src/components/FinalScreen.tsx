import React from 'react';
import { FinalScreenProps } from '../types';

function FinalScreen({ score }: FinalScreenProps) {
  return (
    <div>
      <p>Your final score is {score}</p>
    </div>
  );
}

export default FinalScreen;