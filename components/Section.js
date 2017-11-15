import React from 'react';
import { array, string } from 'prop-types';
import styled from 'react-emotion';

const StyledSection = styled.section`
  margin-bottom: 3em;

  @media (min-width: 50em) {
    grid-column: 2/span 1;
  }
`;

const Section = ({ children, title }) => {
  return (
    <StyledSection>
      <h1>{title}</h1>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  children: array,
  title: string.isRequired
};

export default Section;
