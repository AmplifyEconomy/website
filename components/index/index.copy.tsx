import { FC } from 'react';
import styled from 'styled-components';

export const IndexMiningContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 90px 0 120px 0;

  div.wrap {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    min-height: 180px;
    padding: 45px 15px;

    &:last-of-type { border-bottom: none; }

    h2 {
      font-weight: 300;
      font-size: 24px;
      padding: 0 0 15px 0;
    }

    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 2;
    }

    img {
      position: relative;
      
      &.left { left: -45px; }
      &.right { left: 45px; }

      height: 320px;
      margin: 15px auto;
    }

    div.text {
      padding: 30px;
      width: 480px;
      height: auto;
      border-radius: 32px;
      background: rgba(255, 255, 255, 0.8);
    }
  }

  @media (max-width: 640px) {
    div.wrap {
      width: auto;
      padding: 45px 30px;

      h2 {
        font-size: 18px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export const IndexMining:FC = () => {
  return (
    <IndexMiningContainer>
      <div className="wrap">
        <img src="/image/isometric/printer.png" className="left"/>
        <div className="text">
          <h2>The Marketplace for Bandwidth</h2>
          <p>
            Amplify fosters a new way to buy and sell bandwidth in a completely accessible format for the
            Arweave ecosystem. Stake tokens on the network and sell bandwidth, or, use staked tokens to buy
            prioritized bandwidth.
          </p>
        </div>
      </div>
      <div className="wrap">
        <div className="text">
          <h2>A P2P Staking Network</h2>
          <p>
            Leveraging Community.js, Amplify uses a peer to peer staking model to verify and trust nodes
            in the network. You can run spy nodes that can verify and check data from Gateways.
          </p>
        </div>
        <img src="/image/isometric/computer.png" className="right"/>
      </div>
      <div className="wrap">
        <img src="/image/isometric/truck.png" className="left"/>
        <div className="text">
          <h2>An Accessible Incentive Model</h2>
          <p>
            Whether you are running a data center or a Raspberry Pi. Amplify has an accessible staking model for all
            types of users. Operate a full node, which requires TBs of space or an app specific node which often
            only requires a couple GB of space.
          </p>
        </div>
      </div>
    </IndexMiningContainer>
  )
}
