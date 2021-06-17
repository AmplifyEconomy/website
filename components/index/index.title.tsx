import { FC } from 'react';
import styled from 'styled-components';

export const IndexTitleContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 640px;
  height: 480px;
  overflow: hidden;

  background: hsla(200, 100%, 84%, 1);
  background: linear-gradient(315deg, hsla(200, 100%, 84%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);
  
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  img {
    z-index: 1;
    height: 128px;
    margin: 15px 0 0 0;
  }

  div.text {
    position: relative;
    padding: 15px 60px;

    h2 {
      font-size: 64px;
      font-weight: 300;
      padding: 0 0 30px 0;
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
      <video autoPlay loop muted>
        <source src="/video/gradient.1.mp4" type="video/mp4" />
      </video>
     
      <img src="/image/amplify.white.png"/>
      <div className="text">
        <h2>Amplify</h2>
        <p>The Distributed Economy for Bandwidth</p>
      </div>
    </IndexTitleContainer>
  )
}
