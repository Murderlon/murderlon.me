import React from 'react';
import { array } from 'prop-types';
import styled from 'react-emotion';

const StyledHeader = styled.header`
  background: ${props => props.theme.red};
  padding: 1em;
  padding-bottom: 0;

  img {
    grid-column: 2/span 1;
    width: 25%;
    max-width: 7em;
    min-width: 5em;
    min-height: 5em;
    border-radius: 50%;
    box-shadow: -10px 10px 20px -10px ${props => props.theme.black};
  }

  @media screen and (min-width: 50em) {
    padding: 2.5em 0;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 40rem) 2fr 1fr;

    img {
      margin-bottom: 1em;
    }

    div {
      padding: 0;
      grid-column: 2/span 1;
    }
  }
`;

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

Header.propTypes = {
  children: array.isRequired
};

export default Header;
