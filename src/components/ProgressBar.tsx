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
  top: 10%;
  width: 100%;
  @media (min-width: 768px) {
    right: 2%;
    width: 25%;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  margin-bottom: 3rem;
  @media (max-width: 767px) {
    align-items: center;
  }
`;

const ProgressBarItem = styled.div<{ isActive: boolean; isPast: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: ${(props) => (props.isActive ? "#FF8B37" : props.isPast ? "#D0D0D8" : "#1C1C21")};
  background-image: url(${(props) => (props.isActive ? prizeActive : prizeInactive)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-left: 40px;
  font-size: 14px;
`;

const populateArrayWithPrizes = (initialPrize:number, totalItems:number) => {
  let ItemsArray = [initialPrize];
  for(let i=1; i<totalItems; i++) {
    ItemsArray.push(i===8? 125000 : ItemsArray[i-1]*2)
  }
  return ItemsArray;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ totalPrize }) => {
  const items = populateArrayWithPrizes(BasePrize, QuestionsData.length)

  return (
    <ProgressBarWrapper>
      <ProgressBarContainer>
        {items.map((item:number, index:number) => (
          <ProgressBarItem
            key={index}
            isActive={item===totalPrize}
            isPast={item < totalPrize}
          >
            <p>${item}</p>
          </ProgressBarItem>
        ))}
      </ProgressBarContainer>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
