import styled from 'styled-components';

interface ProgressBarItemProps {
  active: boolean;
  future: boolean;
}


const ProgressBarItem = ({ active, future }: ProgressBarItemProps) => {
    return (
      <div className="progressBarItem">
        {active && <img src="../images/Prise_Active.svg" alt="active prize" />}
        {!active && <img src="../images/Prise_Inactive.svg" alt="inactive prize" />}
      </div>
    );
  };

export default ProgressBarItem;
