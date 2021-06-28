import { FC, useState, useEffect } from 'react';
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

  div.wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1920px;
    margin: auto;
  }

  div.white-bg {
    position: absolute;
    left: 55%;
    top: -100vh;
    background: white;
    width: 250vw;
    height: 150vh;
    transform: rotate(-15deg);
  }

  video {
    position: absolute;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
  }

  img.logo {
    position: relative;
    top: 28px;
    z-index: 1;
    height: 64px;
    margin: 0 30px 15px 5px;
  }

  img.icon {
    position: relative;
    left: 60px;
    z-index: 11;
    height: 420px;
  }

  div.text {
    padding: 45px 210px 45px 45px;

    h2 {
      font-size: 64px;
      font-weight: 300;
      padding: 0 0 30px 0;
    }

    p {
      font-size: 24px;
      line-height: 2;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    video, div.white-bg {
      display: none;
    }

    div.wrap {
      flex-direction: column;
    }

    img.icon {
      position: static;
      width: 300px;
      height: auto;
    }

    div.text {
      padding: 90px 30px;
      width: 100%;
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

      <div className="wrap">

        <div className="text">
          <h2>
            <img src="/image/amplify.white.png" className="logo"/>
            Amplify
          </h2>
          <p>The Distributed Economy for Bandwidth</p>
        </div>

        <div className="white-bg"></div>
        <img src="/image/isometric/graph.png" className="icon"/>

      </div>
    </IndexTitleContainer>
  )
}
