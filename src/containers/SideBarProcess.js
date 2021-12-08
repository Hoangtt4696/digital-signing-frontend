import React, { memo } from 'react';
import styled from 'styled-components';
import { COLOR } from 'ds-constants';
import { ArrowBackIos } from '@material-ui/icons';

const Container = styled.div`
  padding: 24px 16px 24px 24px;
  color: ${COLOR.emperor};

  .step {
    font-size: 20px;
    padding: 15px;
    border-radius: 4px;
  }

  .isActive {
    background-color: ${COLOR.royalBlue};
    color: ${COLOR.white};
    font-weight: bold;
  }

  .title {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 24px;
  }

  .btnBack {
    color: ${COLOR.catalinaBlue};
    font-size: 18px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .iconBack {
    font-size: 15px;
  }
`;

const Step = ({ label, currentStep, value }) => {
  const isActive = value <= currentStep;

  return <div className={`step ${isActive ? 'isActive' : ''}`}>{label}</div>;
};

const SideBarProcess = (props) => {
  const { steps = [], currentStep = 1 } = props;

  return (
    <Container>
      <span className="btnBack">
        <ArrowBackIos className="iconBack" />
        Return to Dashboard
      </span>
      <p className="title">New Project</p>
      {steps.map((step, idx) => (
        <Step
          key={step.value}
          currentStep={currentStep}
          label={`${idx + 1}. ${step.label}`}
          value={step.value}
        />
      ))}
    </Container>
  );
};

export default memo(SideBarProcess);
