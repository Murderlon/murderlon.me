import React from 'react';
import { func } from 'prop-types';
import styled from 'react-emotion';

const StyledHeader = styled.header`
  background: ${props => props.theme.red};
  padding: 1em;
  padding-bottom: 0;

  @media screen and (min-width: 50em) {
    header {
      padding: 2.5em 0;
      display: grid;
      grid-template-columns: 1fr minmax(auto, 40rem) 2fr 1fr;
    }
    div {
      padding: 0;
      grid-column: 2/span 1;
    }
    img {
      margin-bottom: 1em;
    }
  }
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

Header.propTypes = {
  children: func.isRequired
};

export default Header;
