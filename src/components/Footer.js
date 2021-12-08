import React from 'react';
import { COLOR } from 'ds-constants';
import styled from 'styled-components';

const Container = styled.footer`
  padding: 0 30px;
  background-color: ${COLOR.white};
  display: flex;
  align-items: center;
  font-size: 15px;
  color: ${COLOR.textSecondary};
  justify-content: flex-end;
  border-top: 1px solid ${COLOR.iron};
  height: 40px;

  .menuItem {
    border-right: 1px solid ${COLOR.textSecondary};
    padding: 0 24px;
  }

  .menuItem:last-child {
    border: none;
  }
`;

const Footer = () => (
  <Container>
    <span className="menuItem active">Privacy Policy</span>
    <span className="menuItem">Terms Of Use</span>
    <span className="menuItem">Contact Us</span>
    <span className="menuItem">Copyright © 2020 Dedoco, Inc. All rights reserved</span>
  </Container>
);

export default Footer;
