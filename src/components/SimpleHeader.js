import React from 'react';
import { Box } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import { COLOR } from 'ds-constants';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px 40px 24px 24px;
  background-color: ${COLOR.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${COLOR.iron};
`;

const SimpleHeader = () => (
  <Container>
    <img src="/images/logo-guest.svg" alt="logo" width="44" height="40"/>
    <Box color={COLOR.catalinaBlue} fontSize={15} display="flex" alignItems="center" justifyContent="space-between">
      <HelpOutline fontSize="small" />
      Help
    </Box>
  </Container>
);

export default SimpleHeader;
