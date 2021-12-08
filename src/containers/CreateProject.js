import React, { memo } from 'react';
import styled from 'styled-components';
import { COLOR } from 'ds-constants';
import { Add } from '@material-ui/icons';
import Button from 'components/Button';
import AddDocumentModal from './AddDocumentModal';

const Container = styled.div`
  color: ${COLOR.emperor};

  .title {
    font-size: 45px;
    color: ${COLOR.mineShaft};
    margin-bottom: 12px;
    font-weight: bold;
  }

  .subTitle {
    margin-bottom: 20px;
  }

  .inputProjectName {
    padding: 15px;
    width: 350px;
    margin-bottom: 20px;
  }

  .titleDocument {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  .btnAdd {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    border-radius: 3px;
    border: 1px solid silver;
  }

  .addIcon {
    color: silver;
  }

  .btnContainer {
    margin-top: 100px;
  }

  .btnBack {
    margin-right: 20px;
    color: ${COLOR.textSecondary};
  }
`;

const CreateProject = () => {
  return (
    <Container>
      <p className="title">Create New Project</p>
      <p className="subTitle">Set up the name and document(s) needed for this project</p>
      <input className="inputProjectName" placeholder="PROJECT NAME" />
      <p className="titleDocument">DOCUMENT</p>
      <p>Choose the document(s) to start the project with.</p>
      <div className="btnAdd">
        <Add className="addIcon" />
      </div>
      <div className="btnContainer">
        <Button variant="outlined" color="default" className="btnBack">BACK</Button>
        <Button disabled>CONTINUE</Button>
      </div>
      <AddDocumentModal />
    </Container>
  );
};

export default memo(CreateProject);
