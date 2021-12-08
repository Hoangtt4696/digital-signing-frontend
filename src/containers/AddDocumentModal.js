import React, { memo } from 'react';
import styled from 'styled-components';
import { COLOR } from 'ds-constants';
import Button from 'components/Button';
import { Dialog, DialogContent } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const Container = styled.div`
  padding: 24px 80px;
  position: relative;
  color: ${COLOR.textSecondary};

  .closeIcon {
    color: ${COLOR.emperor};
    font-size: 40px;
    top: 32px;
    right: 32px;
    position: absolute;
  }

  .title {
    color: ${COLOR.mineShaft};
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .fileContainer {
    background-color: ${COLOR.gray6};
    border-radius: 4px;
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    margin-top: 20px;
    margin-bottom: 24px;
  }

  .fileChoosenContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translate(-50%, -50%);
  }

  .drapText {
    color: ${COLOR.mineShaft};
    font-weight: bold;
    margin-bottom: 24px;
  }

  .btnChoosenFile {
    font-weight: bold;
    color: ${COLOR.white};
    background-color: ${COLOR.cloudBurst};
    padding: 10px;
    border-radius: 3px;
  }

  .btnContainer {
    text-align: right;
  }

  .btnBack {
    margin-right: 10px;
  }
`;

const AddDocumentModal = () => {
  return (
    <Dialog
      // onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={false}
      maxWidth="md"
    >
      <Container>
        <Close className="closeIcon" />
        <DialogContent>
          <p className="title">Add Document(s) to Project</p>
          <p>We will create a digital fingerprint (hash) of the document to register it to the blockchain. At any point, your document will never be uploaded to Dedoco servers.</p>
          <div className="fileContainer">
            <div className="fileChoosenContainer">
              <p className="drapText">Drag and drop the files here</p>
              <span className="btnChoosenFile">Choose Files</span>
            </div>
          </div>
          <div className="btnContainer">
            <Button variant="outlined" color="default" className="btnBack">BACK</Button>
            <Button disabled>CONTINUE</Button>
          </div>
        </DialogContent>
      </Container>
    </Dialog>
  );
};

export default memo(AddDocumentModal);
