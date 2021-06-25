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

  div.white-bg {
    position: absolute;
    left: 55%;
    top: -25%;
    background: white;
    width: 75%;
    height: 150%;
    transform: rotate(-15deg);
  }

  video {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
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
    position: relative;
    left: -150px;
    padding: 15px 120px;

    h2 {
      font-size: 64px;
      font-weight: 300;
      padding: 0 0 30px 0;
    }

    p {
      font-size: 24px;
    }
  }

  div.hexagon-wrap {
    position: absolute;
    left: -75px;
    top: -25px;

    width: 150px;
    height: 150px;
    
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: all 1s ease;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(180deg);
      }
      50% {
        transform: rotate(360deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes border {
      0% {
        border-radius: 0%;
      }
      25% {
        border-radius: 50%;
      }
      50% {
        border-radius: 0%;
      }
      100% {
        border-radius: 0%;
      }
    }

    animation: rotate 10s infinite;

    &.h2 {
      left: -75px;
      top: 110px;
    }

    &.h3 {
      left: -75px;
      top: 245px;
    }

    &.h4 {
      left: -75px;
      top: 380px;
    }

    &.h5 {
      left: -75px;
      top: 515px;
    }
    

    div.hexagon {
      animation: border 10s infinite;
      &::before, &::after {
        animation: border 10s infinite;
      }
    }

  }

  div.hexagon {
    width: 52%;
    height: 90%;
    
    background-image: radial-gradient(circle, hsla(266, 73%, 68%, 1) 0%, hsla(248, 98%, 84%, 1) 100%);
    
    transition: all .5s ease;
    
    position: relative;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    &::before, &::after {
      content: "";
      
      position: absolute;
    
      background: inherit;
      
      width: 100%;
      height: 100%;
      
      border-radius: 0;
      
      transition: all .5s ease;
      
      display: flex;
      align-content: center;
      justify-content: center;
      
    }
    
    &::before {
      transform: rotateZ(60deg);
    }
    
    &::after {
      transform: rotateZ(-60deg);
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
  const [h1, seth1] = useState(false);
  const [h2, seth2] = useState(false);
  const [h3, seth3] = useState(false);
  const [h4, seth4] = useState(false);
  const [h5, seth5] = useState(false);

  useEffect(() => {
    setInterval(() => {

    }, 500);
  }, []);

  return (
    <IndexTitleContainer>
      <video autoPlay loop muted>
        <source src="/video/gradient.1.mp4" type="video/mp4" />
      </video>
     
      <div className="text">
        <h2>
          <img src="/image/amplify.white.png" className="logo"/>
          Amplify
        </h2>
        <p>The Distributed Economy for Bandwidth</p>
      </div>

      <div className="white-bg">
        <div className="hexagon-wrap h1">
          <div className="hexagon"></div>
        </div>
        <div className="hexagon-wrap h2">
          <div className="hexagon"></div>
        </div>
        <div className="hexagon-wrap h3">
          <div className="hexagon"></div>
        </div>
        <div className="hexagon-wrap h4">
          <div className="hexagon"></div>
        </div>
        <div className="hexagon-wrap h5">
          <div className="hexagon"></div>
        </div>
      </div>
      <img src="/image/isometric/graph.png" className="icon"/>
    </IndexTitleContainer>
  )
}
