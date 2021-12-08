import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ModalConfirm = ({ title, content, open, handleClose, btnOk, btnCancel }) => (
  <>
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      disableEscapeKeyDown
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {btnCancel && (
          <Button onClick={btnCancel.handleClick} color="primary">
            {btnCancel.title}
          </Button>
        )}
        {btnOk && (
          <Button onClick={btnOk.handleClick} color="primary" autoFocus>
            {btnOk.title}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  </>
);

export default ModalConfirm;
