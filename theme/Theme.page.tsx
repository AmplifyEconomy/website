import styled from 'styled-components';

export const RootContainer = styled.div`
  video {
    position: fixed;
    left: 0;
    top: 0;
    min-width: 100vw;
    min-height: 100vh;
  }
`;

export const AppContainer = styled.div`
  position: relative;
  z-index: 1;
  font-family: 'Work Sans', Arial;
  padding: 0 0 180px 0;

  div.white-wrap {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    background: white;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.25);
  }
`;