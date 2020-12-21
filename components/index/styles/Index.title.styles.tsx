import styled from 'styled-components';

export const IndexTitleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  div.title-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 768px;
    min-height: 420px;
    border-bottom: 2px dashed black;

    img.logo {
      filter: blur(0.5px);
      height: 96px;
      margin: 0 30px 0 0;
    }

    div.text {
      h1 {
        font-size: 32px;
        font-weight: 400;
        padding: 0 0 15px 0;
      }

      h2 {
        font-size: 18px;
      }
    }
  }
`;