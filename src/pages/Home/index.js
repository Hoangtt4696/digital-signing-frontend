import React, { memo, useCallback } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styled from 'styled-components';
import { COLOR } from 'ds-constants';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
  background-color: ${COLOR.white};
  flex: 1;
  padding: 40px 35px 0;
  text-align: center;

  .introContainer {
    background-color: ${COLOR.gray6};
    display: flex;
    border-radius: 12px;
    width: 80%;
    margin: auto;
  }

  .content {
    flex: 1;
    color: ${COLOR.emperor};
    padding: 70px 0 70px 30px;
    text-align: left;
  }

  .name {
    font-size: 42px;
  }

  .questionText {
    font-size: 20px;
    margin-top: 12px;
  }

  .btnContainer {
    margin-top: 40px;
  }

  .btnAddDoc {
    margin-right: 10px;
  }
`;

const Home = () => {
  const history = useHistory();
  const redirectToCreateDocument = useCallback(() => {
    history.push('/signing-document');
  });
  
  return (
    <div className="container">
      <Header />
      <Container>
        <div className="introContainer">
          <div className="content">
            <p className="name">Hi, Ernie</p>
            <p className="questionText">Let’s begin a new document, shall we?</p>
            <div className="btnContainer">
              <Button theme="primary" className="btnAddDoc" onClick={redirectToCreateDocument}>Create A Document</Button>
              <Button variant="outlined">Use Template</Button>
            </div>
          </div>
          <img src="/images/dashboard.svg" alt="dashboard" />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default memo(Home);
