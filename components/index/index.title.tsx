import { FC } from 'react';
import styled from 'styled-components';

export const IndexTitleContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 640px;
  height: 80vh;

  background: hsla(200, 100%, 84%, 1);
  background: linear-gradient(315deg, hsla(200, 100%, 84%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);
  
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 128px;
    filter: blur(1px);
    margin: 15px 0 0 0;
  }

  div.text {
    padding: 15px 60px;

    h2 {
      font-size: 64px;
      font-weight: 300;
      padding: 0 0 15px 0;
    }
    p {
      font-size: 24px;
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;

    img {
      height: 96px;
    }

    div.text {
      text-align: center;
    
      h2 {
        font-size: 32px;
      }

      p {
        font-size: 18px;
        line-height: 1.5;
      }
    }
  }
`;

export const IndexTitle:FC = () => {
  return (
    <IndexTitleContainer>
      <img src="/image/amplify.white.png"/>
      <div className="text">
        <h2>Amplify</h2>
        <p>The Distributed Economy for Bandwidth</p>
      </div>
    </IndexTitleContainer>
  )
}
