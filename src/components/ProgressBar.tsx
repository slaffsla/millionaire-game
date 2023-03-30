import React from "react";
import styled from "styled-components";
import prizeInactive from '../images/Prise_Inactive.svg'
import prizeActive from '../images/Prise_Active.svg'
import prizeInactive_Desktop from '../images/Prise_Inactive_Desktop.svg'
import prizeActive_Desktop from '../images/Prise_Active_Desktop.svg'
import { BasePrize, QuestionsData } from '../assets/ReactQuestions'
import { useMediaQuery } from '@material-ui/core';

interface ProgressBarProps {
  totalPrize: number;
}

const ProgressBarWrapper = styled.div`
  position: absolute;
  width:100%;
  top: 0%;
  height: 100%;
  @media (min-width: 768px) {
    right: 0px;
    width: min(32%, 350px);
    background-color: var(--White-100)
  }
`;

const ProgressBarContainer = styled.div`
  top: 10%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  margin-top: 20%;
  @media (max-width: 767px) {
    align-items: center;
  }
`;

const ProgressBarItem = styled.div<{ isActive: boolean; isPast: boolean; isDesktop: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
  color: ${(props) => (props.isActive ? "#FF8B37" : props.isPast ? "#D0D0D8" : "#1C1C21")};
  background-image: url(${(props) =>
    props.isDesktop ? (props.isActive ? prizeActive_Desktop : prizeInactive_Desktop) : (props.isActive ? prizeActive : prizeInactive)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${(props) => (props.isDesktop ? "auto" : "contain")}
  padding-left: 20px;
  font-size: 14px;
  background-position: center;
  width: 100%;
  height: 40px;
  margin-bottom: 4px;
  max-width: 100%;
  filter: ${(props) =>
    props.isActive ? "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" :  "none" };
`;

/* margin-bottom: ${(props) =>
  props.isDesktop ? ("0px") : (props.isActive ? "180px" : "0px")}; */

const populateArrayWithPrizes = (initialPrize:number, totalItems:number) => {
  let ItemsArray = [initialPrize];
  for(let i=1; i<totalItems; i++) {
    ItemsArray.push(i===8? 125000 : ItemsArray[i-1]*2)
  }
  return ItemsArray;
}


const ProgressBar: React.FC<ProgressBarProps> = ({ totalPrize }) => {
  const items = populateArrayWithPrizes(BasePrize, QuestionsData.length)
  const isDesktop = useMediaQuery('(min-width:768px)');

  return (
    <ProgressBarWrapper>
      <ProgressBarContainer>
        {items.map((item:number, index:number) => (
          <ProgressBarItem
            key={index}
            isActive={item===totalPrize}
            isPast={item < totalPrize}
            isDesktop={isDesktop}
            className="progress-bar-item"
          >
            <p>${item}</p>
          </ProgressBarItem>
        ))}
      </ProgressBarContainer>
    </ProgressBarWrapper>
  );
};

export default ProgressBar;
