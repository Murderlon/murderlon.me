import styled from 'react-emotion';

const Main = styled.main`
  margin: 2em 0;
  padding: 0 2em;

  @media screen and (min-width: 50em) {
    padding: 0 11.2em;
    display: grid;
    grid-template-columns: 1fr minmax(auto, 30rem) 2fr 1fr;
  }
`;

export default Main;
