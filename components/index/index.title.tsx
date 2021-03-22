import { FC } from 'react';
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
    min-height: 240px;
    border-bottom: 2px dashed black;

    img.logo {
      filter: blur(1px);
      height: 128px;
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

  @media (max-width: 640px) {
    div.title-text {
      flex-direction: column;
      padding: 0 0 90px 0;

      img.logo {
        height: 92px;
        margin: 15px;
      }

      div.text {
        width: 100%;
        h1, h2 {
          text-align: center;
        }
      }
    }
  }
`;

export const IndexTitle:FC = () => {
  return (
    <IndexTitleContainer>
      <div className="title-text">
        <img src="/image/amplify.png" className="logo" />
        <div className="text">
          <h1>Amplify</h1>
          <h2>The Distributed Economy For Bandwidth</h2>
        </div>
      </div>
    </IndexTitleContainer>
  )
}
