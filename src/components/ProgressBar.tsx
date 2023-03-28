import React from "react";
import styled from "styled-components";
import prizeInactive from '../images/Prise_Inactive.svg'
import prizeActive from '../images/Prise_Active.svg'
import { BasePrize, QuestionsData } from '../assets/ReactQuestions'

interface ProgressBarProps {
  totalPrize: number;
}

const ProgressBarWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 25%;
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const ProgressBarItem = styled.div<{ isActive: boolean; isPast: boolean }>`
  display: flex;
  align-items: center;
  height: 30px;
  margin-bottom: 5px;
  color: ${(props) => (props.isActive ? "orange" : props.isPast ? "#ccc" : "#ddd")};
  background-image: url(${(props) => (props.isActive ? prizeActive : prizeInactive)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-left: 40px;
  font-size: 14px;
`;

const populateArrayWithPrizes = (initialPrize:number, totalItems:number) => {
  let ItemsArray = []
  for(let i=0; i<totalItems; i++) {
    ItemsArray.push(initialPrize*Math.pow(i+1, 2))
  }
  return ItemsArray;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ totalPrize }) => {
 // const progressHeight = (currentPrize / totalPrize) * 100;
  const items = populateArrayWithPrizes(BasePrize, QuestionsData.length)

  return (
    <ProgressBarWrapper className="progress-bar">
      <ProgressBarContainer>
        {items.map((item:number, index:number) => (
          <ProgressBarItem
            key={index}
            isActive={item===totalPrize}
            isPast={item >= totalPrize}
          >
            {item}
          </ProgressBarItem>
        ))}
        <div className="progress" style={{ color: 'red', backgroundColor: 'blue'  }} />
      </ProgressBarContainer>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
