import React from 'react';
import { Box } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import { COLOR } from 'ds-constants';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 40px 0 24px;
  background-color: ${COLOR.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${COLOR.iron};
  height: 80px;
`;

const Menu = styled.div`
  margin-left: 56px;
  font-size: 15px;

  .menuItem {
    margin-right: 40px;
    cursor: pointer;
    color: ${COLOR.emperor};
  }

  .active {
    font-weight: bold;
  }
`;

const SimpleHeader = () => (
  <Container>
    <Box display="flex" alignItems="center">
      <img src="/images/logo.svg" alt="logo" />
      <Menu>
        <span className="menuItem active">Dashboard</span>
        <span className="menuItem">Project</span>
        <span className="menuItem">Verify</span>
        <span className="menuItem">Contact</span>
      </Menu>
    </Box>
    <Box color={COLOR.catalinaBlue} fontSize={15} display="flex" alignItems="center" justifyContent="space-between">
      <HelpOutline fontSize="small" />
      Help
    </Box>
  </Container>
);

export default SimpleHeader;
