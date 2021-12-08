import React, { memo, useState } from 'react';
import SimpleHeader from 'components/SimpleHeader';
import Footer from 'components/Footer';
import styled from 'styled-components';
import SideBarProcess from 'containers/SideBarProcess';
import { COLOR } from 'ds-constants';
import CreateProject from 'containers/CreateProject';
import DefineDocument from 'containers/DefineDocument';

const Container = styled.div`
  flex: 1;
  display: flex;

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: ${COLOR.white};
  }

  .content {
    flex: 1;
    padding: 40px 0 0 80px;
  }
`;

const SingingDocument = () => {
  return (
    <div className="container">
      <SimpleHeader />
      <Container>
        <SideBarProcess
          currentStep={1}
          steps={[
            { label: 'Add Document(s)', value: 1 },
            { label: 'Add Process', value: 2 },
            { label: 'Confirmation', value: 3 },
          ]}
        />
        <div className="main-content">
          <div className="content">
            {/* <CreateProject /> */}
            <DefineDocument />
          </div>
          <Footer />
        </div>
      </Container>
    </div>
  );
};

export default memo(SingingDocument);
