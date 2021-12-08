import React, {useState} from 'react';
import styled from 'styled-components';
import {Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import {Helmet} from 'react-helmet-async';

const withLoading = (WrappedComponent, message) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarType, setSnackbarType] = useState();
    const [snackbarMessage, setSnackbarMessage] = useState();
    const [title, setTitle] = useState('Digital Signing');

    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    const setSnackbarState = (isShow, type = 'success', snackbarMsg = 'Success') => {
      setOpenSnackbar(isShow);
      setSnackbarMessage(snackbarMsg);
      setSnackbarType(type);
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };

    const setTitleState = (text) => {
      setTitle(text);
    };

    return (
      <>
        <Helmet>
          <title>{title} | Digital Signing</title>
        </Helmet>
        {isLoading && (
          <Wrapper>
            <h2>{message ? message : 'loading...'}</h2>
          </Wrapper>
        )}
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={snackbarType}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
        <WrappedComponent
          {...props}
          setLoading={setLoadingState}
          setSnackbar={setSnackbarState}
          setTitle={setTitleState}
        />
      </>
    );
  }
  return HOC;
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: #fff;
    &:after {
      content: ' .';
      animation: dots 1s steps(5, end) infinite;
    }
  }
  @keyframes dots {
    0%,
    20% {
      color: rgba(0, 0, 0, 0);
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    40% {
      color: white;
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    60% {
      text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    80%,
    100% {
      text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
    }
  }
  .MuiCircularProgress-colorPrimary {
    color: #fff !important;
  }
`;
export default withLoading;
