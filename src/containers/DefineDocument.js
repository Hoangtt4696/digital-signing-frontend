import React, { memo } from 'react';
import styled from 'styled-components';
import { COLOR } from 'ds-constants';
import { Delete } from '@material-ui/icons';
import { Switch } from '@material-ui/core';
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

  .btnContainer {
    margin-top: 100px;
    text-align: right;
    max-width: 720px;
  }

  .btnBack {
    margin-right: 20px;
    color: ${COLOR.textSecondary};
  }

  .document {
    max-width: 720px;
    background-color: ${COLOR.gray6};
    border: 1px solid silver;
    border-radius: 4px;
    padding: 24px;
    box-sizing: border-box;
  }

  .leftDocument {
    float: left;
    display: flex;
    align-items: start;
  }

  .rightDocument {
    float: right;
    display: flex;
    align-items: center;
    color: ${COLOR.textSecondary};
  }

  .clear {
    clear: both;
  }

  .deleteIcon {
    margin-left: 10px;
  }

  .documentIcon {
    margin-right: 16px;
  }

  .documentDetail {
    display: flex;
    flex-direction: column;
    color: ${COLOR.emperor};
  }

  .docName {
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 16px;
  }

  .labelRequire {
    font-weight: bold;
    font-size: 15px;
  }
`;

const CreateProject = () => {
  return (
    <Container>
      <p className="title">Define Document Process</p>
      <p className="subTitle">
        Configure the signature placement(s) and sequence of document(s) involved in this project.
      </p>
      <div className="document">
        <div className="leftDocument">
          <img className="documentIcon" src="/images/document-icon.svg" alt="document" />
          <div className="documentDetail">
            <span className="docName">Document A.pdf</span>
            <span className="labelRequire">Require Signature</span>
            <Switch color="primary" size="medium" defaultChecked />
          </div>
        </div>
        <div className="rightDocument">
          <Button>ADD PROCESS</Button>
          <Delete className="deleteIcon" />
        </div>
        <div className="clear" />
      </div>

      <div className="btnContainer">
        <Button variant="outlined" color="default" className="btnBack">
          BACK
        </Button>
        <Button disabled>CONTINUE</Button>
      </div>
      <AddDocumentModal />
    </Container>
  );
};

export default memo(CreateProject);
