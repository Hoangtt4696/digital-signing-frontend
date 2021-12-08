import React, { useEffect } from 'react';
import withLoading from 'utils/withLoading';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-size: 40px;
  font-weight: bold;
  opacity: 0.2;
`;

const NoMatch = ({ setTitle }) => {
  useEffect(() => {
    setTitle('Page not found.');
  }, []);
  return <Container>Page not found</Container>;
};

export default withLoading(NoMatch);
